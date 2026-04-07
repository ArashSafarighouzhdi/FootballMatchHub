import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/football": {
          target: env.VITE_FOOTBALL_DATA_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/football/, ""),
        },
      },
    },
  };
});
