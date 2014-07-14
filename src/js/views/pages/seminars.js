define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!templates/views/seminars.html", "collections/seminars", "events/seminars"
    ],

    function( Backbone, _, SeminarsTmpl, Seminars, vent ){
        var SeminarsView = Backbone.View.extend({
                "el": "#main",
                "template": _.template( SeminarsTmpl ),

                "events": {
                    "click button": function(){ vent.trigger( "add:seminar" ); },
                    "click tr": function( e ){
                        vent.trigger( "edit:seminar", {"id": this.$( e.currentTarget ).data( "id" )} );
                    }
                },

                "render": function(){
                    this.$el.html( this.template( { "seminars": this.seminars } ) );
                    return this;
                },

                "initialize": function(){
                    this.seminars = new Seminars();
                    this.seminars.fetch();

                    this.render();
                }
            });


        return SeminarsView;
    }
);
