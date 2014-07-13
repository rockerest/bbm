define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!templates/views/thing.html", "collections/things", "events/things"
    ],

    function( Backbone, _, ThingTmpl, ThingCollection, vent ){
        var ThingsView = Backbone.View.extend({
                "el": "#application .main",
                "template": _.template( ThingTmpl ),

                "events": {
                    "click button.cancel": function(){
                        vent.trigger( "add:thing:cancel" );
                    },
                    "keyup input#description": function(){
                        vent.trigger( "add:thing:name", {
                            "description": this.$("input#description").val(),
                            "thing": this.thing
                        });
                    },
                    "click button.create": function(){
                        vent.trigger( "add:thing:create", {
                            "thing": this.thing
                        });
                    },
                    "click button.save": function(){
                        vent.trigger( "edit:thing:save", {
                            "thing": this.thing
                        });
                    }
                },

                "render": function(){
                    this.$el.html(
                        this.template({
                            "thing": this.thing,
                            "action": this.action,
                            "go": this.go
                        })
                    );

                    return this;
                },

                "initialize": function( data ){
                    var cData = {},
                        things = new ThingCollection();

                    things.fetch();

                    if( data.action ){
                        this.action = data.action;
                    }

                    if( data.id ){
                        this.thing = things.get( data.id );
                    }
                    else{
                        this.thing = things.create();
                        things.add( this.thing );
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


        return ThingsView;
    }
);