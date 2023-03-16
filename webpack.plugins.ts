import type IForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";
//@ts-ignore
import PathOverridePlugin from "path-override-webpack-plugin";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
var buildEnvironment = process.env.APP_ENVIRONMENT || "development";

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),
  new PathOverridePlugin("./config", `./config.${buildEnvironment}`, ["js"]),

  // new PathOverridePlugin(/src\/config/, `./src/${buildEnvironment}`, [
  //   "jsx",
  //   "js",
  //   "scss",
  //   "css",
  // ]),
  new VueLoaderPlugin(),
];
