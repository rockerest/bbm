define(
    ["backbone", "layouts/scheleton", "views/main/home"],
    function( Backbone, ScheletonLayout, HomeView ){
        var mod = {},
            ScheletonRouter = Backbone.Router.extend({
                routes: {
                    "(/)": "home"
                }
            });

        mod.register = function(){
            var rtr = new ScheletonRouter();

            rtr.on('route:home', function(){
                var layout = new ScheletonLayout({"main": HomeView});

                layout
                    .setup()
                    .render();
            });
        };

        return mod;
    }
);
