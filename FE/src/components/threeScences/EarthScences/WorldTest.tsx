import { Canvas } from "@react-three/fiber";
import { CountryProps } from "../../../rules/props/objects/CountryProps";
import { TestingPageProps } from "../../../rules/props/pages/TestingPageProps";
import { OrbitControls } from "@react-three/drei";
import * as d3 from 'd3';
import * as THREE from 'three';
import { useEffect, useRef } from "react";

const RenderCountry: React.FC<CountryProps> = ({ geometry, properties }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current || !geometry) return;

        // Tạo scene Three.js, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Chuyển đổi tọa độ (longitude, latitude) thành (x, y) sử dụng d3.geoMercator
        const projection = d3.geoMercator().scale(100).translate([window.innerWidth / 2, window.innerHeight / 2]);

        // Dữ liệu polygon sẽ được chuyển thành Shape
        const shape = new THREE.Shape();
        if (geometry.type === "Polygon" && Array.isArray(geometry.coordinates) && Array.isArray(geometry.coordinates[0])) {
            // Xử lý với Polygon (mảng đơn)
            geometry.coordinates.forEach(([lon, lat]: [number, number], index: number) => {
                const [x, y] = projection([lon, lat]) || [0, 0];
                if (index === 0) {
                    shape.moveTo(x, y);
                } else {
                    shape.lineTo(x, y);
                }
            });
        } else if (geometry.type === "MultiPolygon" && Array.isArray(geometry.coordinates)) {
            // Xử lý với MultiPolygon (mảng các mảng tọa độ)
            geometry.coordinates.forEach(polygon => {
                if (Array.isArray(polygon)) {
                    polygon.forEach(([lon, lat]: [number, number], index: number) => {
                        const [x, y] = projection([lon, lat]) || [0, 0];
                        if (index === 0) {
                            shape.moveTo(x, y);
                        } else {
                            shape.lineTo(x, y);
                        }
                    });
                }
            });
        } else {
            console.error("Unknown geometry type or malformed coordinates.");
        }



        // Tạo geometry từ Shape
        const geometry3D = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geometry3D, material);

        // Thêm mesh vào scene
        scene.add(mesh);

        // Đặt camera
        camera.position.z = 500;

        // Vẽ cảnh và camera
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            // Cleanup
            renderer.dispose();
        };
    }, [geometry]);

    return (
        <div>
            <h2>{properties.name}</h2>
            <div ref={containerRef}></div>
        </div>
    );
};


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
                    <p className="text-sm text-gray-600 text-center mb-6">
                        <Canvas camera={{ position: [0, 0, 400], fov: 30 }}>
                            {/* Lights */}
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 10]} />

                            {/* World Map */}
                            <RenderCountry {...currentCountry} />

                            {/* Controls */}
                            <OrbitControls />
                        </Canvas>
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