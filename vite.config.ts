import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/clinique_life/", // 🔥 OBLIGATOIRE pour GitHub Pages
  plugins: [react(), tailwindcss()],
});
