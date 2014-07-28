define(
    ["backbone", "layouts/scheleton", "layouts/main", "views/main/home"],
    function( Backbone, ScheletonLayout, MainLayout, HomeView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.notFound = function(){
                location.href = "#/error/404/" + this.last_location[1];
            };

            rtr.get( /^\/$|^#$|^#\/$|^\/#\/$/, function(){
                var layout = new ScheletonLayout({
                        "main": [
                            MainLayout,
                            {
                                "body": HomeView
                            }
                        ]
                    });

                layout
                    .setup()
                    .render();
            });
        };

        return mod;
    }
);
