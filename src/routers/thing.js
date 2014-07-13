define(
    ["backbone", "layouts/bbm", "views/pages/things", "views/pages/thing"],
    function( Backbone, BbmLayout, ThingsView, ThingView ){
        var mod = {},
            ThingRouter = Backbone.Router.extend();

        mod.register = function(){
            var rtr = new ThingRouter;

            rtr.route( "things",                "things"        );
            rtr.route( /thing\/(\w+)$/,         "do"            );
            rtr.route( /thing\/(\d+)$/,         "viewThing"     );
            rtr.route( /thing\/(\w+)\/(\d+)$/,  "modifyThing"   );

            rtr.on('route:things', function(){
                var layout = new BbmLayout({"main": ThingsView});

                layout
                    .setup()
                    .render();
            });

            rtr.on( 'route:viewThing', function( id ){
                var layout = new BbmLayout({"main": ThingView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "id": id
                        }
                    });
            });

            rtr.on( 'route:do', function( action ){
                var layout = new BbmLayout({"main": ThingView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "action": action
                        }
                    });
            });

            rtr.on( 'route:modifyThing', function( action, id ){
                var layout = new BbmLayout({"main": ThingView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "action": action,
                            "id": id
                        }
                    });
            });
        }

        return mod;
    }
);
