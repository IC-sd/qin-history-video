import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/qin-history-video/",
  plugins: [react()],
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
