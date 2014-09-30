define(
    [
        // Libraries
        "backbone", "underscore",
        // Helpers
        "utilities",
        // Dependencies
        "bases/layout", "text!lyt/main.html", "views/chrome/sidebar"],
    function(
        Backbone, _,
        Utilities,
        Layout, tmpl, SidebarView
    ){
        var MainLayout = function( options ){
            var settings = {
                    "regions": {}
                },
                defaults = {
                    "regions": {
                        "content":      "#content",
                        "sidebar":      "aside"
                    },
                    "template": tmpl
                };

            settings = Utilities.prepareSettings( settings, defaults, options );

            Layout.call( this, settings );
        };

        MainLayout.prototype.render = function(){
            Layout.prototype.render.call( this );

            this.regions.sidebar.show( SidebarView );

            return this;
        };

        Utilities.extend( Layout, MainLayout );

        return MainLayout;
    }
);
