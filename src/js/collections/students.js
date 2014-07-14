define(
    ["backbone", "models/student", "localstorage"],
    function( Backbone, Student ){
        var Students = Backbone.Collection.extend({
                "model": Student,
                "localStorage": new Backbone.LocalStorage( "Students" )
            });

        return Students;
    }
);
