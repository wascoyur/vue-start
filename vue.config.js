const { defineConfig } = require("@vue/cli-service");
const { readFileSync } = require("fs");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    server: {
      type: "https",
      options: process.env.HTTPS_MODE
        ? {
            key: readFileSync(".certs/key.pem"),
            cert: readFileSync(".certs/cert.pem"),
          }
        : {},
    },
  },
});
