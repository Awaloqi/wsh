const { whenDev } = require('@craco/craco');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const appMode = process.env.REACT_APP_MODE;
      const isAdminApp = appMode === 'admin';
      const isDriverApp = appMode === 'driver';

      webpackConfig.entry = resolve(`./src/index.${appMode}.tsx`);

      if (isAdminApp) {
        webpackConfig.optimization.splitChunks = { cacheGroups: { default: false } };
        webpackConfig.optimization.runtimeChunk = false;
        webpackConfig.output.filename = whenDev(() => 'static/js/bundle.js', 'static/js/[name].js');
        webpackConfig.plugins.push(
          new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
            chunkFilename: 'static/css/[name].chunk.css',
          }),
        );
      }

      if (isDriverApp) {
        webpackConfig.output.publicPath = whenDev(() => '/', '/driver/');
      }

      return webpackConfig;
    },
  },
};
