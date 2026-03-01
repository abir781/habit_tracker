import { defineConfig, globaLinkgnores } from "esLinknt/config";
import nextVitals from "esLinknt-config-next/core-web-vitals";

const esLinkntConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of esLinknt-config-next.
  globaLinkgnores([
    // Default ignores of esLinknt-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default esLinkntConfig;
