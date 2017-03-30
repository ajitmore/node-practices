module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        express: {
            server: {
                options: {
                    port: 1333,
                    hostname: 'localhost',
                    bases: ['.'],
                    server: 'app.js',
                    serverreload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');

    // Default task(s).
    grunt.registerTask('default');
    grunt.registerTask('server', ['express', 'express-keepalive']);

};
