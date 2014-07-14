define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!templates/views/seminar.html", "collections/seminars", "events/seminars"
    ],

    function( Backbone, _, SeminarTmpl, Seminars, vent ){
        var SeminarsView = Backbone.View.extend({
                "el": "#main",
                "template": _.template( SeminarTmpl ),

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
                            "seminar": this.seminar
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
                            "action": this.action,
                            "go": this.go
                        })
                    );

                    return this;
                },

                "initialize": function( data ){
                    var cData = {},
                        seminars = new Seminars();

                    seminars.fetch();

                    if( data.action ){
                        this.action = data.action;
                    }

                    if( data.id ){
                        this.seminar = seminars.get( data.id );
                    }
                    else{
                        this.seminar = seminars.create();
                        seminars.add( this.seminar );
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


        return SeminarsView;
    }
);
