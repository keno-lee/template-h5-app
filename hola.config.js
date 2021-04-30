const packageInfo = require('./package.json')

// 脚手架工具配置文件
module.exports = {
  // 框架语言
  framework: 'vue',

  // 测试服务器地址
  // devServerUrl: 'http://172.16.26.232:2222',

  // 引入路径别名配置
  // resolveAlias: {},

  // 需要使用babel转码的modules依赖
  // transpileDependencies: ['xx'],

  // 模块配置数组
  configs: [
    {
      moduleName: 'module1',
      moduleEntry: './app/module1/main.js',
      publicPath: {
        test: '/module1/',
        // CDN地址，只在`production`时生效
        prod: '//bc-public-1251122539.file.myqcloud.com/multi-web/module1/',
      },
      // webpack环境变量注入
      env: {
        'process.env.PACKAGE_VERSION': JSON.stringify(packageInfo.version),
      },
    },
  ],
}
