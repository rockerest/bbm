define(
    ["backbone", "layouts/scheleton", "views/pages/seminars", "views/pages/seminar"],
    function( Backbone, ScheletonLayout, SeminarsView, SeminarView ){
        var mod = {},
            SeminarRouter = Backbone.Router.extend();

        mod.register = function(){
            var rtr = new SeminarRouter;

            rtr.route( "seminars",                      "seminars"      );
            rtr.route( /seminar\/(\w+)$/,               "do"            );
            rtr.route( /seminar\/(\d+)$/,               "viewSeminar"   );
            rtr.route( /seminar\/(\w+)\/([\d\w\-]+)$/,  "modifySeminar" );

            rtr.on('route:seminars', function(){
                var layout = new ScheletonLayout({"main": SeminarsView});

                layout
                    .setup()
                    .render();
            });

            rtr.on( 'route:viewSeminar', function( id ){
                var layout = new ScheletonLayout({"main": SeminarView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "id": id
                        }
                    });
            });

            rtr.on( 'route:do', function( action ){
                var layout = new ScheletonLayout({"main": SeminarView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "action": action
                        }
                    });
            });

            rtr.on( 'route:modifySeminar', function( action, id ){
                var layout = new ScheletonLayout({"main": SeminarView});

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
