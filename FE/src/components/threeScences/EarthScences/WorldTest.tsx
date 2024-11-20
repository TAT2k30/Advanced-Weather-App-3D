import { CountryProps } from "../../../rules/props/objects/CountryProps";
import { TestingPageProps } from "../../../rules/props/pages/TestingPageProps";

const RenderCountry: React.FC = () => {

    const data = { "type": "Feature", "id": "BHS", "properties": { "name": "The Bahamas" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-77.53466, 23.75975], [-77.78, 23.71], [-78.03405, 24.28615], [-78.40848, 24.57564], [-78.19087, 25.2103], [-77.89, 25.17], [-77.54, 24.34], [-77.53466, 23.75975]]], [[[-77.82, 26.58], [-78.91, 26.42], [-78.98, 26.79], [-78.51, 26.87], [-77.85, 26.84], [-77.82, 26.58]]], [[[-77, 26.59], [-77.17255, 25.87918], [-77.35641, 26.00735], [-77.34, 26.53], [-77.78802, 26.92516], [-77.79, 27.04], [-77, 26.59]]]] } }
    return <>
        Hello
    </>
}


function WorldTest({
    // UI Properties
    currentBodyLightMode,
    currentShadowLightMode,
    currentTextLightMode,
    isLigtMode,
    setIsLightMode,

    // Component's function properties
    navigate,
    currentCountry,
    loadCountryDetail
}: TestingPageProps) {
    return (
        <div className="relative w-screen h-screen bg-gradient-to-br from-blue-600 to-purple-800 text-white">
            {/* Nút quay lại */}
            <div className="absolute top-4 left-4 z-10">
                <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-300"
                    onClick={() => navigate(-1)}
                >
                    Go back
                </button>
            </div>

            {/* Nội dung chính */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[90%] max-w-lg">
                    <h1 className="text-xl font-semibold text-center mb-4">
                        {currentCountry?.properties.name || "Country Data"}
                    </h1>
                    <p className="text-sm text-gray-600 text-center mb-6">
                        <RenderCountry />
                    </p>

                    {/* Nút chức năng */}
                    <div className="flex justify-center gap-4">
                        <button
                            type="button"
                            className="px-4 py-2 font-medium bg-blue-700 hover:bg-blue-800 text-white rounded-lg focus:ring-4 focus:ring-blue-300"
                            onClick={() => loadCountryDetail("previous")}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg focus:ring-4 focus:ring-green-300"
                            onClick={() => loadCountryDetail("next")}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldTest;