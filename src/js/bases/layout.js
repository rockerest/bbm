define(
    ["backbone", "underscore"],
    function( Backbone, _ ){
        var Layout = function( parts ){
            this.regions = {};
            this.parts = {};
            this.output = 'body';

            if( parts && parts instanceof Object ){
                var self = this;

                _( parts ).each( function( part, name, i ){
                    self.parts[ name ] = part;
                });
            }
        };

        Layout.prototype.build = function( data, optionalOutputSelector ){
            var def = {
                    "render": {},
                    "construct": {},
                    "sub": {}
                };

            // If an output selector has been provided, use that as the output location
            if( optionalOutputSelector ){
                this.output = optionalOutputSelector;
            }

            data = _.extend( {}, def, data );

            var self = this;

            return Backbone.View.extend({
                "el": self.output,
                "template": self.template,

                "render": function(){
                    var isLayout, current, construct, pass, el;

                    // If any data should be rendered directly into this layout-view, do that here
                    this.$el.html( this.template( data.render ) );

                    // for each part specified in the list of parts
                    _( self.parts ).each( function( part, name ){
                        // Set the element to the selector present in the list of regions
                        el = {
                            "el": self.regions[ name ]
                        };

                        // determine whether this part is a layout
                        isLayout = part.prototype instanceof Layout;

                        // collect the information to pass into the constructor
                        construct = data.construct[ name ] ? data.construct[ name ] : {};
                        // collect the information to pass through to the render function
                        pass = data.sub[ name ] ? data.sub[ name ] : {};

                        // If this part is not a layout, merge the object containing the correct element with the data for the constructor
                        if( !isLayout ){
                            construct = _.extend( {}, el, construct );
                        }

                        // Set the "current" object to a new-ed instance of the part after passing in the construction data
                        current = new part( construct );

                        // if this current part IS a layout, call render on it and pass in the passthrough data
                        if( isLayout ){
                            current.render( pass, el.el );
                        }
                    });

                    return this;
                },

                "initialize": function(){
                    this.render();
                }
            });
        };

        Layout.prototype.render = function( data, optionalOutputSelector ){
            return new (this.build( data, optionalOutputSelector ))();
        };

        return Layout;
    }
);
