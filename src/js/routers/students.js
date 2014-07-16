define(
    ["backbone", "layouts/scheleton", "views/students/students", "views/students/student"],
    function( Backbone, ScheletonLayout, StudentsView, StudentView ){
        var mod = {},
            StudentRouter = Backbone.Router.extend();

        mod.register = function(){
            var rtr = new StudentRouter();

            rtr.route( "students",                      "students"      );
            rtr.route( /student\/(\w+)$/,               "do"            );
            rtr.route( /student\/(\d+)$/,               "viewStudent"   );
            rtr.route( /student\/(\w+)\/([\d\w\-]+)$/,  "modifyStudent" );

            rtr.on('route:students', function(){
                var layout = new ScheletonLayout({"main": StudentsView});

                layout
                    .setup()
                    .render();
            });

            rtr.on( 'route:viewStudent', function( id ){
                var layout = new ScheletonLayout({"main": StudentView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "id": id
                        }
                    });
            });

            rtr.on( 'route:do', function( action ){
                var layout = new ScheletonLayout({"main": StudentView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "action": action
                        }
                    });
            });

            rtr.on( 'route:modifyStudent', function( action, id ){
                var layout = new ScheletonLayout({"main": StudentView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "action": action,
                            "id": id
                        }
                    });
            });
        };

        return mod;
    }
);
