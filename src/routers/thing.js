define(
    ["backbone", "views/things"],
    function( Backbone, ThingsView ){
        var mod = {},
            ThingRouter = Backbone.Router.extend({
                routes: {
                    "things": "things"
                }
            });

        mod.register = function(){
            var rtr = new ThingRouter;

            rtr.on('route:things', function(){
                new ThingsView();
            });
        }

        return mod;
    }
);
