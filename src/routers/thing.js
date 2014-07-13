define(
    ["backbone", "layouts/bbm", "views/pages/things"],
    function( Backbone, BbmLayout, ThingsView ){
        var mod = {},
            ThingRouter = Backbone.Router.extend({
                routes: {
                    "things": "things"
                }
            });

        mod.register = function(){
            var rtr = new ThingRouter;

            rtr.on('route:things', function(){
                var layout = new BbmLayout({"main": ThingsView});

                layout
                    .setup()
                    .render();
            });
        }

        return mod;
    }
);
