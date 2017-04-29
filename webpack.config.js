const path = require('path');
const webpack = require('webpack');

// TODO: config を dev と prod に分ける？
const PRODUCTION = process.env.NODE_ENV === 'production';


// TODO: common.js も作る

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: [
      // babel-polyfill is the error 'Uncaught ReferenceError: regeneratorRuntime is not defined from ?'
      'babel-polyfill', './app.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),

    // TODO: production は minify されるため .min.js にする必要がある
    filename: '[name].bundle.js',

    // FIXME: production は 他サーバー(CDN等)から配信する場合対応が必要
    // publicPath: 'http://localhost:5001/', // deliver bundled files from this public path (even file paths inside css, JavaScript)
    publicPath: '/public'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    ...(
      PRODUCTION ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          },
          sourceMap: true,
        }),
      ] : [
        new webpack.HotModuleReplacementPlugin()
      ]
    )
  ],

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /.jsx?$|.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ],
  },
  devServer: {
    port: 5001,
    inline: true,
    hot: true
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.json'] },
  node: { fs: "empty" },
};
