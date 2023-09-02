import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/shared/assets/"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@entities": path.resolve(__dirname, "./src/entities"),
        },
    },
    plugins: [react()],
});
