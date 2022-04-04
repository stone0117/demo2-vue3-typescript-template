'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const PRODUCTION  = 'production'
const DEVELOPMENT = 'development'
const NODE_ENV    = process.env.NODE_ENV

const name = 'Title' // 页面标题 page title

const port = process.env.port || process.env.npm_config_port || 8080 // dev port

module.exports = {
  publicPath         : './',
  outputDir          : 'dist',
  assetsDir          : 'static',
  productionSourceMap: false,
  devServer          : {
    compress: true,
    port    : port,
    host    : '0.0.0.0',
    https   : false,
    open    : true,
    // 该属性是用来在编译出错的时候，在浏览器页面上显示错误。该属性值默认为false，需要的话，设置该参数为true。
    overlay: { warnings: false, errors: true },
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]       : {
    //     pathRewrite : {
    //       ['^' + process.env.VUE_APP_BASE_API]: ' ',
    //     },
    //     target      : process.env.VUE_APP_BASE_API_SERVICE_URL,
    //     changeOrigin: true,
    //   },
    //   [process.env.VUE_APP_MOCK_ALIYUN_API]: {
    //     pathRewrite : {
    //       ['^' + process.env.VUE_APP_MOCK_ALIYUN_API]: ' ',
    //     },
    //     target      : process.env.VUE_APP_MOCK_ALIYUN_API_SERVICE_URL,
    //     changeOrigin: true,
    //   },
    //   // mock
    //   [process.env.VUE_APP_MOCK_BASE_API]: {
    //     pathRewrite : {
    //       ['^' + process.env.VUE_APP_MOCK_BASE_API]: ' ',
    //     },
    //     target      : process.env.VUE_APP_MOCK_BASE_API_SERVICE_URL,
    //     changeOrigin: true,
    //   },
    // },
  },
  configureWebpack   : {
    // 在 webpack 的 name 字段中提供应用程序的标题，以便它可以在 index.html 中访问以注入正确的标题。
    name   : name,
    resolve: {
      alias: {
        // 'vue$'      : 'vue/dist/vue.runtime.esm.js',
        '@'         : resolve('src'),
        'views'     : resolve('src/views'),
        'components': resolve('src/components'),
      },
    },
    // 外部扩展(Externals)
    // externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。
    // 相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。
    // 此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。
    // externals: {
    //   // key 是 库的名字, 即 require('lodash') 这里用什么, key就写什么,
    //   // value 是 _ 指向全局变量
    //   // window._
    //   // 'vue'         : 'Vue',
    //   // 'vue-router'  : 'VueRouter',
    //   // 'vuex'        : 'Vuex',
    //   // 'better-mock' : 'Mock',
    //   // 'axios'       : 'axios',
    //   // 'vuedraggable': 'vuedraggable',
    //   // 'sortablejs'  : 'Sortable',
    // },
  },
  ////////////////////////////////////////////////////////////////////////////
  // global import scss variable and function mixins
  css: {
    loaderOptions: {
      scss: {
        // 注意: 在 sass-loader v8 中, 这个选项名是 'prependData'
        // prepend data 前置数据
        prependData: `
  				@import "@/style/global.scss";
        `,
      },
    },
  },
  ////////////////////////////////////////////////////////////////////////////
  chainWebpack(config) {
    ////////////////////////////////////////////////////////////////////////////
    ///////////////// 共用配置 //////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    commonWebpackConfig(config)
    ////////////////////////////////////////////////////////////////////////////
    ///////////////// 生产环境 //////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    config.when(NODE_ENV === PRODUCTION, productionWebpackConfig)

    ////////////////////////////////////////////////////////////////////////////
    ///////////////// 开发环境 //////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    config.when(NODE_ENV === DEVELOPMENT, developmentWebpackConfig)
  },
}
////////////////////////////////////////////////////////////////////////////
///////////////// 共用配置 //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function commonWebpackConfig(config) {
  // set svg-sprite-loader
  // config.module.rule('svg').exclude.add(resolve('src/icons')).end()
  // config.module.rule('icons').test(/\.svg$/).include.add(resolve('src/icons')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' }).end()
}

////////////////////////////////////////////////////////////////////////////
///////////////// 生产环境 //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function productionWebpackConfig(config) {

  // it can improve the speed of the first screen, it is recommended to turn on preload
  // 可以提高首屏速度，建议开启预加载
  config.plugin('preload').tap(() => [
    {
      rel: 'preload',
      // to ignore runtime.js
      // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include      : 'initial',
    },
  ])

  // when there are many pages, it will cause too many meaningless requests
  // 页面多的时候，会造成太多无意义的请求
  config.plugins.delete('prefetch')

  config.devtool(false)
  config.plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            // `runtime` 必须与 runtimeChunk 名称相同。 默认是`运行时`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end()

  config.optimization.splitChunks({
    chunks     : 'all',
    cacheGroups: {
      libs     : {
        name    : 'chunk-libs',
        test    : /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks  : 'initial', // 只打包最初依赖的第三方 only package third parties that are initially dependent
      },
      elementUI: {
        name    : 'chunk-elementUI', // 将 elementUI 拆分为一个包 split elementUI into a single package
        priority: 20, // 权重需要大于libs和app，否则会打包成libs或app the weight needs to be larger than libs and app or it will be packaged into libs or app
        test    : /[\\/]node_modules[\\/]_?element-ui(.*)/, // 为了适应cnpm in order to adapt to cnpm
      },
      // 'qrcodeExtension': { chunks: 'initial', enforce: false, priority: 20, name: 'chunk-qrcodeExtension', test: resolve('src/utils/qrcodeExtension') },
      commons: {
        name              : 'chunk-commons',
        test              : resolve('src/components'), // can customize your rules
        minChunks         : 3, //  minimum common number
        priority          : 5,
        reuseExistingChunk: true,
      },
    },
  })
  // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
  config.optimization.runtimeChunk('single')
  ////////////////////////////////////////////////////////////////////////////
  ///////////////// 删除生产环境的console.log //////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  // 删除生产环境的console.log注释
  config.optimization.minimizer('terser').tap(args => {
    // 注释console.*
    args[0].terserOptions.compress.drop_console  = true
    // remove debugger
    args[0].terserOptions.compress.drop_debugger = true
    // 移除 console.log
    // args[0].terserOptions.compress.pure_funcs    = ['console.log']
    args[0].terserOptions.compress.pure_funcs = ['console.*']
    // 去掉注释 如果需要看chunk-vendors公共部分插件，可以注释掉就可以看到注释了
    // args[0].terserOptions.output                 = { comments: false }
    return args
  })
  ////////////////////////////////////////////////////////////////////////////

  config.plugin('html').tap(args => {
    return args
  })
}

////////////////////////////////////////////////////////////////////////////
///////////////// 开发环境 //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function developmentWebpackConfig(config) {

  // it can improve the speed of the first screen, it is recommended to turn on preload
  // 可以提高首屏速度，建议开启预加载
  // config.plugin('preload').tap(() => [
  //   {
  //     rel: 'preload',
  //     // to ignore runtime.js
  //     // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
  //     fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
  //     include      : 'initial',
  //   },
  // ])
  config.plugins.delete('preload')

  // when there are many pages, it will cause too many meaningless requests
  // 页面多的时候，会造成太多无意义的请求
  config.plugins.delete('prefetch')

  config.devtool('cheap-module-source-map')
  // config.devtool('source-map')
  config.plugin('html').tap(args => {
    return args
  })

  config.optimization.splitChunks({
    chunks     : 'all',
    cacheGroups: {
      libs     : {
        name    : 'chunk-libs',
        test    : /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks  : 'initial', // 只打包最初依赖的第三方 only package third parties that are initially dependent
      },
      elementUI: {
        name    : 'chunk-elementUI', // 将 elementUI 拆分为一个包 split elementUI into a single package
        priority: 20, // 权重需要大于libs和app，否则会打包成libs或app the weight needs to be larger than libs and app or it will be packaged into libs or app
        test    : /[\\/]node_modules[\\/]_?element-ui(.*)/, // 为了适应cnpm in order to adapt to cnpm
      },
      // 'qrcodeExtension': { chunks: 'initial', enforce: false, priority: 20, name: 'chunk-qrcodeExtension', test: resolve('src/utils/qrcodeExtension') },
      commons: {
        name              : 'chunk-commons',
        test              : resolve('src/components'), // can customize your rules
        minChunks         : 3, //  minimum common number
        priority          : 5,
        reuseExistingChunk: true,
      },
    },
  })
  // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
  config.optimization.runtimeChunk('single')
}

