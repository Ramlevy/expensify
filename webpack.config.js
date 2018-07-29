const path = require('path');   // require is built in Node Function
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



// entry -> output
module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',  // js entry point
    output: {
      path: path.join(__dirname, 'public', 'dist'), // using node path to create specific path for the bundle file
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // Sourcamap - lets chrome know where the error is (shows which file instead of bundle.js)
    devServer: {        // webpack-dev-server package, server from the "public" path
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,  // Telling the dev server for each page to redirect to index.html (Client side routing. Refreshing on page would fail otherwise)
      publicPath: '/dist/'
    }
  };
};


// Babel Plugins
// transform-class-properties - lets us remove constructor from class and the Binding this.functions
// transform-object-rest-spread - Spread for objects
