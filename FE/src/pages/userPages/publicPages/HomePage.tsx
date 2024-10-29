import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const Cube: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        const animate = () => {
            if (meshRef.current) {
                meshRef.current.rotation.x += 0.01;
                meshRef.current.rotation.y += 0.01;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={0x00ff00} />
        </mesh>
    );
};

const HomePage: React.FC = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
        </Canvas>
    );
};

export default HomePage;
