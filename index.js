import { join } from "node:path";
import { build } from "tsdown";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const root = process.cwd();
const entry = "./src/index.ts";

const opts = {
  silent: true,
  unused: false,
  minify: false,
  clean: false,
  dts: false,
  target: "es2022",
  platform: "node",
  inputOptions: {
    resolve: {
      tsconfigFilename: join(root, "tsconfig.json"),
    },
  }
};

await build({
  ...opts,
  entry: join(root, entry),
  skipNodeModulesBundle: false,
  outputOptions: {
    file: join(__dirname, "dist", "bundled.js"),
  },
});

await build({
  ...opts,
  entry: join(root, entry),
  skipNodeModulesBundle: true,
  outputOptions: {
    file: join(__dirname, "dist", "bundled-skip.js"),
  },
});