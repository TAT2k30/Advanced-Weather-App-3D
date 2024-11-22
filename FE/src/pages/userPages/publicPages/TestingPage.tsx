import { useNavigate } from "react-router-dom";
import { TestingPageProps } from "../../../rules/props/pages/TestingPageProps";
import CountriesData from "../../../assets/GeoJson/world/world.geo.json";
import { useState, useEffect } from "react";
import { CountryProps } from "../../../rules/props/objects/CountryProps";
import { CommonProps } from "../../../rules/props/commons/CommonProps";
import WorldTest from "../../../components/threeScences/EarthScences/WorldTest";

function TestingPage({
    currentBodyLightMode,
    currentShadowLightMode,
    currentTextLightMode,
    isLigtMode,
    setIsLightMode,
}: CommonProps) {
    const navigate = useNavigate();

    // Initialize the country map
    const [countryMap, setCountryMap] = useState<Map<string, CountryProps>>(new Map());
    const [currentCountryId, setCurrentCountryId] = useState<string | null>(null);

    // Load countries into the map on component mount
    useEffect(() => {
        const map = new Map<string, CountryProps>();
        CountriesData.features.forEach((country: any) => {
            const id = country.properties.name || country.properties.id;
            map.set(id, country as CountryProps);
        });
        setCountryMap(map);

        // Set initial country ID
        const initialCountryId = Array.from(map.keys())[0] || null;
        setCurrentCountryId(initialCountryId);
    }, []);

    // Function to load the next or previous country
    const loadCountryDetail = (action: "next" | "previous") => {
        if (!currentCountryId) return;

        const keys = Array.from(countryMap.keys());
        const currentIndex = keys.indexOf(currentCountryId);

        if (action === "next" && currentIndex < keys.length - 1) {
            setCurrentCountryId(keys[currentIndex + 1]);
        } else if (action === "previous" && currentIndex > 0) {
            setCurrentCountryId(keys[currentIndex - 1]);
        }
    };

    const currentCountry = currentCountryId ? countryMap.get(currentCountryId) : null;

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
