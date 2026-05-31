import { defineConfig } from "vite";

export default defineConfig({
  base: "/spa_and_beauty/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
