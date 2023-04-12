const { defineConfig } = require('@vue/cli-service')
// const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  // productionSourceMap: false, // 关闭生产环境的 source map
  // configureWebpack: config => {
  //   // 设置生产环境下的变量
  //   config.plugins.push(new webpack.DefinePlugin({
  //     'process.env': {
  //       VUE_APP_BASE_API: JSON.stringify(process.env.VUE_APP_BASE_API)
  //     }
  //   }))
  // },
  devServer:{
    port: 6783,
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
