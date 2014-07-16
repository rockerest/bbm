define(
    ["backbone", "layouts/scheleton", "views/error/default"],
    function( Backbone, ScheletonLayout, ErrorView ){
        var mod = {},
            ScheletonRouter = Backbone.Router.extend({
                routes: {
                    "404": "notFound"
                }
            });

        mod.register = function(){
            var rtr = new ScheletonRouter();

            rtr.on('route:notFound', function( content ){
                var layout = new ScheletonLayout({"main": ErrorView});

                if( !content ){
                    content = "no path";
                }

                layout
                    .setup()
                    .render({
                        "main": {
                            "route": content
                        }
                    });
            });
        };

        return mod;
    }
);
