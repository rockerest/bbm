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
        	workspace.navigate( "#/thing/new", {"trigger": true} );
        });

        vent.on( "add:thing:name", function( data ){
            data.thing.set( "description", data.description );
        });

        vent.on( "add:thing:create", function( data ){
            data.thing.save();
            vent.trigger( "add:thing:cancel" );
        });

        vent.on( "add:thing:cancel", function(){
        	workspace.navigate( "#/things", {"trigger": true} );
        });

        vent.on( "edit:thing", function( data ){
            workspace.navigate( "#/thing/edit/" + data.id, {"trigger": true} ); 
        });

        vent.on( "edit:thing:save", function( data ){
            data.thing.save();
            vent.trigger( "add:thing:cancel" );
        });

        window.bbm.channels.things = vent;
        return vent;
    }
);
