import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import 'leaflet/dist/leaflet.css'; // Đảm bảo rằng bạn đã import CSS của Leaflet
import MapComponent from '../../../components/worlds/Map.Component';
import { useMap } from '../../../hooks/LeafletHooks/useMap';
import { TestMap } from '../../../components/worlds/TestMap';
import UpperLayerPage from './UpperLayerPage';

const HomePage: React.FC = () => {
    const { mapRef } = useMap();
    return (
        <>

            <UpperLayerPage />
            <TestMap />
        </>
    );
};

export default HomePage;
