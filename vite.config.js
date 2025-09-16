import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import glob from "fast-glob";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getEntries() {
  const jsFiles = glob.sync("assets/js/**/*.js");
  const scssFiles = glob.sync("assets/scss/**/*.scss");
  const entries = {};

  [...jsFiles, ...scssFiles].forEach((file) => {
    // Ex: assets/scss/components/button.scss → scss/components/button
    const name = file.replace(/^assets\//, "").replace(/\.(scss|js)$/, "");
    entries[name] = resolve(__dirname, file);
  });

  return entries;
}

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: getEntries(),
      output: {
        entryFileNames: (chunk) => `${chunk.name}.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return assetInfo.name
              .replace(/^assets\//, "")
              .replace(/^scss\//, "css/")
              .replace(/\.scss$/, ".css");
          }
          return assetInfo.name;
        },
      },
    },
  },
});
