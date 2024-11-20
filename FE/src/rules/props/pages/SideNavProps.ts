import { Dispatch, SetStateAction } from "react";

export interface SideNavProps {
  isSideNavOpen: boolean;
  handleCloseSideNav: Dispatch<SetStateAction<boolean>>;
}
