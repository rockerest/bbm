define(
    ["backbone", "views/thing"],
    function( Backbone, ThingView ){
        var mod = {},
            ThingRouter = Backbone.Router.extend({
                routes: {
                    "things": "things"
                }
            });

        mod.register = function(){
            var rtr = new ThingRouter;

            rtr.on('route:things', function(){
                new ThingView();
            });
        }

        return mod;
    }
);
