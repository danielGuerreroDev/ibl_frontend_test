const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle-[hash].js",
    publicPath: "/",
  },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
  ],
};
