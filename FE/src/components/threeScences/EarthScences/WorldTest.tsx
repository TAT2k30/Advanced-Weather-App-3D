import { useState } from "react";
import { CountryProps } from "../../../rules/props/objects/CountryProps";
import { TestingPageProps } from "../../../rules/props/pages/TestingPageProps";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

interface CountryNameInput {
    countryName: string;
}

const RenderCountry: React.FC<CountryNameInput> = ({ countryName }) => {
    const countryGroupRef = useRef<THREE.Group>(null);

    useEffect(() => {
        const loadCountry = async () => {
            const geoData: any = await d3.json("src/assets/GeoJson/world/world.geo.json");

            if (!countryGroupRef.current) return;

            const countryGroup = countryGroupRef.current;

            // Lọc quốc gia dựa trên tên
            const selectedCountry = geoData.features.find(
                (countryData: any) => countryData.properties.name === countryName
            );

            if (!selectedCountry) {
                console.warn(`Country "${countryName}" not found in GeoJSON.`);
                return;
            }

            const projection = d3.geoMercator().scale(500).translate([0, 0]);

            // Xử lý dữ liệu hình học của quốc gia
            const coordinates =
                selectedCountry.geometry.type === "MultiPolygon"
                    ? selectedCountry.geometry.coordinates
                    : [selectedCountry.geometry.coordinates];

            coordinates.forEach((polygon: any) => {
                polygon.forEach((ring: any) => {
                    const shape = new THREE.Shape();

                    ring.forEach(([lon, lat]: [number, number], index: number) => {
                        const [x, y] = projection([lon, -lat]) || [0, 0];
                        if (index === 0) {
                            shape.moveTo(x, y);
                        } else {
                            shape.lineTo(x, y);
                        }
                    });

                    const geometry = new THREE.ShapeGeometry(shape);
                    const material = new THREE.MeshBasicMaterial({
                        color: 0x228b22, // Màu xanh lá cây
                        side: THREE.DoubleSide,
                    });
                    const mesh = new THREE.Mesh(geometry, material);

                    countryGroup.add(mesh);
                });
            });

            // Tính toán và căn giữa group
            const box = new THREE.Box3().setFromObject(countryGroup);
            const center = new THREE.Vector3();
            box.getCenter(center);
            countryGroup.position.set(-center.x, -center.y, -center.z);
        };

        loadCountry();
    }, [countryName]); // Theo dõi `countryName` để cập nhật khi nó thay đổi

    return <group ref={countryGroupRef} />;
};



const RenderCountryCanvas: React.FC<CountryNameInput> = ({ countryName }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
    }

    const handleLoadMap = () => {
        setIsLoading(false);
    }

    const handleControlChange = (event: any) => {
        const position = event.target.object.position;
        // console.log("Camera position : ", position.x, position.y, position.z);
    }
    return (
        <>
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black/70">
                    {/* Loading spinner */}
                    <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-blue-500 rounded-full" />
                </div>
            )}
            <Canvas
                onCreated={handleLoadMap}
                camera={{ position: [0, 0, 15], fov: 75 }}
                className="fixed top-0 left-0 w-full h-full"
                onContextMenu={handleContextMenu}
            >
                {/* Lights */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[80, 20, 20]} />

                {/* Country Map */}
                <RenderCountry countryName={countryName} />

                {/* Controls */}
                <OrbitControls onChange={handleControlChange} />
            </Canvas>


        </>
    )
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

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
    }
    return (
        <div
            onContextMenu={handleContextMenu}
            className="relative w-screen h-screen bg-gradient-to-br from-blue-600 to-purple-800 text-white">
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

                    <RenderCountryCanvas countryName={currentCountry.properties.name ? currentCountry.properties.name : "vietNam"} />


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