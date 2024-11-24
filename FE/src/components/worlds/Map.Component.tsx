import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import worldGeoJson from '../../assets/GeoJson/world/world.geo.json';

interface MapComponentProps {
    mapRef: React.MutableRefObject<any>;
}

const MapComponent: React.FC<MapComponentProps> = ({ mapRef }) => {
    // Hàm callback để thêm popup hoặc các sự kiện khác vào mỗi Feature
    const onEachFeature = (feature: any, layer: any) => {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(`Country: ${feature.properties.name}`);
        }
    };

    return (
        <div className="h-[100vh] w-[100vw]">
            <MapContainer
                center={[22.0, 102.0]}
                zoom={6}
                style={{ height: '100vh', width: '100vw' }}
                ref={mapRef}
            >
                {/* <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                <GeoJSON data={worldGeoJson} onEachFeature={onEachFeature} />
            </MapContainer>
        </div>
    );
};

export default MapComponent;
