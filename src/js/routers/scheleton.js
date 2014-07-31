define(
    ["backbone", "layouts/scheleton", "views/main/home"],
    function( Backbone, ScheletonLayout, HomeView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.notFound = function(){
                location.href = "#/error/404/" + this.last_location[1];
            };

            rtr.get( /^\/$|^#$|^#\/$|^\/#\/$/, function(){
                var layout = new ScheletonLayout({ "main": HomeView }),
                    structure;

                new (layout.build())();
            });
        };

        return mod;
    }
);
