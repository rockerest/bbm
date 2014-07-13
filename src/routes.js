define(
    [
        // Libraries
        "require", "backbone", "underscore",
        // Application-level Views
        "views/navigation",
        // Routers
        "routers/bbm", "routers/thing"
    ],
    function(
        require, Backbone, _,
        NavigationView,
        BbmRouter, ThingRouter
    ){
        var Routes = {};

        Routes.startup = function(){
            var routers = [
                    BbmRouter,
                    ThingRouter
                ],
                count = 0;

            _( routers ).each( function( r, i ){
                ++count;
                r.register();

                if( count === routers.length ){
                    Backbone.history.start();
                }
            });
        };

        return Routes;
    }
);
