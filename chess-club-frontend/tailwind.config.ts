import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: { DEFAULT: '#d7d7d7' },
        green: { DEFAULT: '#98c782' },
        white: { DEFAULT: '#ffffff' }
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], 
      },
    },
  },
  plugins: [],
} satisfies Config;
