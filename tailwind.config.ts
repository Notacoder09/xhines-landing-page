import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        bgElev: "#121212",
        accent: "#FF6B00",
        accentHover: "#FF8124",
        ink: "#F5F5F5",
        muted: "#A3A3A3",
        line: "#1F1F1F",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "Oswald", "Impact", "sans-serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(255, 107, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
