import { useEffect, useRef } from "react";
import { MapContainer } from "react-leaflet";

export const useMap = () => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current) {
      console.log("Map instance: ", mapRef.current);
    }
  }, []);

  return { mapRef };
};
