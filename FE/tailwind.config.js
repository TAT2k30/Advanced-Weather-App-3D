/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        commonBlue: "#007bff",
        commonHoverBlue: "#33a1ff", // Màu hover sáng hơn

        commonBlack: "#191B1D",
        commonHoverBlack: "#3C3D3F", // Màu hover sáng hơn
        bodyBlack: '#232527',
        inputBlack: '#111212',
      }
    },
  },
  plugins: [],
}
