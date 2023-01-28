var path = require("path");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin({}); //测量构建速度的插件

module.exports = {
  configureWebpack: smp.wrap({
    disable: !process.env.MEASURE, // 为true时构建日志不再打印
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      }, // 别名配置
    },
  }),
};
