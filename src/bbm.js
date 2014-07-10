define(
    ["marionette", "backbone"],
    function( Marionette, Backbone ){
        var Application = {};

        Application.start = function(){
            Application.construct();
            console.log( "Started." );
        };

        Application.construct = function(){
            this.app = new Marionette.Application();

            this.app.addRegions({
                "main": "#application"
            });

            this.app.on( 'initialize:after', function(){
                Backbone.history.start();
            });
        };

        return Application;
    }
);
