export interface CountryProps {
  properties: {
      name: string; // Tên chính của quốc gia
      name_long?: string; // Tên đầy đủ của quốc gia
      abbrev?: string; // Viết tắt của quốc gia
      iso_a2: string; // Mã ISO-3166-1 alpha-2
      iso_a3: string; // Mã ISO-3166-1 alpha-3
      continent: string; // Tên châu lục
      region_un: string; // Vùng địa lý (theo Liên Hợp Quốc)
      subregion?: string; // Tiểu vùng
      pop_est?: number; // Dân số ước tính
      gdp_md?: number; // GDP ước tính (triệu USD)
      income_grp?: string; // Nhóm thu nhập (ví dụ: "3. Upper middle income")
      label_x?: number; // Tọa độ X của nhãn
      label_y?: number; // Tọa độ Y của nhãn
      [key: string]: any; // Các thuộc tính khác (để mở rộng khi cần)
  };
  geometry: {
      type: string; // Loại hình học, thường là "MultiPolygon" hoặc "Polygon"
      coordinates: number[][][] | number[][][][]; // Tọa độ của quốc gia
  };
}

