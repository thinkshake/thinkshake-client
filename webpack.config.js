module.exports = {
  entry: './source/containers/App.js',
  output: {
    filename: './public/bundle/bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2', 'react'],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-runtime',
          ],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: { extensions: ['', '.js', '.jsx', '.json'] },
  node: { fs: "empty" },
};
