import { useNavigate } from 'react-router-dom';
import { PlayPageProps } from '../../../rules/props/PlayPageProps';
import TerrainSence from '../../../components/threeScences/TerrainScence';

function PlayPage({ }: PlayPageProps) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="relative min-h-screen overflow-hidden margin-0">
            <TerrainSence />
            <div className="absolute top-0 left-0 z-10 p-4">
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

export default PlayPage;
