import { Dispatch, SetStateAction } from "react";

export interface CommonProps {
  isLigtMode?: boolean;
  setIsLightMode?: Dispatch<SetStateAction<boolean>>;
  currentBodyLightMode: string;
  currentTextLightMode: string;
  currentShadowLightMode: string;
}
