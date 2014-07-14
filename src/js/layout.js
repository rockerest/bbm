define(
	["backbone"],
	function( Backbone ){
		var Layout = function(){
			this.regions = {};
			this.views = {};
		};

		Layout.prototype.getRegions = function(){
			return this.regions;
		};

		Layout.prototype.assignRegion = function( region, view ){
			this.views[ region ] = view;
		};

		Layout.prototype.assignRegions = function( regions ){
			var self = this;

			_( regions ).each( function( r, n, i ){
				self.views[ n ] = r;
			});
		};

		Layout.prototype.build = function(){
			return Backbone.View.extend({
                "el": this.output,
                "template": this.template,

                "render": function(){
                    this.$el.html( this.template() );
                    return this;
                },

                "initialize": function(){
                    this.render();
                }
            });
		};

		Layout.prototype.renderRegions = function( data ){
			var self = this;

			if( data === undefined ){
				data = {};
			}

			_( this.regions ).each( function( region, name, list ){
				var view = self.views[ name ];
				view.el = region;

				new view( data[ name ] );
			});
		};

		Layout.prototype.render = function(){
			throw new Error( "Render not implemented. Inheriting objects should implement render." );
		};

		return Layout;
	}
);