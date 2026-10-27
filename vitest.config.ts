import { defineConfig } from "vitest/config";

// Les familles qui utilisent Nido sont en France : les calculs de dates
// (début de semaine, minuit) sont vérifiés dans ce fuseau.
process.env.TZ = "Europe/Paris";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
  },
});
