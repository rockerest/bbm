define(
    [
        // Libraries
        "sammy", "underscore",
        // Routers
        "routers/scheleton", "routers/seminars", "routers/students"
    ],
    function(
        Sammy, _,
        ScheletonRouter, SeminarsRouter, StudentsRouter
    ){
        var Routes = {},
            scheleton = new Sammy();

        Routes.startup = function(){
            var routers = [
                    ScheletonRouter,
                    SeminarsRouter,
                    StudentsRouter
                ],
                count = 0;

            _( routers ).each( function( r, i ){
                ++count;
                r.register( scheleton );

                if( count === routers.length ){
                    scheleton.run( "#/" );
                }
            });
        };

        Routes.navigate = function( path ){
            location.href = path;
        };

        return Routes;
    }
);
