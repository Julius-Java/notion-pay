import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins_normal: ["var(--font-poppins-normal)", "Poppins"],
        poppins_semibold: ["var(--font-poppins-semibold)", "Poppins"],
        poppins_bold: ["var(--font-poppins-bold)", "Poppins"],
        poppins_extrabold: ["var(--font-poppins-extrabold)", "Poppins"],
        abeezee: ["var(--font-abeezee)", "Abeezee"],
        inter: ["var(--font-inter)", "Inter"]
      },
      colors: {
        light_green: "#0B454F",
        dark_green: "#112025",
        light_gray: "#000000BF"
      },
      screens: {
        xs: "320px",
        xsL: "340px",
        xsX: "351px"
      }
    },
  },
  plugins: [],
};
export default config;
