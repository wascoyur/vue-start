const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        server: {
            type: "https",
            options: {
                key: fs.readFileSync(".certs/key.pem"),
                cert: fs.readFileSync(".certs/cert.pem"),
            },
        },
    },
});
