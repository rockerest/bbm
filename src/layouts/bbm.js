define(
	["backbone", "underscore", "layout", "text!templates/layouts/bbm.html", "views/navigation"],
	function( Backbone, _, Layout, LytTemplate, NavView ){
		var BbmLayout = function( regions ){
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

		BbmLayout.prototype = new Layout();
		BbmLayout.prototype.constructor = BbmLayout;

		BbmLayout.prototype.setup = function(){
			this.output		= "body";
			this.template	= _.template( LytTemplate );

			return this;
		};

		BbmLayout.prototype.render = function(){
			var layout = this.build();

			new layout();
			this.renderRegions();
		};

		return BbmLayout;
	}
);