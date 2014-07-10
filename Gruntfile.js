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

    grunt.registerTask( 'default', ['bower:install'] );
};
