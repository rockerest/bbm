define(
    [
        // Libraries
        "require", "backbone", "underscore",
        // Routers
        "routers/scheleton", "routers/seminars", "routers/students"
    ],
    function(
        require, Backbone, _,
        ScheletonRouter, SeminarsRouter, StudentsRouter
    ){
        var Routes = {};

        Routes.startup = function(){
            var routers = [
                    ScheletonRouter,
                    SeminarsRouter,
                    StudentsRouter
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
