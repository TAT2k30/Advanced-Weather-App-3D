// components/EarthSence.tsx
import { useTerrain } from "../../hooks/ThreeJsHooks/useTerrain";

const TerrainSence: React.FC = () => {
    const containerRef = useTerrain();
    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
            }}
        />
    );
};

export default TerrainSence;
