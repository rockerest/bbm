define(
    [
        // Libraries
        "backbone", "underscore"
    ],
    function( Backbone, _ ){
        var vent = window.bbm.channels.students || _.extend( {}, Backbone.Events ),
            rtr = Backbone.Router.extend(),
            workspace = new rtr(),
            ENTER_KEY_CODE = 13;

        vent.on( "student:cancel", function(){
            workspace.navigate( "#/students", {"trigger": true} );
        });

        vent.on( "add:student", function(){
            workspace.navigate( "#/student/new", {"trigger": true} );
        });

        vent.on( "add:student:name", function( data ){
            var e = data.event,
                key = e.keyCode || e.which;
            data.student.set( "name", data.name );
            if( key == ENTER_KEY_CODE ){
                vent.trigger( "edit:student:save", {
                    "student": data.student
                });
            }
        });

        vent.on( "add:student:create", function( data ){
            data.student.save();
            vent.trigger( "student:cancel" );
        });

        vent.on( "edit:student", function( data ){
            workspace.navigate( "#/student/edit/" + data.id, {"trigger": true} );
        });

        vent.on( "edit:student:save", function( data ){
            data.student.save();
            vent.trigger( "student:cancel" );
        });

        vent.on( "edit:student:delete", function( data ){
            data.student.destroy();
            vent.trigger( "student:cancel" );
        });

        window.bbm.channels.students = vent;
        return vent;
    }
);
