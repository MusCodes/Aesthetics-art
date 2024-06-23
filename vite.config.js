// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                project: resolve(__dirname, "pages/project.html"),
                graphicProject: resolve(__dirname, "pages/graphic-project.html"),
                marketingProject: resolve(__dirname, "pages/marketing-project.html"),
                photographyProject: resolve(__dirname, "pages/photography-project.html"),
                webProject: resolve (__dirname, "pages/web-project.html"),
            },
        },
    },
});
