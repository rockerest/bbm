define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!templates/views/student.html", "collections/students", "events/students"
    ],

    function( Backbone, _, StudentTmpl, Students, vent ){
        var StudentsView = Backbone.View.extend({
                "el": "#main",
                "template": _.template( StudentTmpl ),

                "events": {
                    "keyup input#name": function( e ){
                        vent.trigger( "add:student:name", {
                            "name": this.$("input#name").val(),
                            "student": this.student,
                            "event": e
                        });
                    },
                    "click button.create": function(){
                        vent.trigger( "add:student:create", {
                            "student": this.student
                        });
                    },
                    "click button.save": function(){
                        vent.trigger( "edit:student:save", {
                            "student": this.student
                        });
                    },
                    "click button.delete": function(){
                        vent.trigger( "edit:student:delete", {
                            "student": this.student
                        });
                    },
                    "click button.cancel": function(){
                        vent.trigger( "student:cancel" );
                    }
                },

                "render": function(){
                    this.$el.html(
                        this.template({
                            "student": this.student,
                            "action": this.action,
                            "go": this.go
                        })
                    );

                    return this;
                },

                "initialize": function( data ){
                    var cData = {},
                        students = new Students();

                    students.fetch();

                    if( data.action ){
                        this.action = data.action;
                    }

                    if( data.id ){
                        this.student = students.get( data.id );
                    }
                    else{
                        this.student = students.create();
                        students.add( this.student );
                    }

                    if( this.action == "edit" ){
                        this.go = ["Save", "save"];
                    }
                    else{
                        this.go = ["Add", "create"];
                    }

                    this.render();
                }
            });


        return StudentsView;
    }
);
