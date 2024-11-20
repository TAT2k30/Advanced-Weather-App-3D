export interface CountryProps {
  type: string;
  id: string;
  geometry: {
    type: "MultiPolygon" | "Polygon"; // Loại hình học (ví dụ: "Polygon", "Point", "MultiPolygon")
    coordinates: number[][] | number[][][]; // Tọa độ, có thể là mảng các mảng số (đối với Polygon hoặc MultiPolygon)
  };
  properties: {
    name: string; // Tên quốc gia
  };
}
