const path                    = require('path');
const webpack                 = require('webpack');
const WebpackCleanupPlugin    = require('webpack-cleanup-plugin');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
const dotenv                  = require('dotenv');
const dotenv_webpack          = require('dotenv-webpack');

dotenv.config();

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: './src/client/renderer.js',
    output: {
      path: path.join(__dirname, `build/${process.env.VERSION_NUMBER}/client/`),
      filename: 'bundle.js',
      publicPath: '/build/',
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules\/)/,
          loader: 'babel-loader'
        },
        {
          test: /\.env$/,
          loader: 'string-replace-loader',
          options: {
            search: 'ENVIRONMENT=DEVELOPMENT',
            replace: 'ENVIRONMENT=PRODUCTION',
          }
        }
      ],
    },
    // resolve: {
    //   extensions: ['.js', '.jsx'],
    //   alias: {
    //     'jQueryBridget':path.resolve(__dirname,'./src/client/UTILS/jquery.bridget.min.js'),
    //     // 'ImagesLoaded':path.resolve(__dirname,'./src/client/UTILS/jquery.imagesloaded.min.js'),
    //     'Masonry': path.resolve(__dirname,'./src/client/UTILS/masonry.min.js'),
    //   }
    // },
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          test: /\.jsx?$/i,
          exclude: /(node_modules\/)/,
          sourceMap: true,
          uglifyOptions: {
            ecma: 6,
            warnings: false,
            compress: true,
            topLevel: true,
            ie8: false,
          }
        })
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          ENVIRONMENT: JSON.stringify('production')
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      // new webpack.ProvidePlugin({
      //   $:'jquery',
      //   jQuery:'jquery',
      //   'window.jQuery':'jquery',
      //   'jQueryBridget':'jQueryBridget',
      //   'Masonry':'Masonry'
      // }),
      new dotenv_webpack({
        path: './.env',
        safe:true
      })
    ]
  },
  {
    name: 'server',
    target: 'node',
    entry: [
      'babel-polyfill',
      './src/server/server.js',
    ],
    output: {
      path: path.join(__dirname, `build/${process.env.VERSION_NUMBER}/server/`),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/build/',
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules\/)/,
          loader: 'babel-loader'
        },
        {
          test: /\.env$/,
          loader: 'string-replace-loader',
          options: {
            search: 'ENVIRONMENT=DEVELOPMENT',
            replace: 'ENVIRONMENT=PRODUCTION',
          }
        }
      ],
    },
    plugins: [
    ]
  }
];
