define(
	["backbone", "underscore", "layout", "text!templates/layouts/scheleton.html", "views/chrome/navigation"],
	function( Backbone, _, Layout, LytTemplate, NavView ){
		var ScheletonLayout = function( regions ){
			this.regions = {
				"navigation":	"nav",
				"main":			"#application"
			};

			this.views = {
				"navigation":	NavView
			};

			if( regions && regions instanceof Object ){
				this.assignRegions( regions );
			}
		};

		ScheletonLayout.prototype = new Layout();
		ScheletonLayout.prototype.constructor = ScheletonLayout;

		ScheletonLayout.prototype.setup = function(){
			this.output		= "body";
			this.template	= _.template( LytTemplate );

			return this;
		};

		ScheletonLayout.prototype.render = function( data ){
			var layout = this.build();

			new layout();
			this.renderRegions( data );
		};

		return ScheletonLayout;
	}
);
