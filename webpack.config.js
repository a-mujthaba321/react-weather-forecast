const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  devtool: 'inline-source-map',
  devServer: {
       contentBase: './',
       port:3000,
       inline: true,
       stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: false
      }
  },
  
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
  
    // output: {
  //   path: __dirname,
  //   publicPath: '/',
  //   filename: 'bundle.js'
  // },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './'
  // }
};
