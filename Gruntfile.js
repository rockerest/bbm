module.exports = function( grunt ){
    grunt.initConfig({
        "bower": {
            "install":{
                "options":{
                    "layout": "byComponent",
                    "targetDir": "./vendor",
                    "cleanBowerDir": true,
                    "verbose": true
                }
            }
        },
        "sass": {
            "dev": {
                "options": {
                    "style": 'expanded'
                },
                "files": {
                    "build/css/screen.min.css": "src/sass/screen.scss"
                }
            },
            "prod": {
                "options": {
                    "style": 'compressed'
                },
                "files": {
                    "build/css/screen.min.css": "src/sass/screen.scss"
                }
            }
        },
        "watch": {
            "sass": {
                "files": ['src/sass/**/*.scss'],
                "tasks": ['sass:dev']
            }
        }
    });

    // contrib tasks
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // Non-contrib tasks
    grunt.loadNpmTasks( 'grunt-bower-task' );

    // Custom tasks
    grunt.registerTask( 'clean', "Wipe the build directory", function(){
        grunt.file.delete( "./build" );
        grunt.file.mkdir( "./build" );
    });

    grunt.registerTask( 'prepare', "Prepare directory structure for anything necessary", function(){
        grunt.task.run( ['clean'] );
        grunt.file.mkdir( "./vendor" );
    });

    grunt.registerTask( 'setup', ['prepare', 'bower:install'] );
    grunt.registerTask( 'default', ['sass:dev', 'watch:sass'] );
};
