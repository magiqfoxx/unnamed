const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
const serverConfig = env => { return {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js',
    library: 'addEmojis',
    libraryTarget: 'umd',
  },
  mode: env && env.production ? 'production' : 'development',
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    })
  ],
  optimization: {
       usedExports: true,
     },
  };
}

const clientConfig = env => { 
  return {
  entry: './src/index.js',
  target: 'web', // <=== can be omitted as default is 'web'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: 'addEmojis',
    libraryTarget: 'umd',
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
  ],
  mode: env && env.production ? 'production' : 'development',
  optimization: {
       usedExports: true,
     },
  };
}

module.exports = [ serverConfig, clientConfig ];