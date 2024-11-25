import * as d3 from "d3";
import { FeatureCollection, Feature } from "geojson";

/**
 * Hàm chia dữ liệu GeoJSON thành các chunk dựa trên tọa độ.
 * @param geoJson GeoJSON cần chia.
 * @param chunkSize Kích thước chunk theo vĩ độ/kinh độ.
 * @returns Mảng các chunk GeoJSON.
 */
export function splitGeoJsonByChunks(
  geoJson: FeatureCollection,
  chunkSize: number
): FeatureCollection[] {
  const chunks: FeatureCollection[] = [];

  // Tạo lưới chunks dựa trên vĩ độ và kinh độ
  const latSteps = Array.from(
    { length: Math.ceil(180 / chunkSize) },
    (_, i) => -90 + i * chunkSize
  );
  const lngSteps = Array.from(
    { length: Math.ceil(360 / chunkSize) },
    (_, i) => -180 + i * chunkSize
  );

  // Duyệt qua các chunk
  for (let i = 0; i < latSteps.length - 1; i++) {
    for (let j = 0; j < lngSteps.length - 1; j++) {
      const chunkMinLat = latSteps[i];
      const chunkMaxLat = latSteps[i + 1];
      const chunkMinLng = lngSteps[j];
      const chunkMaxLng = lngSteps[j + 1];

      // Tạo một chunk GeoJSON
      const chunk: FeatureCollection = {
        type: "FeatureCollection",
        features: [],
      };

      // Lọc các feature thuộc chunk này
      geoJson.features.forEach((feature) => {
        if (feature.geometry) {
          const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(feature);

          // Kiểm tra nếu feature nằm trong chunk
          if (
            !(maxLat < chunkMinLat || minLat > chunkMaxLat) && // Kiểm tra vĩ độ
            !(maxLng < chunkMinLng || minLng > chunkMaxLng) // Kiểm tra kinh độ
          ) {
            chunk.features.push(feature);
          }
        }
      });

      if (chunk.features.length > 0) {
        chunks.push(chunk);
      }
    }
  }

  return chunks;
}
