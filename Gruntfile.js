module.exports = function( grunt ){
    grunt.initConfig({
        "notify": {
            'requirejs': {
                "options": {
                    "title": 'Build Succeeded',
                    "message": 'RequireJS has finished compiling',
                }
            }
        },
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
        "jshint":{
            "main": {
                "src": ["src/js/**/*.js"],
            }
        },
        "requirejs":{
            "compile":{
                "options":{
                    "baseUrl": "src/js/",
                    "paths": {
                        // SHORTCUTS
                        "vw":                   "../content/templates/views",
                        "lyt":                  "../content/templates/layouts",

                        // LIBRARIES
                        "backbone":             "../../vendor/backbone/backbone",
                        "underscore":           "../../vendor/underscore/underscore",
                        "sammy":                "../../vendor/sammy/sammy",
                        "jquery":               "empty:",
                        "ribcage":              "../../vendor/ribcage/ribcage",

                        // LIBRARY PLUGINS
                        "text":                 "../../vendor/requirejs-text/text",
                        "localstorage":         "../../vendor/backbone.localstorage/backbone.localStorage"
                    },
                    "shim": {
                        "backbone": {
                            "exports": "Backbone"
                        },
                        "underscore": {
                            "exports": "_"
                        }
                    },
                    "stubModules": ['text'],
                    "optimize": "uglify2",
                    "generateSourceMaps": true,
                    "preserveLicenseComments": false,
                    "name": "bootstrap",
                    "out": "build/js/scheleton.js"
                }
            }
        },
        "watch": {
            "sass": {
                "files": ['src/sass/**/*.scss'],
                "tasks": ['sass:dev']
            },
            "js": {
                "files": ['src/js/**/*.js', 'src/js/**/*.html'],
                "tasks": ['code']
            }
        }
    });

    // contrib tasks
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );

    // Non-contrib tasks
    grunt.loadNpmTasks( 'grunt-bower-task' );
    grunt.loadNpmTasks( 'grunt-notify' );

    // Custom tasks
    grunt.registerTask( 'clean', "Wipe the build directory", function(){
        grunt.file.delete( "./build" );
        grunt.file.mkdir( "./build" );
    });

    grunt.registerTask( 'prepare', "Prepare directory structure for anything necessary", function(){
        grunt.task.run( ['clean'] );
        grunt.file.mkdir( "./vendor" );
    });

    grunt.registerTask( 'style', 'Compile the SASS', function(){
        grunt.task.run(['sass:dev']);
    });

    grunt.registerTask( 'code', 'Compile the code', function(){
        grunt.task.run(['jshint:main', 'requirejs:compile', 'notify:requirejs']);
    });

    grunt.registerTask( 'build', 'Do a system build', function(){
        grunt.task.run(['style', 'code']);
    });



    grunt.registerTask( 'setup', ['prepare', 'bower:install'] );
    grunt.registerTask( 'default', ['build', 'watch'] );
};
