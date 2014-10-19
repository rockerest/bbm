define(
    [
        // Libraries
        "backbone", "underscore", "ribcage",
        // Helpers
        "utilities",
        // Dependencies
        "text!lyt/main.html", "views/chrome/sidebar"],
    function(
        Backbone, _, Ribcage,
        Utilities,
        tmpl, SidebarView
    ){
        var MainLayout = function( options ){
            var regions = {
                    "content":  "#content",
                    "sidebar":  "aside"
                },
                presets = {
                    "sidebar": {
                        "object": SidebarView
                    }
                },
                _layout = new Ribcage();

            _layout
                .addRegions( regions )
                .setTemplate( tmpl )
                .addPresets( presets );

            return _layout;
        };

        return MainLayout;
    }
);
