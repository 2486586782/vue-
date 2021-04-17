//如何解决跨域的问题，将请求地址上的路径截取，在新建vue.config.js文件，配置跨域（要设置条件比如下面以某某开头）
//不然的话则全部的请求多会走下面这个路径
module.exports = {
    devServer: {
      proxy:{
        '/ajax':{
          target:"https://m.maoyan.com",         //反向代理配置
        changeOrigin: true
        }
      }
    }
  }