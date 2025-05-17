import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.justivalaw.com",
        changeOrigin: true,
      },
      "/uploads": {
        target: "https://api.justivalaw.com",
        changeOrigin: true,
      },
    },
  },
});
