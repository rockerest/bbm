define(
    ["backbone", "underscore"],
    function( Backbone, _ ){
        var vent = window.bbm.channels.things || _.extend( {}, Backbone.Events );

        vent.on( "add:thing", function(){
        	Backbone.Router.navigate( "things/new", {"trigger": true} );
        });

        window.bbm.channels.things = vent;
        return vent;
    }
);
