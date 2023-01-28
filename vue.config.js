var path = require("path");

module.exports = {
  configureWebpack: (config) => {
    Object.assign(config, {
      resolve: {
        alias: {
          src: path.resolve(__dirname, "./src"),
          assets: path.resolve(__dirname, "./src/assets"),
          components: path.resolve(__dirname, "./src/components"),
        }, // 别名配置
      },
    });
  },
};
