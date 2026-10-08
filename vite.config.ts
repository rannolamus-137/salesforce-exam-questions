import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" makes every link relative, so the site works at
// username.github.io/any-repo-name/ without changes.
// The finished site is written to docs/, which GitHub Pages can serve directly.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
