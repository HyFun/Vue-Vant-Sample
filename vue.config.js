/*
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:51:11
 * @Description  : vue配置
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-06 12:56:01
 */
const path = require('path') // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    // 配置标题
    config.plugin('html').tap((args) => {
      args[0].title = 'vant小sample'
      return args
    })

    // 配置路径别名
    config.resolve.alias
      // set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('src'))
    // svg loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    loaderOptions: {
      // 全局的scss变量、样式文件
      sass: {
        prependData: `@import "@/styles/variable.scss";`
      }
    }
  },
  publicPath: './',
  devServer: {
    port: 6001,
    open: true,
    host: '0.0.0.0'
  }
}
