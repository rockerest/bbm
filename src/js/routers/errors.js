define(
    ["backbone", "layouts/scheleton", "views/error/default"],
    function( Backbone, ScheletonLayout, ErrorView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /\/error\/(\d+)\/(.*)?$/, function(){
                var layout = new ScheletonLayout({"main": ErrorView}),
                    self = this;

                new (layout.build({
                    "construct": {
                        "main": {
                            "error": self.params.splat[0],
                            "route": self.params.splat[1]
                        }
                    }
                }))();
            });
        };

        return mod;
    }
);
