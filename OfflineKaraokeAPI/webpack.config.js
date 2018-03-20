const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/server.ts",
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],

  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },

  target: "node",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
