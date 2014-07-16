define(
    [
        // Libraries
        "require", "backbone", "underscore",
        // Routers
        "routers/scheleton", "routers/seminars", "routers/students", "routers/errors",
        // Error Handlers
        "layouts/scheleton", "views/error/default"
    ],
    function(
        require, Backbone, _,
        ScheletonRouter, SeminarsRouter, StudentsRouter, ErrorRouter,
        ScheletonLayout, ErrorView
    ){
        var Routes = {},

            // HACK IN 404 HANDLER
            History = Backbone.History.extend({
                loadUrl: function(){
                    var match = Backbone.History.prototype.loadUrl.apply(this, arguments);

                    if( !match ){
                        this.trigger('route-not-found', {"args": arguments});
                    }

                    return match;
                }
            });

        Backbone.history = new History();

        Backbone.history.on( "route-not-found", function( args ){
            console.log( args );
        });

        Routes.startup = function(){
            var routers = [
                    ScheletonRouter,
                    SeminarsRouter,
                    StudentsRouter,
                    ErrorRouter
                ],
                count = 0;

            _( routers ).each( function( r, i ){
                ++count;
                r.register();

                if( count === routers.length ){
                    Backbone.history.start({
                        "hashChange": false
                    });
                }
            });
        };

        return Routes;
    }
);
