
module.exports = {
  entry: "./coinhive.js",
  output: {
    filename: "coinhive.min.js"
  },

  module: {
    rules: [
      {
        test: /cryptonight_worker_blob\.js$/,
        use: 'slash-escape-loader'
      }
    ],
  }
}
