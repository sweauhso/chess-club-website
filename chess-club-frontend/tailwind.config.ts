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
        white: { DEFAULT: '#ffffff' },
        "dark-bg": "#1a1a1a", // dark background
        "medium-bg": "#262626", // medium background for cards and stuff
        'dark-text': '#bfbfbf', // light text color
        'dark-sub-text': '#d9d9d9', // dark text color
        'title-text': '#336600', // dark green
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], 
      },
    },
  },
  plugins: [],
} satisfies Config;
