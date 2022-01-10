const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const miniCssExtractor = require('mini-css-extract-plugin');


module.exports = {
    entry: "./src/client/index.js",
    mode: "production",
     module: {
         rules: [{
             test: /\.m?js$/,
             exclude: /(node_modules)/,
             use: 'babel-loader'
         },
             {
                 test: /\.s[ac]ss$/i,
                 use: [
                     // Creates `style` nodes from JS strings
                     miniCssExtractor.loader ,
                     // Translates CSS into CommonJS
                     "css-loader",
                     // Compiles Sass to CSS
                     "sass-loader",
                 ]
             },
         ],
    },
    plugins: [

        // npm i -D mini-css-extract-plugin
        new miniCssExtractor(),
         
         new HtmlWebPackPlugin({
             template: './src/client/views/index.html',
             filename: './index.html'
         }),
            

        //  new CleanWebpackPlugin({
        //      dry: true,
        //      verbose: true,
        //      cleanStaleWebpackAssets: true,
        //      protectWebpackAssets: false
        //  }),
        // TODO: configure workbox-webpack-plugin
    ],
    
    output: {
//     filename: '[name].bundle.js',
    path:path.resolve (__dirname , 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean :true,
  },
};