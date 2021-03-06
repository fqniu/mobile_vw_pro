// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      path: ['./src/*']
    },
    "postcss-px-to-viewport-opt": {
      "viewportWidth": "750", //视窗的宽度，对应的是我们设计稿的宽度
      "viewportHeight": "667", // 视窗的高度
      "unitPrecision": 5, //指定`px`转换为视窗单位值的小数位数(很多时候无法整除)
      "viewportUnit": "vw", //指定需要转换成的视窗单位，建议使用vw
      "selectorBlackList": ['#nprogress'], //指定不转换为视窗单位的类
      "minPixelValue": 1, // 小于或等于`1px`不转换为视窗单位
      "mediaQuery": false, // 允许在媒体查询中转换`px`
      // "exclude": /(\/|\\)(node_modules)(\/|\\)/
    },
  }
}