import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({   mode }) => {
  // 本地开发环境使用 '/'，生产环境使用仓库路径
  const isProduction = mode === 'production';
  const base = isProduction ? '/university-admission-generator/' : '/';

  return {
    plugins: [react()],
    base 
  };
});
