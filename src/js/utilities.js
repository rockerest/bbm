define(
    function(){
        var Utilities = {};

        Utilities.extend = function( parent, child ){
            var childPrototype = child.prototype,
                key;

            child.prototype = Object.create( parent.prototype );
            for( key in childPrototype ){
                child.prototype[ key ] = childPrototype[ key ];
            }

            child.prototype.constructor = child;

            Object.defineProperty( child.prototype, 'constructor', {
                enumerable: false,
                value: child
            });
        };

        Utilities.prepareSettings = function( output, defaults, options ){
            if( !options ){
                options = {};
            }

            _.extend( output.regions, defaults.regions, options.regions );
            _.defaults( output, defaults, options );

            return output;
        };

        Utilities.warn = function( message ){
            if( console && console.warn ){
                console.warn( message );
            }
        };

        Utilities.error = function( message ){
            if( console && console.error ){
                console.error( message );
            }
        };

        return Utilities;
    }
);
