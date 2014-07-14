requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths": {
        // LIBRARIES
        "backbone":             "../../vendor/backbone/backbone",
        "underscore":           "../../vendor/underscore/underscore",
        "jquery":               ["//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery", "../../vendor/jquery/jquery"],

        // LIBRAR PLUGINS
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
    }
});

window.bbm = {
    "channels": {}
};

require(
    ["routes"],
    function( Routes ){
        Routes.startup();
    }
);
