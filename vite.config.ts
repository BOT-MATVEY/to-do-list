import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssMinify: true,
    },
    base: "/to-do-list",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/shared/assets/"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@entities": path.resolve(__dirname, "./src/entities"),
            "@images": path.resolve(__dirname, "./public/images"),
        },
    },
    plugins: [react()],
});
