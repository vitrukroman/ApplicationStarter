const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  mode: process.env.NODE_ENV,
  target: "node",
  entry: "./src/server.ts",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader', 
          }
        ]
      }
    ],
    
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: [webpackNodeExternals()]
};
