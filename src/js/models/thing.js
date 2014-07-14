define(
    ["backbone"],
    function( Backbone ){
        var ThingModel = Backbone.Model.extend({
                "urlRoot": "/thing.php?p=",
                "defaults": {
                    "description": "Thing 1"
                }
            });

        return ThingModel;
    }
);
