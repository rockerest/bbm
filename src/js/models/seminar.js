define(
    [
        // Libraries
        "backbone", "underscore"
    ],
    function( Backbone, _ ){
        var SeminarModel = Backbone.Model.extend({
                "urlRoot": "/seminar.php?p=",
                "defaults": {
                    "name": "Seminar 1",
                    "students": []
                },

                // GETTERS
                "getName": function(){
                    return this.get( "name" );
                },
                "getStudents": function(){
                    return this.get( "students" );
                },

                // SETTERS
                "setName": function( name ){
                    this.set( "name", name );
                },
                "setStudents": function( students ){
                    this.set( "students", students );
                },

                // HELPERS
                "isStudentEnrolled": function( student ){
                    var id = student.get( "id" );

                    return _( this.getStudents() ).indexOf( id ) > -1;
                },

                "enrollStudent": function( student ){
                    var id = student.get( "id" ),
                        students = this.getStudents();

                    if( id && !this.isStudentEnrolled( student ) ){
                        students.push( id );
                        this.setStudents( students );
                        this.save();
                    }
                },

                "removeStudent": function( student ){
                    var id = student.get( "id" ),
                        students = this.getStudents(),
                        removed;

                    if( id && this.isStudentEnrolled( student ) ){
                        removed = _( students ).reject( function( s, i ){
                            return s === id;
                        });

                        this.setStudents( removed );
                        this.save();
                    }
                }
            });

        return SeminarModel;
    }
);
