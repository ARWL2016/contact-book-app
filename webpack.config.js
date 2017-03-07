var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', 
    'script!foundation-sites/dist/foundation.min.js',
    './client/app/app.jsx'
    ], 
  externals: {
    jquery: 'jQuery'
  }, 
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery', 
      'jQuery': 'jquery'
    })
  ], 
  output: {
    path: __dirname, //current folder
    filename: './client/public/bundle.js'
  }, 
  watch: true, 
  resolve: {
    root: __dirname, 
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      React: path.resolve(__dirname, './node_modules/react'),
      Main: 'client/app/components/Main.jsx', 
      Navigation: 'client/app/components/Navigation.jsx',
      ManageContactForm: 'client/app/components/ManageContactForm.jsx', 
      ContactForm: 'client/app/components/ContactForm.jsx',  
      TextInput: 'client/app/components/TextInput.jsx', 
      ShowContacts: 'client/app/components/ShowContacts.jsx', 
      ContactList: 'client/app/components/ContactList.jsx', 
      ContactListItem: 'client/app/components/ContactListItem.jsx',
      applicationStyles: 'client/app/styles/app.scss', 
    },
    fallback: path.resolve(__dirname, './node_modules'),
    extensions: ['', '.js', '.jsx']
  }, 
  resolveLoader: {
      fallback: path.resolve(__dirname, './node_modules')
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }, 
        test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/
      }
    ]
  }, 
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};