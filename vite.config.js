import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {} from '@fortawesome/react-fontawesome';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-router-dom", "@fortawesome/react-fontawesome", "@fortawesome/free-brands-svg-icons"],
    },
  },
});
