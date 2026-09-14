import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12141C",
        panel: "#1B1E29",
        panel2: "#20232F",
        hairline: "#2A2E3D",
        paper: "#EDEAE0",
        muted: "#9CA0AF",
        violet: "#8C7CFF",
        violetDim: "#5F52B8",
        gold: "#E0A458",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
