requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths": {
        /*"marionette":           "../vendor/marionette/backbone.marionette",
        "backbone.babysitter":  "../vendor/backbone.babysitter/backbone.babysitter",
        "backbone.wreqr":       "../vendor/backbone.wreqr/backbone.wreqr",*/

        // LIBRARIES
        "backbone":             "../vendor/backbone/backbone",
        "underscore":           "../vendor/underscore/underscore",
        "jquery":               ["//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery", "../vendor/jquery/jquery"],

        // LIBRAR PLUGINS
        "text":                 "../vendor/requirejs-text/text",
        "localstorage":         "../vendor/backbone.localstorage/backbone.localStorage"
    },
    "shim": {
        "backbone": {
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});

require(
    ["routes"],
    function( Routes ){
        window.bbm = {
            "channels": {}
        };

        Routes.startup();
    }
);
