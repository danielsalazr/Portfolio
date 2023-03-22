const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
var BundleTracker = require('webpack-bundle-tracker');
//var ExtractText = require('extract-text-webpack-plugin');

//const { dirname } = require('path');
const loader = require('sass-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //path: path.resolve(__dirname, './workshop/static/bundles/local/'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  mode:'development',
  //devtool: 'source-map',
  //watch:true,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@assets': path.resolve(__dirname, 'src/assets/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [ MiniCssExtractPlugin.loader,
          //"style-loader",
					"css-loader",
					"sass-loader",
        ],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
        // use:[
        //   {
        //     options: {
        //       name: "[name].[contenthash].[ext]",
        //       outputPath: "./assets/images/",
        //     },
        //     loader: 'url-loader',
        //   }
        // ]
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        // use: {
        //   loader: 'url-loader',
        //   options: {
        //       limit: 10000,
        //       mimetype: "application/font-woff",
        //       name: "[name].[contenthash].[ext]",
        //       outputPath: "./assets/fonts/",
        //       publicPath: "../assets/fonts/",
        //       esModule: false,
        //     },
        // }
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'pdfs/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src', 'assets/images/'),
    //       to: 'assets/images/'
    //     }
    //   ]
    // }),
    new Dotenv(),
    //new BundleAnalyzerPlugin(),
  ],
  devServer: {
    static: 
    {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    watchFiles: path.join(__dirname, "./**"), //observa los cambios en todos nuestros archivos y actualiza el navegador
    compress: true,
    historyApiFallback: true,
    port: 3006,
    open: true, //Hace que se abra en el navegador
  },
}