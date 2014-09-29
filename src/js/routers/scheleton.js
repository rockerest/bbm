define(
    [
        // Libraries
        "backbone",
        // Dependencies
        "layouts/scheleton", "views/chrome/navigation", "views/main/home"],
    function( Backbone, ScheletonLayout, NavView, HomeView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.notFound = function(){
                location.href = "#/error/404/" + this.last_location[1];
            };

            rtr.get( /^\/$|^#$|^#\/$|^\/#\/$/, function(){
                var layout = new ScheletonLayout();

                layout.render();

                layout.regions.content.show( HomeView );
            });
        };

        return mod;
    }
);
