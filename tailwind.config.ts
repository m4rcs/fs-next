import { Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      sans: ["RubikVariable", ...theme.fontFamily.sans],
      logo: ["Lato", ...theme.fontFamily.sans],
    },
  },
  plugins: [],
} satisfies Config;
