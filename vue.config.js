const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

//是否需要开启分析
const analyze = false;

const nodeEnv = process.NODE_ENV;
//dll文件的存放目录
// const dllPath = 'public/vendor';
// const { library } = require('./dll.config.js');
const smp = new SpeedMeasurePlugin();

function resolve(dir) {
  return path.join(__dirname, dir);
}

//为非开发环境添加配置加快打包速度
/**
 * HardSourceWebpackPlugin
 * 开发模式下二次构建的速度会有所提升，production 模式则根据实际业务和文件大小来调整配置了。
 *
 * DLLPlugin 和 DLLReferencePlugin 用某种方法实现了拆分 bundles，
 * 将一些常用的库一般不会发生变化的库抽离出来，后续构建直接跳过这些库，可以加快打包速度，充分利用缓存
 */
let pluginsPro = [];
if (nodeEnv === 'development') {
  //引入webpack dll
  pluginsPro = [
    new HardSourceWebpackPlugin(),
    new HardSourceWebpackPlugin.ExcludeModulePlugin([]),
    //清楚之前的dll文件
    // new CleanWebpackPlugin(),
    // new webpack.DllPlugin({
    //   name: '[name]_[hash]',
    //   path: path.join(__dirname, dllPath, '[name].manifest.json'),
    //   context: process.cwd,
    // }),
  ];
}
if (analyze) {
  // 分析包内容 开启 BundleAnalyzerPluginc 8888端口生成分析图
  let analyzePlugin = [new BundleAnalyzerPlugin()];
  pluginsPro.concat[analyzePlugin];
}

webpackConfigOptions = {
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [...pluginsPro],
};

//基本的配置
const webpackConfig = analyze ? smp.wrap(webpackConfigOptions) : webpackConfigOptions;

module.exports = {
  //构建输出文件夹
  outputDir: 'dist',
  configureWebpack: webpackConfig,
};
