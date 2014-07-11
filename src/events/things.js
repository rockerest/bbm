define(
    ["backbone", "underscore"],
    function( Backbone, _ ){
        var vent = _.extend( {}, Backbone.Events );
        window.bbm.channels.things = vent;
        return vent;
    }
);
