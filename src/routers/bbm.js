define(
    ["backbone", "layouts/bbm", "views/pages/home"],
    function( Backbone, BbmLayout, HomeView ){
        var mod = {},
            BbmRouter = Backbone.Router.extend({
                routes: {
                    "(/)": "home"
                }
            });

        mod.register = function(){
            var rtr = new BbmRouter;

            rtr.on('route:home', function(){
                var Layout = new BbmLayout({"main": HomeView});

                Layout
                    .setup()
                    .render();
            });
        }

        return mod;
    }
);
