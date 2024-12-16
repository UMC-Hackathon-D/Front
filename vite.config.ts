import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    // 이후 서버와 연동 때 사용
    // server:{
    //     port:3000,
    //     proxy:{

    //     }
    // }
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "src") },
            {
                find: "@app",
                replacement: path.resolve(__dirname, "src/app"),
            },
            {
                find: "@pages",
                replacement: path.resolve(__dirname, "src/pages"),
            },
            {
                find: "@shared",
                replacement: path.resolve(__dirname, "src/shared"),
            },
            {
                find: "@widgets",
                replacement: path.resolve(__dirname, "src/widgets"),
            },
        ],
    },
});
