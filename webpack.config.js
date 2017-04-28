const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// seeting up host and port for webpack-dev-server
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const { title } = require('./package.json');

// global paths
const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
  root: path.resolve(__dirname, './')
};

// configuration for webpack-dev-server
const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m'
  }
};

function config(env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  // create css bundle
  const extractSass = new ExtractTextPlugin({
    filename: '[name]-[hash:8].css',
    disable: !isProd
  });

  const plugins = [
    // creates a separate file separating common modules from bundles
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      children: true,
      minChunks: 2
    }),

    // setting production environment will strip out
    // some of the development code from the app
    // and libraries
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),

    // create css bundle
    extractSass,

    // create index.html
    new HtmlWebpackPlugin({
      title: title,
      template: `${PATHS.src}/index.ejs`,
      inject: true,
      production: isProd,
      hash: false,
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ];

  if (isProd) {
    plugins.push(
      // minify remove some of the dead code
      new UglifyJSPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      }),
      new CleanWebpackPlugin(['dist'], { root: PATHS.root })
    );
  } else {
    plugins.push(
      // make hot reloading work
      new webpack.HotModuleReplacementPlugin(),
      // show module names instead of numbers in webpack stats
      new webpack.NamedModulesPlugin(),
      // don't spit out any errors in compiled assets
      new webpack.NoEmitOnErrorsPlugin()
    );
  }

  return {
    devtool: isProd ? 'eval' : 'inline-source-map',
    entry: {
      bundle: `${PATHS.src}/index.js`
    },
    output: {
      path: PATHS.dist,
      filename: '[name]-[hash:8].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'static/[name]-[hash:8].[ext]'
            }
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: extractSass.extract({
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  outputStyle: isProd ? 'collapsed' : 'expanded',
                  sourceMap: isProd,
                  includePaths: [PATHS.src]
                }
              }
            ],
            // use style-loader in development
            fallback: 'style-loader'
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules'), PATHS.src]
    },
    plugins,
    performance: isProd && {
      maxAssetSize: 300000,
      maxEntrypointSize: 300000,
      hints: 'warning'
    },
    devServer: {
      historyApiFallback: true,
      port: port,
      host: host,
      hot: !isProd,
      compress: isProd,
      stats: stats
    }
  };
}

module.exports = config;
