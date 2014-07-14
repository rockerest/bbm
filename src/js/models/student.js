define(
    ["backbone"],
    function( Backbone ){
        var StudentModel = Backbone.Model.extend({
                "urlRoot": "/student.php?p=",
                "defaults": {
                    "description": "Joe Student"
                }
            });

        return StudentModel;
    }
);
