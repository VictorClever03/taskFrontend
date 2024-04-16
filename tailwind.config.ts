import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "firstHex":'var(--background-start-hex)',
        "secondHex":"var(--background-end-hex)",
        "textColor":"var(--text-color-middle)",
        "op":"rgba(255, 255, 255, 0.6)"
      }
    },
  },
  plugins: [],
};
export default config;
