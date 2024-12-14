import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "30rem", //480px
      md: "48rem", //768px
      lg: "64rem", //1024px
      xl: "80rem", //1280px
      xxl: "100rem", //1600px
    },
    colors: {
      black: "#000000",
      white: "#FFFFFB",
      dark: "#3B0505",
      lightYellow: "#F0E4D4",
    },

    fontFamily: {
      primary: "var(--primary-font)",
      secondary: "var(--secondary-font)",
      body: "var(--body-font)",
    },
  },
  plugins: [],
} satisfies Config;
