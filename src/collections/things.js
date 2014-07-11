define(
    ["backbone", "models/thing", "localstorage"],
    function( Backbone, Thing ){
        var Things = Backbone.Collection.extend({
                "model": Thing,
                "localStorage": new Backbone.LocalStorage( "Things" )
            });

        return Things;
    }
);
