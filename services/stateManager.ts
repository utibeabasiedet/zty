import { hookstate, useHookstate } from "@hookstate/core";

interface StateManager {
  fullname: string;
  phoneNumber: string;
  emailAddress: string;
  applicationName: string;
  recharge: {
    stateDisco: string;
    customerAddress: string;
    customerEmail: string;
    customerMeterNumber: string;
    customerName: string;
    customerPhone: string;
    ibcName: string;
    amount: string;
    fee: string;
  };
}

const state = hookstate<StateManager>({
  applicationName: "My Recharge NG",
  fullname: "",
  phoneNumber: "",
  emailAddress: "",
  recharge: {
    stateDisco: "",
    customerAddress: "",
    customerEmail: "",
    customerMeterNumber: "",
    customerName: "",
    customerPhone: "",
    ibcName: "",
    amount: "",
    fee: "",
  },
});

export default function useStateManager() {
  return useHookstate(state);
}
