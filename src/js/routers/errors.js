define(
    ["backbone", "layouts/scheleton", "layouts/main", "views/error/default"],
    function( Backbone, ScheletonLayout, MainLayout, ErrorView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /\/error\/(\d+)\/(.*)?$/, function(){
                var layout = new ScheletonLayout();

                layout.render();
                layout.explore( "main" ).show( MainLayout );
                layout.explore( "main.content" ).show(
                    ErrorView,
                    {
                        "error": this.params.splat[0],
                        "route": this.params.splat[1]
                    }
                );
            });
        };

        return mod;
    }
);
