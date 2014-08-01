define(
    [
        // Libraries
        "backbone", "underscore",
        // Helpers
        "utilities",
        // Dependencies
        "bases/layout", "text!templates/layouts/main.html", "views/chrome/sidebar"],
    function( Backbone, _, Utilities, Layout, LytTemplate, SidebarView ){
        var ScheletonLayout = function( data ){
            Layout.call( this, data );

            _.extend( this.regions, {
                "content":  "#content",
                "sidebar":  "aside"
            });

            _.extend( this.parts, {
                "sidebar":   SidebarView
            });

            this.output = "#application";
            this.template = _.template( LytTemplate );
        };

        Utilities.extend( Layout, ScheletonLayout );

        return ScheletonLayout;
    }
);
