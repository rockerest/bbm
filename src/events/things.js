define(
    [
    	// Libraries
    	"backbone", "underscore"
    ],
    function( Backbone, _ ){
        var vent = window.bbm.channels.things || _.extend( {}, Backbone.Events ),
        	rtr = Backbone.Router.extend(),
        	workspace = new rtr();

        vent.on( "add:thing", function(){
        	workspace.navigate( "thing/new", {"trigger": true} );
        });

        vent.on( "add:thing:cancel", function(){
        	workspace.navigate( "things", {"trigger": true} );
        });

        window.bbm.channels.things = vent;
        return vent;
    }
);
