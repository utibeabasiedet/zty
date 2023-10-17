"use client";
import React, { useState, useEffect } from "react";
import CustomButton from "../../../(homepage)/home/components/CustomBotton";
import Progress from "./Progress";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from './Electricity.module.css'
import {
  get_current_user_default_recharge_details,
  get_recharge_fees,
  get_states_discos,
  get_meters,
  validate_customer,
} from "@/services/api/rechargeService";
import { formatNumberAsNaira, getUser } from "@/services/utilities";
import useStateManager from "@/services/stateManager";
import SaveDetails from "./SaveDetails";
import CustomSelect from "./Select";
import CombinedInput, { CombinedInputOptions } from "./CombinedInput";

// Defining the validation schema for CombinedInput separately
const combinedInputSchema = z
  .string()
  .min(10, { message: "Combined input is invalid." });

interface Props {
  progress: number;
  handleNextStep: () => void;
}

const validationSchema = z.object({
  stateId: z.string().min(10, { message: "Please select a state." }).nullable(),
  accountType: z.string().min(1, { message: "Please select a meter type." }),
  customerPhone: z
    .string()
    .length(11, { message: "Phone number should be 11 characters." }),
  customerEmail: z.string().email({ message: "Email address is invalid." }),
  amount: z
    .number({ invalid_type_error: "Amount is invalid." })
    .min(100, { message: "Amount must be N100 or higher." }),
});

type formData = z.infer<typeof validationSchema> & {
  saveBeneficiary: boolean;
  customerMeterNumber: string;
};

const Electricity = ({ progress, handleNextStep }: Props) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [discoStates, setDiscoStates] = useState<any[]>([]);
  const [meters, setMeters] = useState<CombinedInputOptions[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { recharge } = useStateManager();
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isRight, setIsRight] = useState(false);
  const [selectedText, setSelectedText] = useState("");

  const currentUser = getUser();
  const { userId, mobileNumber } = currentUser;

  const handleInputChange = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
   
  };

  const getStates = async () => {
    const { data } = await get_states_discos();
    setDiscoStates(data.response);
  };

  const getMeters = async () => {
    const { data } = await get_meters(userId);

    const meterData = data.response.map(
      (m: { meterName: any; meterNumber: any }) => ({
        text: m.meterName,
        value: m.meterNumber,
      })
    );

    setMeters(meterData);
  };

  const getFormValues = async () => {
    const defaultFields: formData = {
      customerPhone: "",
      customerEmail: "",
      accountType: "Prepaid",
      amount: 100,
      saveBeneficiary: false,
      customerMeterNumber: "",
      stateId: "",
    };

    try {
      const {
        data: { response },
      } = await get_current_user_default_recharge_details();

      if (response?.phoneNumber) {
        return {
          customerPhone: response?.phoneNumber,
          customerEmail: response?.emailAddress,
          accountType: response?.meterType,
          amount: response?.amount,
          customerMeterNumber: response?.meterNumber,
          stateId: response?.stateId,
          saveBeneficiary: false,
        };
      }
    } catch (error) {}

    defaultFields.customerPhone = mobileNumber;

    setPageLoaded(true);
    return defaultFields;
  };

  async function handleDefaultValues() {
    await getStates();
    await getMeters();
    return await getFormValues();
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(validationSchema),
    defaultValues: async () => handleDefaultValues(),
  });

  // if (!pageLoaded) {
  //   return (
  //     <div className="flex justify-center items-center h-[80vh]">
  //       <div className="relative inline-flex">
  //         <div className="w-20 h-20 bg-blue-300 rounded-full"></div>
  //         <div className="w-20 h-20 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
  //         <div className="w-20 h-20 bg-white rounded-full absolute top-0 left-0 animate-pulse"></div>
  //       </div>
  //     </div>
  //   );
  // }
  if (!pageLoaded) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
            <div className="w-16 h-16 bg-blue-300 rounded-full animate-pulse"></div>
          </div>
          <div className="w-32 h-32 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-xl font-semibold text-blue-500">Loading...</p>
      </div>
    );
  }
  
  // if (!pageLoaded) {
  //   return (
  //     <div className="flex flex-col justify-center items-center h-[80vh]">
  //       <div className="relative w-32 h-32">
  //         <div className="absolute inset-0 flex items-center justify-center">
  //           <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
  //           <div className="w-16 h-16 bg-blue-300 rounded-full animate-pulse"></div>
  //         </div>
  //         <div className="w-32 h-32 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  //         <div className="w-24 h-24 border-t-4 border-blue-400 border-solid rounded-full animate-spin-slow"></div>
          
  //       </div>
  //       <p className="mt-4 text-xl font-semibold text-blue-500">Loading...</p>
  //     </div>
  //   );
  // }

  const onSubmitForm = async (form: formData) => {
    try {
      setIsLoading(true);
      let validationError: string | null = null;

      try {
        combinedInputSchema.parse(selectedOption);
      } catch (error) {
        validationError = (error as Error).message;
        validationError = "Please, input correct meter number";
        setIsLoading(false);
      }

      if (validationError === null) {
        // Continue with the form submission if validation of the combined input succeeds
        form.customerMeterNumber = selectedOption;
        form.saveBeneficiary = isRight;

        const { data } = await validate_customer(form);

        // Update the recharge states
        recharge.set(data.response);
        recharge.amount.set(formatNumberAsNaira(form.amount));
        recharge.fee.set(formatNumberAsNaira(get_recharge_fees()));
        recharge.stateDisco.set(
          discoStates.find((d) => d.stateID == form.stateId)?.stateName
        );

        handleNextStep();
      } else {
        // Set the validation error state if validation fails
        setValidationError(validationError);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Progress progress={progress} />

      <form
        className="max-w-[390px] mx-auto"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="my-2">
          <label className="text-[#808184] font-[500px] text-[14px]">
            State Disco
          </label>
          <Controller
            name="stateId"
            control={control}
            render={({ field }) => (
              <CustomSelect
                selectedState={selectedState}
                setSelectedState={field.onChange}
              />
            )}
          />
          {errors.stateId && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.stateId.message}
            </span>
          )}
        </div>
        <div className="my-2">
          <label className="text-[#808184] flex justify-between font-[500px] text-[14px]">
            <span>Meter Number</span>
          </label>
          {selectedText && ( // Render selected text if available
      <span className="text-gray-600 text-sm ml-2">{selectedText}</span>
    )}
          <CombinedInput
            options={meters}
            value={selectedOption}
            onChange={handleInputChange}
            validationSchema={combinedInputSchema}
          />
         
          {validationError && (
            <span className="text-red-500 text-sm font-semibold">
              {validationError}
            </span>
          )}
        </div>
        <div className="my-2">
          <label className="text-[#808184] font-[500px] text-[14px]">
            Meter Type
          </label>
          <div className="relative">
            <select
              id="accountType"
              className="form-select w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600"
              {...register("accountType")}
              defaultValue="Prepaid"
            >
              <option key="Prepaid" value="Prepaid">
                Prepaid
              </option>
            </select>
          </div>
          {errors.accountType && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.accountType.message}
            </span>
          )}
        </div>

        <div className="my-2">
          <label className="text-[#808184] font-[500px] text-[14px]">
            Phone Number
          </label>
          <input
            type="text"
            readOnly={true}
            {...register("customerPhone")}
            className="w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600"
          />
          {errors.customerPhone && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.customerPhone.message}
            </span>
          )}
        </div>
        <div className="my-2">
          <label className="text-[#808184] font-[500px] text-[14px]">
            Email Address
          </label>
          <input
            type="text"
            {...register("customerEmail")}
            placeholder="xyz@gmail.com"
            className="w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600"
          />
          {errors.customerEmail && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.customerEmail.message}
            </span>
          )}
        </div>
        <div className="my-2">
          <label className="text-[#808184] font-[500px] text-[14px]">
            Amount To Recharge
          </label>
          <input
            type="text"
            {...register("amount", { valueAsNumber: true })}
            className="w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600"
          />
          {errors.amount && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.amount.message}
            </span>
          )}
        </div>

        <div className=" mb-3 flex items-center gap-2 text-[#485369] text-[16px] font-medium">
          {" "}
          <SaveDetails setIsRight={setIsRight} isRight={isRight} /> Save
          Beneficiary
        </div>

        <CustomButton
          title={isLoading ? "Validating..." : "Continue"}
          btnType="submit"
          containerStyles="border border-primary h-full bg-primary text-white rounded-md w-full"
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Electricity;
