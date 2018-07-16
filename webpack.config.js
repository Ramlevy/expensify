const path = require('path');   // require is built in Node Function
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
      CSSExtract
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
