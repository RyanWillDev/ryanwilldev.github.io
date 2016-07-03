var ExtractText = require('extract-text-webpack-plugin');

// To build the dist folder run the webpack command

module.exports = {
  // Telling Webpack that our application lives in the src directory
  context: __dirname + '/src',
  // Setting the entry points to our application
  entry: {
    javascript: './app.js',
    html: './index.html',
  },

  output: {
  // The name of bundled file
    filename: 'app.js',
  // The directory it will be written to
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    inline: true,
    port: 3333,
  },
  module: {
    loaders: [
      {
        // Adding loaders to transpile ES6 and JSX
      // Tells Webpack to apply this loader to all .js files
        test: /\.jsx?$/,
      // But to exclude anything in the /node_modules directory
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
      },
      {
        // Used to run the index.html file through webpack
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        // Compiles SCSS to CSS
        test: /\.scss$/,
        // Extracts the styles and puts them in dist/main.css
        loader: ExtractText.extract('css!sass'),
      },
    ],
  },
  plugins: [
    new ExtractText('main.css', {
      allChunks: true,
    }),
  ],
};
