const path = require("path");
const fs = require("fs");
const Dotenv = require("dotenv-webpack");

function getEntryPoints(directories) {
  const entries = {};
  directories.forEach((dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const dirName = path.basename(dir);
      const fileName = file.split(".")[0];
      const entryName = `${dirName}/${fileName}`;
      try {
        entries[entryName] = "./" + filePath;
      } catch (e) {
        console.log(e);
      }
    });
  });
  return entries;
}

module.exports = {
  entry: getEntryPoints(["./src/pages", "./src/compiled-components"]),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, `../../static/main_app/dist`),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [new Dotenv()],
};
