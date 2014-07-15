define(
    [
        // Libraries
        "backbone", "underscore"
    ],
    function( Backbone, _ ){
        var StudentModel = Backbone.Model.extend({
                "urlRoot": "/student.php?p=",
                "defaults": {
                    "name": "Joe Student",
                    "seminars": []
                },

                // GETTERS
                "getName": function(){
                    return this.get( "name" );
                },

                "getSeminars": function(){
                    return this.get( "seminars" );
                },


                // SETTERS
                "setName": function( name ){
                    this.set( "name", name );
                },

                "setSeminars": function( seminars ){
                    this.set( "seminars", seminars );
                },

                // HELPERS
                "addSeminar": function( seminar ){
                    var id = seminar.get( "id" ),
                        seminars = this.getSeminars();

                    if( id ){
                        seminars.push( id );
                        this.setSeminars( seminars );
                        this.save();
                    }
                },

                "removeSeminar": function( seminar ){
                    var id = seminar.get( "id" ),
                        seminars = this.getSeminars();

                    if( id ){
                        seminars = _( seminars ).reject( function( sem ){
                            return id == sem;
                        });

                        this.setSeminars( seminars );
                        this.save();
                    }
                }
            });

        return StudentModel;
    }
);
