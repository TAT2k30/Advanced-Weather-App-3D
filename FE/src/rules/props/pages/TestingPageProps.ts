import { NavigateFunction } from "react-router-dom";
import { CommonProps } from "../commons/CommonProps";
import { CountryProps } from "../objects/CountryProps";

export interface TestingPageProps extends CommonProps {
  navigate: NavigateFunction;
  currentCountry: CountryProps;
  loadCountryDetail: (action: "next" | "previous") => void;
}
