module.exports = {
  input: "./src/index.ts",
  output: {
    path: "./dist",
    filename: "bundle.js",
  },
  server: {
    port: 8082,
  },
  polyfills: false,
};
