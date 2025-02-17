import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Saracchandra-Website",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Specify asset file naming convention
      },
    },
  },
});
