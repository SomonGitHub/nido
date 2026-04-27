import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [preact()],
  build: {
    target: "es2020",
    outDir: ".",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/nido-panel.ts"),
      formats: ["es"],
      fileName: () => "nido.js",
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    sourcemap: true,
  },
});
