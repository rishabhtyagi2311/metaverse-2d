import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}" // Include components from UI package
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
