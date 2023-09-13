const { defineConfig } = require('@vue/cli-service')
const fs = require("fs");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    server : {

      type: 'https' ,
      options: process.env.HTTPS_MODE? {
        key: fs.readFileSync('.certs/key.pem'),
        cert: fs.readFileSync('.certs/cert.pem'),
      }: {},
    },
  }
})
