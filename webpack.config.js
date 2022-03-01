const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { optimize } = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[contenthash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  // devServer: {
  //   contentBase: path.resolve(__dirname, "./dist"),
  //   watchContentBase: true,
  // },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
