define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/students/student.html", "collections/students", "collections/seminars", "events/students"
    ],

    function(
        Backbone, _,
        tmpl, Students, Seminars, vent
    ){
        var StudentsView = Backbone.View.extend({
                "template": _.template( tmpl ),

                "events": {
                    "keyup input#name": function( e ){
                        vent.trigger( "add:student:name", {
                            "name": this.$("input#name").val(),
                            "student": this.student,
                            "event": e
                        });

                        return false;
                    },
                    "keyup input#seminar": function( e ){
                        vent.trigger( "edit:student:seminar:autocomplete", {
                            "event": e
                        });

                        return false;
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
                    },
                    "click button.enroll": function(){
                        vent.trigger( "edit:student:enroll", {
                            "id": this.$("input#seminar").data( "id" ),
                            "student": this.student,
                            "view": this
                        });
                    },
                    "click button.unenroll": function( e ){
                        vent.trigger( "edit:student:unenroll", {
                            "id": this.$( e.target ).data( "seminar-id" ),
                            "student": this.student,
                            "view": this
                        });
                    }
                },

                "render": function(){
                    var seminars = new Seminars();
                    seminars.fetch();

                    this.$el.html(
                        this.template({
                            "student": this.student,
                            "seminars": seminars,
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
