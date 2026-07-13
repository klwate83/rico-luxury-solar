import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#081B33",
        navySoft: "#102A4C",
        solar: "#D7A63A",
        solarLight: "#F3D58A",
        mist: "#F4F6F8"
      },
      boxShadow: {
        premium: "0 24px 60px rgba(8, 27, 51, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
