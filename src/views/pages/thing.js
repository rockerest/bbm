define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!templates/views/thing.html", "models/thing", "events/things"
    ],

    function( Backbone, _, ThingTmpl, ThingModel, vent ){
        var ThingsView = Backbone.View.extend({
                "el": "#application .main",
                "template": _.template( ThingTmpl ),
                "model": ThingModel,

                "events": {
                    "click button.cancel": function(){ vent.trigger( "add:thing:cancel" ); }
                },

                "render": function(){
                    this.$el.html( this.template() );
                    return this;
                },

                "initialize": function( data ){
                    var action,
                        id;

                    if( data.action ){
                        action = data.action;
                    }

                    if( data.id ){
                        id = data.id;
                    }

                    this.render();
                }
            });


        return ThingsView;
    }
);