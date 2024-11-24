import { FeatureCollection, Feature } from "geojson";

/**
 * Hàm chia dữ liệu GeoJSON thành các chunk dựa trên tọa độ.
 * @param geojson GeoJSON cần chia.
 * @param chunkSize Kích thước chunk theo vĩ độ/kinh độ.
 * @returns Mảng các chunk GeoJSON.
 */

export function splitGeoJsonByChunks (
    geoJson : FeatureCollection,
    chunkSize : number
): FeatureCollection[] {
    
}