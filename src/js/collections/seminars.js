define(
    ["backbone", "models/seminar", "localstorage"],
    function( Backbone, Seminar ){
        var Seminars = Backbone.Collection.extend({
                "model": Seminar,
                "localStorage": new Backbone.LocalStorage( "Seminars" )
            });

        return Seminars;
    }
);
