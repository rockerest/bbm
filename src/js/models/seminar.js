define(
    ["backbone"],
    function( Backbone ){
        var SeminarModel = Backbone.Model.extend({
                "urlRoot": "/seminar.php?p=",
                "defaults": {
                    "description": "Seminar 1"
                }
            });

        return SeminarModel;
    }
);
