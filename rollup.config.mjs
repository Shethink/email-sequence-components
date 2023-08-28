import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/theme-provider/fonts/index.ts",
    output: [
      {
        file: `dist/theme-provider/fonts/index.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `dist/esm/theme-provider/fonts/index.js`,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["tslib"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.build.json", declaration: false }),
      svgr(),
      url({
        include: ["**/*.woff2"],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
      terser(),
    ],
  },
];
