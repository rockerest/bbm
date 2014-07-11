define(
    ["backbone", "views/home"],
    function( Backbone, HomeView ){
        var mod = {},
            BbmRouter = Backbone.Router.extend({
                routes: {
                    "(/)": "home"
                }
            });

        mod.register = function(){
            var rtr = new BbmRouter;

            rtr.on('route:home', function(){
                new HomeView();
            });
        }

        return mod;
    }
);
