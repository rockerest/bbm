define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/seminars/seminars.html", "collections/seminars", "events/seminars"
    ],

    function(
        Backbone, _,
        tmpl, Seminars, vent
    ){
        var SeminarsView = Backbone.View.extend({
                "template": _.template( tmpl ),

                "events": {
                    "click button": function(){
                        vent.trigger( "add:seminar" );
                    },
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
