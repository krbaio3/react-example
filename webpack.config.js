var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
var webpack = require( 'webpack' );
var path = require( 'path' );

var basePath = __dirname;

module.exports = {
  context: path.join( basePath, "src" ),
  resolve: {
    extensions: [ '.js', '.ts', '.tsx', 'scss', 'css' ],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@src': path.resolve(__dirname, 'src/'),
    }
  },
  entry: [ '@babel/polyfill',
    'whatwg-fetch',
    './main.tsx'
  ],
  output: {
    path: path.join( basePath, 'dist' ),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 4300,
    stats: 'errors-only',
    historyApiFallback: true
  },
  module: {
    rules: [ {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          "babelCore": "@babel/core", // needed for Babel v7
        },
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              camelCase: true,
            },
          },
          {
            loader: 'postcss-loader'
          }
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin( {
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    } ),
    new MiniCssExtractPlugin( {
      filename: "[name].css",
      chunkFilename: "[id].css"
    } ),
  ],
};