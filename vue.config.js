const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

const faviconImage = path.resolve(__dirname, './indi-favicon.png');
const projectImage = path.resolve(__dirname, './indi-project.png');

const faviconPluginOptions = {
  logo: faviconImage,
  cache: true,
  inject: true,
  mode: 'webapp',
  devMode: 'webapp',
  prefix: 'favicon/',
  background: '#ffffff',
  theme_color: '#1e1e1e',
  favicons: {
    appName: 'indi.fm',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      favicons: true,
      firefox: true,
      coast: true,
      windows: true,
      yandex: true,
    },
  },
};

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  pluginOptions: {
    notifier: {
      title: 'indi.fm',
      alwaysNotify: true,
      contentImage: projectImage,
    },
  },
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin(faviconPluginOptions),
    ],
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    config.resolve.alias.set('~', path.resolve(__dirname));
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/styles/index.scss";
        `,
      },
    },
  },
};
