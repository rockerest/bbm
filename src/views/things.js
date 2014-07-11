define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!templates/things.html", "collections/things", "events/things"
    ],

    function( Backbone, _, ThingTmpl, Things, vent ){
        var ThingsView = Backbone.View.extend({
                "el": "#application .main",
                "template": _.template( ThingTmpl ),

                "events": {
                    "click button": function(){ vent.trigger( "add:thing" ); }
                },

                "render": function(){
                    this.$el.html( this.template( { "things": this.things } ) );
                    return this;
                },

                "initialize": function(){
                    this.things = new Things();
                    this.things.fetch();

                    this.render();
                }
            });


        return ThingsView;
    }
);
