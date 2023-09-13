const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 8080,
    server: {
      type: "https",
      options: {
        key: fs.readFileSync(".certs/key.pem"),
        cert: fs.readFileSync(".certs/cert.pem"),
      },
    },
  },
});
