import { Dispatch, SetStateAction } from "react";
import { CommonProps } from "./commons/CommonProps";

export interface HeaderProps extends CommonProps {
  lightMode: boolean;
  setLightMode: Dispatch<SetStateAction<boolean>>;
}
