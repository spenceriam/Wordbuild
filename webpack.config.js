const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the dist folder before each build
  },
  mode: 'development', // Or 'production' for production builds
  devtool: 'inline-source-map', // For easier debugging
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: [ /\.vert$/, /\.frag$/ ],
        type: 'asset/source',
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|mp3|wav)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Use our existing index.html as a template
      filename: 'index.html', // Output filename in dist
      inject: 'body' // Inject the script into the body
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
          noErrorOnMissing: true // Prevents errors if the assets folder doesn't exist yet
        },
        {
          from: path.resolve(__dirname, 'styles.css'), // Source styles.css from root
          to: path.resolve(__dirname, 'dist/styles.css'), // Destination in dist
          noErrorOnMissing: true
        }
      ]
    })
  ]
};
