module.exports = {
    apps: [{
        name: "node-app",
        script: "binarySearch.js",
        watch: false,
        autorestart: false,
        env: {
            NODE_ENV: "production"
        }
    }]
};