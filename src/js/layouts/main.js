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
            var regions = {
                    "content":  "#content",
                    "sidebar":  "aside"
                },
                presets = {
                    "sidebar":   SidebarView
                },
                _layout = new Layout();

            _layout
                .addRegions( regions )
                .setTemplate( tmpl )
                .addPresets( presets );

            return _layout;
        };

        return MainLayout;
    }
);
