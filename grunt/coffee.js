module.exports = {
    app: {
        expand: true,
        cwd: "app",
        src: ["**/*.coffee"],
        dest: ".tmp/coffee",
        ext: ".js"
    }
};
