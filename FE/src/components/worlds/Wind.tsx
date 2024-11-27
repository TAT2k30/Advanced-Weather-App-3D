import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as d3 from "d3";

// Kiểu dữ liệu cho particles
interface WindParticleData {
    x: number;
    y: number;
    u: number;
    v: number;
}

interface WindMapProps {
    windData: {
        particles: WindParticleData[];
    };
}

// Thành phần chính
const WindMap: React.FC<WindMapProps> = ({ windData }) => {
    const particlesRef = useRef<
        { position: [number, number, number]; velocity: [number, number, number] }[]
    >([]);

    // Xử lý dữ liệu gió bằng D3
    useEffect(() => {
        if (windData) {
            const scaleX = d3.scaleLinear().domain([0, 1000]).range([-5, 5]); // Map x
            const scaleY = d3.scaleLinear().domain([0, 1000]).range([-5, 5]); // Map y

            // Tạo danh sách particles
            const particles = windData.particles.map((d) => ({
                position: [scaleX(d.x), scaleY(d.y), 0] as [number, number, number],
                velocity: [d.u * 0.01, d.v * 0.01, 0] as [number, number, number],
            }));

            particlesRef.current = particles; // Lưu particles để render WebGL
        }
    }, [windData]);

    return (
        <Canvas>
            {/* Ánh sáng và camera */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {/* Render các particles */}
            {particlesRef.current.map((particle, index) => (
                <WindParticle
                    key={index}
                    position={particle.position}
                    velocity={particle.velocity}
                />
            ))}
        </Canvas>
    );
};

// Thành phần hạt gió (WindParticle)
interface WindParticleProps {
    position: [number, number, number];
    velocity: [number, number, number];
}
const WindParticle: React.FC<WindParticleProps> = ({ position, velocity }) => {
    const mesh = useRef<THREE.Mesh>(null);

    // Cập nhật vị trí hạt gió theo thời gian
    useFrame(() => {
        if (mesh.current) {
            mesh.current.position.x += velocity[0];
            mesh.current.position.y += velocity[1];

            // Vòng lặp lại nếu vượt quá biên
            if (mesh.current.position.x > 5) mesh.current.position.x = -5;
            if (mesh.current.position.y > 5) mesh.current.position.y = -5;
            if (mesh.current.position.x < -5) mesh.current.position.x = 5;
            if (mesh.current.position.y < -5) mesh.current.position.y = 5;
        }
    });

    return (
        <mesh ref={mesh} position={position}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
};

export default WindMap;


