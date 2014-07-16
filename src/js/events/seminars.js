define(
    [
    	// Libraries
    	"backbone", "underscore",
        // Dependencies
        "collections/students"
    ],
    function( Backbone, _, Students ){
        var vent = window.bbm.channels.seminars || _.extend( {}, Backbone.Events ),
            students = new Students(),
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
            data.seminar.setName( data.name );
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
            var student;

            students.fetch();
            _( data.seminar.get( "students" ) ).each(function( studentId, i ){
                student = students.get( studentId );
                student.removeSeminar( data.seminar );
            });

            data.seminar.destroy();
            vent.trigger( "seminar:cancel" );
        });

        window.bbm.channels.seminars = vent;
        return vent;
    }
);
