const {merge} = require('webpack-merge');
const common = require('./webpack.common.config.js');

const path = require('path');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// const smp = new SpeedMeasurePlugin();

const getTemplate = templateName => {
  return fs
    .readFileSync(
      `../../service_frontend/user_site/templates/${templateName}`,
      'utf8',
    )
    .replace(/<script.*react-apps.*script>/, '');
};
const features = [
  {
    name: 'addDevices',
    templateName: 'add_device_v2.tpl',
  },
  {
    name: 'accountLess',
    templateName: 'account_less_new.tpl',
  },
  {
    name: 'accessList',
    templateName: 'main_page.tpl',
  },
  {
    name: 'remoteAccess',
    templateName: 'remote_access.tpl',
  },
];
const featureChunks = features.map(feature => feature.name);

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    addDevices: './src/prod/addDevices.js',
    accountLess: './src/prod/accountLess.js',
    accessList: './src/prod/accessList.js',
    remoteAccess: './src/prod/remoteAccess.js',
    //framework: ['react', 'react-dom'],
  },
  output: {
    filename: 'modules/js/dist/react-apps/[name].bundle.js',
    path: path.resolve(__dirname, '../../../submodules/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tpl$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    /*
    // 設定Build出來後的html範本
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    */
    // 清空原來的dist folder
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['modules/js/dist/react-apps'],
    }),
    ...features.flatMap(feature => [
      new HtmlWebpackPlugin({
        filename: `../service_frontend/user_site/templates/${feature.templateName}`,
        templateContent: getTemplate(feature.templateName),
        inject: 'body',
        excludeChunks: featureChunks.filter(chunk => chunk !== feature.name),
        minify: false,
      }),
      new HtmlWebpackPlugin({
        filename: `../service_frontend/user_site/templates_dist/${feature.templateName}`,
        templateContent: getTemplate(feature.templateName),
        inject: 'body',
        excludeChunks: featureChunks.filter(chunk => chunk !== feature.name),
        minify: false,
      }),
    ]),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    // split framework & node_modules
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        framework: {
          test: 'framework',
          name: 'framework',
          enforce: true,
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: 'vendor',
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
});
