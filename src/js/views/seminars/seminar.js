define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/seminars/seminar.html", "collections/seminars", "collections/students", "events/seminars"
    ],

    function(
        Backbone, _,
        tmpl, Seminars, Students, vent
    ){
        var SeminarsView = Backbone.View.extend({
                "template": _.template( tmpl ),

                "events": {
                    "keyup input#name": function( e ){
                        vent.trigger( "add:seminar:name", {
                            "name": this.$("input#name").val(),
                            "seminar": this.seminar,
                            "event": e
                        });
                    },
                    "click button.create": function(){
                        vent.trigger( "add:seminar:create", {
                            "seminar": this.seminar,
                            "collection": new Seminars()
                        });
                    },
                    "click button.save": function(){
                        vent.trigger( "edit:seminar:save", {
                            "seminar": this.seminar
                        });
                    },
                    "click button.delete": function(){
                        vent.trigger( "edit:seminar:delete", {
                            "seminar": this.seminar
                        });
                    },
                    "click button.cancel": function(){
                        vent.trigger( "seminar:cancel" );
                    }
                },

                "render": function(){
                    this.$el.html(
                        this.template({
                            "seminar": this.seminar,
                            "enrolledStudents": this.students,
                            "action": this.action,
                            "go": this.go
                        })
                    );

                    return this;
                },

                "initialize": function( data ){
                    var cData = {},
                        seminars = new Seminars(),
                        students = new Students(),
                        seminarStudents;

                    seminars.fetch();
                    students.fetch();

                    if( data.action ){
                        this.action = data.action;
                    }

                    if( data.id ){
                        this.seminar = seminars.get( data.id );
                    }
                    else{
                        this.seminar = new seminars.model();
                    }

                    if( this.action == "edit" ){
                        this.go = ["Save", "save"];
                    }
                    else{
                        this.go = ["Add", "create"];
                    }

                    this.students = _( this.seminar.getStudents() ).map( function( student ){
                        return students.get( student );
                    });

                    this.render();
                }
            });


        return SeminarsView;
    }
);
