import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import * as d3 from 'd3';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const WorldMap: React.FC = () => {
    const mapGroupRef = useRef<THREE.Group>(null);

    useEffect(() => {
        const loadMap = async () => {
            const geoData: any = await d3.json('/assets/GeoJson/world/countries.geo.json'); // Đảm bảo đường dẫn chính xác

            if (!geoData || !mapGroupRef.current) return;

            const mapGroup = mapGroupRef.current;

            const projection = d3.geoMercator().scale(80).translate([0, 0]);

            geoData.features.forEach((feature: any) => {
                const shape = new THREE.Shape();

                feature.geometry.coordinates[0].forEach(([lon, lat]: [number, number], index: number) => {
                    const [x, y] = projection([lon, lat]) || [0, 0];
                    if (index === 0) {
                        shape.moveTo(x, y);
                    } else {
                        shape.lineTo(x, y);
                    }
                });

                const geometry = new THREE.ShapeGeometry(shape);
                const material = new THREE.MeshBasicMaterial({ color: 0x228b22, side: THREE.DoubleSide });
                const mesh = new THREE.Mesh(geometry, material);

                mapGroup.add(mesh);
            });
        };

        loadMap();
    }, []);

    return <group ref={mapGroupRef} />;
};

const WorldMapCanvas: React.FC = () => {
    const [isLoading, setIsloading] = useState<boolean>(true);

    const handleLoadMap = () => {
        setIsloading(false);
    };

    return (
        <>
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black/70">
                    {/* Loading spinner */}
                    <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-blue-500 rounded-full" />
                </div>
            )}

            <Canvas onCreated={handleLoadMap} camera={{ position: [0, 0, 400], fov: 30 }}>
                {/* Lights */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} />

                {/* World Map */}
                <WorldMap />

                {/* Controls */}
                <OrbitControls />
            </Canvas>
        