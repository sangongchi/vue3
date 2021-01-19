// const { SkeletonWebpackPlugin } = require('vue-skeleton-webpack-plugin');
// const path = require('path');
// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new SkeletonWebpackPlugin({
//         webpackConfig: {
//           entry: {
//             app: path.resolve(__dirname, './src/entry-skeleton.js'),
//           },
//         },
//         router: {
//           mode: 'hash',
//           routers: ['/'],
//         },
//       }),
//     ],
//   },
// };

// const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new HtmlWebpackPlugin({
//         // Your HtmlWebpackPlugin config
//       }),
//       new SkeletonPlugin({
//         pathname: path.resolve(__dirname, './shell'), //用来存储shell文件的地址
//         staticDir: path.resolve(__dirname, './public'),
//         routes: ['/', '/about'],
//         port: '7880',
//       }),
//     ],
//   },
//   chainWebpack: (config) => {
//     if (process.env.NODE_ENV !== 'development') {
//       config.plugin('html').tap((opts) => {
//         opts[0].minify.removeComments = false;
//         return opts;
//       });
//     }
//   },
// };
