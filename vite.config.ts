import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
    // 환경 변수 로드
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [react(), tsconfigPaths(), svgr()],
        server: {
            proxy: {
                "/api": {
                    target: env.VITE_API_ADDRESS, // .env 파일의 VITE_API_ADDRESS 값 사용
                    changeOrigin: true, // CORS 문제 방지
                    secure: false, // HTTPS가 아닐 경우 false 설정
                },
            },
        },
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
                {
                    find: "@assets",
                    replacement: path.resolve(__dirname, "src/shared/assets"),
                },
            ],
        },
    };
});
