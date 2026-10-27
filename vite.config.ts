import { defineConfig, type Plugin } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";
import { transform } from "esbuild";

const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8")) as { version: string };

// En mode lib ES, Vite ne retire ni les espaces ni les commentaires du bundle, et
// son propre passage esbuild arrive après renderChunk : on minifie donc à la toute
// fin, en donnant la sourcemap en entrée pour qu'esbuild la chaîne.
function minifyLibBundle(): Plugin {
  return {
    name: "nido-minify-lib",
    apply: "build",
    async generateBundle(_opts, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== "chunk") continue;
        const mapAsset = bundle[`${chunk.fileName}.map`];
        const code = chunk.code.replace(/\n\/\/# sourceMappingURL=.*$/, "");
        const inputMap = chunk.map
          ? `\n//# sourceMappingURL=data:application/json;base64,${Buffer.from(chunk.map.toString()).toString("base64")}`
          : "";
        const out = await transform(code + inputMap, {
          minify: true,
          format: "esm",
          target: "es2020",
          sourcemap: chunk.map ? "external" : false,
          sourcefile: chunk.fileName,
          legalComments: "none",
        });
        chunk.code = out.code + (mapAsset ? `//# sourceMappingURL=${mapAsset.fileName}\n` : "");
        if (mapAsset && mapAsset.type === "asset" && out.map) mapAsset.source = out.map;
      }
    },
  };
}

export default defineConfig({
  plugins: [preact(), minifyLibBundle()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
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
