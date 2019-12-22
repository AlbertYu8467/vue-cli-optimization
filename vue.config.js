const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;//代码分析工具
const resolve = dir => {
  return path.join(__dirname, './' ,dir)
}
const isProduct =  process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  chainWebpack: config => {
    //移除 prefetch 插件
    config.plugins.delete("prefetch");
    // 移除 preload 插件
    config.plugins.delete('preload');
    if(isProduct){
      // 压缩代码
      config.optimization.minimize(true);
      config.plugin('webpack-bundle-analyzer')
      .use(new BundleAnalyzerPlugin({
        openAnalyzer: true,
        analyzerPort: 8888
      }))
    }
    // 分割代码
    config.optimization.splitChunks({
        chunks: 'all'
    })  
    config.resolve.alias
      .set('@', resolve('src'))
      .set('cps', resolve('src/components'))
  },
  productionSourceMap:false,
  configureWebpack: config => {
    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT',
      'echarts':'echarts',
    }
    // 为生产环境修改配置...
    if( isProduct ){
      // 忽略生产环境打包的文件

    }else{
      // 为开发环境修改配置...
    }
  },
  css:{
    loaderOptions:{
      sass: {
        prependData: `@import "~@/assets/style/variables.scss";`
      }
    }
  },
  devServer:{
    open:true
  }
}