import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "CamelliaUI",
      fileName: (format) => `camellia-ui.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into your library
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
