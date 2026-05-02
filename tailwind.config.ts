import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        bone: "#f4f1ec",
        cream: "#ebe6dd",
        ochre: "#b8854a",
        rust: "#8a3a1a"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
