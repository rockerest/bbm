define(
    ["require", "backbone", "underscore",
    "routers/bbm", "routers/thing"],
    function(
        require, Backbone, _,
        rBbm, rThing
    ){
        var path = "routers/",
            routers = [
                rBbm,
                rThing
            ];

        _( routers ).each( function( r, i ){
            r.register();
        });
    }
);
