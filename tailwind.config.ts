import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',
        'bg-navbar': '#23252b', 
      },
      gray: {
        700: '#3f3f3f',
        800: '#2d2d2d',
      },
      yellow: {
        600: '#ffc107',
        700: '#ffca28',
      },
    },
  },
  plugins: [],
};
export default config;
