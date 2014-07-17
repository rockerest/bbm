define(
    ["backbone", "layouts/scheleton", "views/main/home"],
    function( Backbone, ScheletonLayout, HomeView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /^\/$|^#$|^#\/$|^\/#\/$/, function(){
                var layout = new ScheletonLayout({"main": HomeView});

                layout
                    .setup()
                    .render();
            });
        };

        return mod;
    }
);
