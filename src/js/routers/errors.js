define(
    ["backbone", "layouts/scheleton", "layouts/main", "views/error/default"],
    function( Backbone, ScheletonLayout, MainLayout, ErrorView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /\/error\/(\d+)\/(.*)?$/, function(){
                var layout = new ScheletonLayout({"main": MainLayout}),
                    self = this;

                layout.render({
                    "construct": {
                        "main": {
                            "content": ErrorView
                        }
                    },
                    "passdown": {
                        "main": {
                            "construct": {
                                "content": {
                                    "error": self.params.splat[0],
                                    "route": self.params.splat[1]
                                }
                            }
                        }
                    }
                });
            });
        };

        return mod;
    }
);
