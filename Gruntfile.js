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
        }
    });

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

    grunt.registerTask( 'default', ['prepare', 'bower:install'] );
};
