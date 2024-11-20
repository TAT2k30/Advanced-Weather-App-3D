import { useNavigate } from 'react-router-dom';
import { WeatherProps } from '../../../rules/props/pages/WeatherProps';
import TerrainSence from '../../../components/threeScences/TerrainScence';
import WorldMapCanvas from '../../../components/threeScences/EarthScences/WorldMap';

function WeatherPage({ }: WeatherProps) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="relative w-screen h-screen margin-0 overflow-hidden">
            {/* World Map */}
            <WorldMapCanvas />

            {/* Nút quay lại */}
            <div className="absolute top-4 left-4 z-10">
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
                    onClick={handleGoBack}
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default WeatherPage;

