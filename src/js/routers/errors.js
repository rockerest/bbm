define(
    ["backbone", "layouts/scheleton", "views/error/default"],
    function( Backbone, ScheletonLayout, ErrorView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /\/error\/(\d+)\/(.*)?$/, function(){
                var layout = new ScheletonLayout({"main": ErrorView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "error": this.params.splat[0],
                            "route": this.params.splat[1]
                        }
                    });
            });
        };

        return mod;
    }
);
