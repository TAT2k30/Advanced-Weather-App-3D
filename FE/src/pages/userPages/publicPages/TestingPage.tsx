import { useNavigate } from "react-router-dom";
import { TestingPageProps } from "../../../rules/props/pages/TestingPageProps";
import CountriesData from "../../../assets/GeoJson/world/countries.geo.json";
import { useState } from "react";
import { CountryProps } from "../../../rules/props/objects/CountryProps";
import { CommonProps } from "../../../rules/props/commons/CommonProps";
import WorldTest from "../../../components/threeScences/EarthScences/WorldTest";

function TestingPage({ currentBodyLightMode, currentShadowLightMode, currentTextLightMode, isLigtMode, setIsLightMode }: CommonProps) {
    const navigate = useNavigate();

    const [countryMap, setCountryMap] = useState<Map<string, CountryProps>>(() => {
        const map = new Map<string, CountryProps>();
        CountriesData.features.forEach((country: any) => {
            const id = country.properties.name || country.properties.id;
            map.set(id, country as CountryProps);
        });
        return map;
    });

    const [currentCountryId, setCurrentCountryId] = useState<string>(
        Array.from(countryMap.keys())[0]
    );

    const loadCountryDetail = (action: "next" | "previous") => {
        const keys = Array.from(countryMap.keys());
        const currentIndex = keys.indexOf(currentCountryId);

        if (action === "next" && currentIndex < keys.length - 1) {
            setCurrentCountryId(keys[currentIndex + 1]);
        } else if (action === "previous" && currentIndex > 0) {
            setCurrentCountryId(keys[currentIndex - 1]);
        }
    };

    const currentCountry = countryMap.get(currentCountryId);

    return (
        <WorldTest
            // UI Properties
            currentBodyLightMode={currentBodyLightMode}
            currentTextLightMode={currentTextLightMode}
            currentShadowLightMode={currentShadowLightMode}
            // Component Functions properties
            navigate={navigate}
            currentCountry={currentCountry!}
            loadCountryDetail={loadCountryDetail}
        />
    );
}

export default TestingPage;
