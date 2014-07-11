define(
    ["backbone", "views/bbm"],
    function( Backbone, BbmView ){
        var mod = {},
            BbmRouter = Backbone.Router.extend({
                routes: {
                    "(/)": "home"
                }
            });

        mod.register = function(){
            var rtr = new BbmRouter;

            rtr.on('route:home', function(){
                new BbmView();
            });
        }

        return mod;
    }
);
