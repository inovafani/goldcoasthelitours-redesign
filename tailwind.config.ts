import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#F26A16",
          bright: "#FF7E2E",
          deep: "#C9540A",
        },
        teal: "#1A9B96",
      },
    },
  },
  plugins: [],
};

export default config;
