import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/art_gallery/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        location: resolve(__dirname, "location.html"),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
