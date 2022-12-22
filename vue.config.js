module.exports = {
  devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      //以上的ip和端口是我们本机的;下面为需要跨域的

      proxy: {//配置跨域
        '/users': {
            target: 'http://localhost:3000',//这里后台的地址模拟的;应该填写你们真实的后台接口
            ws: true,
            changOrigin: true,//允许跨域
            // pathRewrite: {
            //     '^/api': ''//请求的时候使用这个api就可以
            // }
        },
        '/qc/v1.0': {
            target: 'https://qicheng-2g4zjgi20f6b65d4-1307596455.ap-shanghai.service.tcloudbase.com',//这里后台的地址模拟的;应该填写你们真实的后台接口
            ws: true,
            changOrigin: true,//允许跨域
            secure: true,                   //是否https接口
            // pathRewrite: {
            //     '^/api': ''//请求的时候使用这个api就可以
            // }
        }

    }
  }
}