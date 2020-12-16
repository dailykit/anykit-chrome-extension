const resolve = require("rollup-plugin-node-resolve");

export default [
  {
    input: "src/main.js",
    output: {
      file: "lib/main.js",
      format: "iife",
    },
    plugins: [resolve()],
  },
];
