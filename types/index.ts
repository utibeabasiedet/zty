import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string | any;
  rightIcon?: string | any;
  disabled?:{};
  onClick?: () => void;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchNumberProps {
  number: string;
  // setNumber: (manufacturer: string) => void;
}
export interface SubscribeProps {
  text: string;
  // setNumber: (manufacturer: string) => void;
}
