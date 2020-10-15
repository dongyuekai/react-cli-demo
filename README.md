## react-app-rewired使用
## 介绍
create-creact-app项目，如果需要手动修改配置，需先npm run eject弹出配置，这个过程是不可逆的

推荐使用第三方工具进行修改

这里介绍使用react-app-rewired。它的作用是用来帮助你重写react脚手架配置

react-app-rewired@2.x版本需要搭配customize-cra使用。

customize-cra的作用是帮助你自定义react脚手架2.x版本配置

## 基本使用
安装：npm i react-app-rewired customize-cra --save-dev

在根目录下新建文件config-overrides.js文件

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config
}
修改package.json文件
{
  // ...
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
  // ...
}
## 使用ES7的装饰器
修改config-overrides.js文件
const {
  override,
  addDecoratorsLegacy
} = require('customize-cra')

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),
)
## 使用Less
安装less和less-loader：npm i less less-loader --save-dev
修改config-overrides.js文件
const {
  override,
  // ...
  addLessLoader,
  // ...
} = require('customize-cra')

module.exports = override(
  // ...
  // less
  // addLessLoader(),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
      relativeUrls: false,
      modifyVars: { '@primary-color': '#A80000' },
      // cssModules: {
      //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
      // }
    } 
  })
  // ...
)
## antd-mobile按需引入
安装babel-plugin-import：npm i babel-plugin-import --save-dev
修改config-overrides.js文件
const {
  override,
  // ...
  fixBabelImports
} = require('customize-cra')

module.exports = override(
  // ...

  // antd-mobile按需加载 - babel-plugin-import
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)
修改config-overrides.js文件，覆盖默认样式
const {
  override,
  // ...
  addLessLoader,
  fixBabelImports,
  // ...
} = require('customize-cra')

module.exports = override(
  // ...
  // less
  addLessLoader({
    // 现在的写法
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@brand-primary': '#1DA57A' },
    },
    // 原来的写法
    // javascriptEnabled: true,
    // modifyVars: {
    //   '@primary-color': '#1DA57A',
    // },
    // localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
  }),

  // antd-mobile按需加载 - babel-plugin-import
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    // style: 'css'
    style: true
  }),
  // ...
)
## 添加别名
修改config-overrides.js文件
const {
  override,
  // ...
  addWebpackAlias
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // ...
  // 路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)
## 配置多环境
安装dotenv-cli：npm i dotenv-cli --save-dev
在根目录下添加.env.dev文件
REACT_APP_URL_API=http://dev.com
REACT_APP_URL_UPLOAD=http://upload.dev.com
在根目录下添加.env.sit文件
REACT_APP_URL_API=http://sit.com
REACT_APP_URL_UPLOAD=http://upload.sit.com
在根目录下添加.env.prod文件
REACT_APP_URL_API=http://prod.com
REACT_APP_URL_UPLOAD=http://upload.prod.com
修改package.json文件
{
  // ...
  "scripts": {
    "start": "dotenv -e .env.dev react-app-rewired start",
    "build:sit": "dotenv -e .env.sit react-app-rewired build",
    "build:prod": "dotenv -e .env.prod react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
  // ...
}
在index.html中使用%REACT_APP_URL_API%
在js/jsx中：process.env.REACT_APP_URL_API
## proxy
开发环境下跨域问题，前端一般是给本地的devServer设置代理

安装http-proxy-middleware：npm i http-proxy-middleware --save-dev

在src/目录下新建文件setupProxy.js（注意：文件名不能修改！！cra会按照src/setupProxy.js这个路径解析）

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:3001/',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': ''
      // }
    })
  )
}
重新启动即可
http-proxy-middleware的1.x版本做了较大改动。

以上方法配置会出现proxy is not a function的问题

解决办法是修改src/setupProxy.js文件

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:3001/',
    changeOrigin: true,
    // pathRewrite: {
    //   '^/api': ''
    // }
  }))
}