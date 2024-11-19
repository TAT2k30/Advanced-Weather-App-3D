import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { HomePageProps } from '../../../rules/props/HomePageProps';


const HomePage = ({ currentBodyLightMode, currentShadowLightMode, currentTextLightMode }: HomePageProps) => {
    return (
        <>
            <div className={`align-middle ${currentBodyLightMode + " " + currentTextLightMode} transition-all duration-500`}>
                Website tutourials
            </div>
        </>
    );
};

export default HomePage;
