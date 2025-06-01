module.exports = {
    apps: [{
        name: "node-app",
        script: "binarySearch.js",
        watch: true,
        env: {
            NODE_ENV: "production"
        }
    }]
};