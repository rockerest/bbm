define(
    ["backbone", "underscore"],
    function( Backbone, _ ){
        var Layout = function( parts ){
            this.regions = {};
            this.parts = {};

            if( parts && parts instanceof Object ){
                var self = this;

                _( parts ).each( function( part, name, i ){
                    self.parts[ name ] = part;
                });
            }
        };

        Layout.prototype.build = function( data ){
            var def = {
                    "render": {},
                    "construct": {},
                    "sub": {}
                };

            data = _.extend( {}, def, data );

            var self = this;

            return Backbone.View.extend({
                "el": this.output,
                "template": this.template,

                "render": function(){
                    var current, construct, pass;

                    this.$el.html( this.template( data.render ) );

                    _( self.parts ).each( function( part, name ){
                        construct = data.construct[ name ] ? data.construct[ name ] : {};
                        pass = data.sub[ name ] ? data.sub[ name ] : {};

                        current = new part( construct );

                        if( _( current ).has( "build" ) ){
                            new (current.build( pass ))();
                        }
                    });

                    return this;
                },

                "initialize": function(){
                    this.render();
                }
            });
        };

        return Layout;
    }
);
