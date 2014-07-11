define(
    ["require", "backbone", "underscore",
    "views/navigation",
    "routers/bbm", "routers/thing"],
    function(
        require, Backbone, _,
        NavigationView,
        BbmRouter, ThingRouter
    ){
        var routers = [
                BbmRouter,
                ThingRouter
            ],
            count = 0,
            nav = new NavigationView(); //Always load the navigation before routing starts

        _( routers ).each( function( r, i ){
            ++count;
            r.register();

            if( count === routers.length ){
                Backbone.history.start();
            }
        });
    }
);
