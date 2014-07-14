define(
    [
    	// Libraries
    	"backbone", "underscore"
    ],
    function( Backbone, _ ){
        var vent = window.bbm.channels.seminars || _.extend( {}, Backbone.Events ),
        	rtr = Backbone.Router.extend(),
        	workspace = new rtr(),
            ENTER_KEY_CODE = 13;

        vent.on( "seminar:cancel", function(){
        	workspace.navigate( "#/seminars", {"trigger": true} );
        });

        vent.on( "add:seminar", function(){
            workspace.navigate( "#/seminar/new", {"trigger": true} );
        });

        vent.on( "add:seminar:name", function( data ){
            var e = data.event,
                key = e.keyCode || e.which;
            data.seminar.set( "name", data.name );
            if( key == ENTER_KEY_CODE ){
                vent.trigger( "edit:seminar:save", {
                    "seminar": data.seminar
                });
            }
        });

        vent.on( "add:seminar:create", function( data ){
            data.seminar.save();
            vent.trigger( "seminar:cancel" );
        });

        vent.on( "edit:seminar", function( data ){
            workspace.navigate( "#/seminar/edit/" + data.id, {"trigger": true} );
        });

        vent.on( "edit:seminar:save", function( data ){
            data.seminar.save();
            vent.trigger( "seminar:cancel" );
        });

        vent.on( "edit:seminar:delete", function( data ){
            data.seminar.destroy();
            vent.trigger( "seminar:cancel" );
        });

        window.bbm.channels.seminars = vent;
        return vent;
    }
);
