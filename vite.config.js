import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
      css: {
        fontFamily: {
          sans: ["Josefin Sans", "Roboto", "sans-serif"],
        },
        extend: {
          boxShadow: {
            cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
            cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
            cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
            orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
            orangeMediumShadow:
              "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
          },
        },
        theme: {
          screens: {
            sm: "250px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
          },
          extend: {
            colors: {
              primary: "#1A202C",
              secondary: "#A8D7F5",
              accent: "#FFC107",
              background: "#F7F7F7",
              text: "#333",
            },
          },
        },
      },
    },
  },
});
