const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
module.exports = env => {return {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: 'addEmojis',
    libraryTarget: 'umd',
  },
  mode: env && env.production ? 'production' : 'development',
  optimization: {
       usedExports: true,
     },
  },
  externals: {
         lodash: {
           commonjs: 'lodash',
           commonjs2: 'lodash',
           amd: 'lodash',
           root: '_',
         },
       },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}};