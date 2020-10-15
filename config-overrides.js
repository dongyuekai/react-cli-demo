const {
  override,
  addDecoratorsLegacy,
  addLessLoader,
  fixBabelImports,
  addWebpackAlias //添加别名
} = require('customize-cra')
const path = require('path')
module.exports = override(
  // 添加别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  // 添加装饰器
  addDecoratorsLegacy(),
  // 使用Less
  addLessLoader({
    LessOptions: {
      javascriptEnabled: true,
      relativeUrls: false,
      modifyVars: { '@primary-color': '#A80000' }
    }
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)
