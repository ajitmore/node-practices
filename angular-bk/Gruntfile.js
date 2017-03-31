module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 3002,
                    hostname: 'localhost',
                    bases: ['.'],
                    livereload: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: ['index.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');

    // Default task(s).
    grunt.registerTask('default');
    grunt.registerTask('server', ['express', 'watch']);

};
