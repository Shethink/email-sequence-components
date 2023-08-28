"use strict";

const path = require("path");
const fs = require("fs");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  title: "Sourcebae email sequence workbench",
  ignore: ["**/__tests__/**", "**/node_modules/**"],
  exampleMode: "expand",
  defaultExample: true,
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, "./src/theme-provider"),
  },
  pagePerSection: true,
  sections: fs
    .readdirSync("src")
    .filter(
      (path) =>
        fs.lstatSync(`src/${path}`).isDirectory() &&
        !path.startsWith(".") &&
        path !== "__tests__" &&
        fs.existsSync(`src/${path}/README.md`)
    )
    .map((dir) => {
      const name = dir
        .split("-")
        .map((part) => {
          if (part === "cta" || part === "nba") {
            return part.toUpperCase();
          }
          return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
        })
        .join("");
      return {
        name: name,
        content: `src/${dir}/README.md`,
        components: `src/${dir}/${name}.tsx`,
      };
    }),

  //   getComponentPathLine: (componentPath) => {
  //     const componentName = path.basename(componentPath, ".tsx");

  //     // NOTE: this is displayed under the component name
  //     return `import { ${componentName} } from "@bmi-digital/components";`;
  //   },

  getExampleFilename: (componentPath) => {
    const specificComponentExampleFile = path
      .join(path.dirname(componentPath), "./README.md")
      .replace();

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (fs.existsSync(specificComponentExampleFile)) {
      return specificComponentExampleFile;
    }

    const exampleFile = path.join(componentPath, "../../README.md");

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (fs.existsSync(exampleFile)) {
      return exampleFile;
    }

    return null;
  },

  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json"
  ).parse,

  webpackConfig: {
    entry: "./src/index.ts",
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      modules: false,
                      targets: {
                        node: "current",
                      },
                    },
                  ],
                  "@babel/preset-react",
                ],
                env: {
                  production: {
                    presets: ["minify"],
                  },
                  test: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                  },
                },
              },
            },
          ], // , 'source-map-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "url-loader",
              options: {
                fallback: "file-loader",
                name: "[name].[ext]",
                outputPath: "fonts/",
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: "./tsconfig.json",
        }),
      ],
    },
  },

  styles: () => ({
    Playground: {
      preview: {
        // this is the 'MD' breakpoint in the theme
        [`@media (max-width: 720px)`]: {
          overflowX: "hidden",
        },
      },
    },
  }),
};
