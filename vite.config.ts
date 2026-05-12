import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8")) as { version: string };

export default defineConfig({
  plugins: [preact()],
  define: {
    __NIDO_VERSION__: JSON.stringify(pkg.version),
  },
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
