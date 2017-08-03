var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'Vue'
  },
  module: {
    loaders: [
      {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
      {test: /\.js/, loader: 'babel-loader'},
      {test: /\.html$/, loader: "html-loader"},
      {test: /\.vue$/, loader: "vue-loader"}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    },
    extensions: ['.js', '.json', '.vue']
  }
}