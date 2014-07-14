define(
    [
        // Libraries
        "require", "backbone", "underscore",
        // Routers
        "routers/scheleton", "routers/seminars"
    ],
    function(
        require, Backbone, _,
        ScheletonRouter, SeminarsRouter
    ){
        var Routes = {};

        Routes.startup = function(){
            var routers = [
                    ScheletonRouter,
                    SeminarsRouter
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
