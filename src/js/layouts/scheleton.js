define(
	["backbone", "underscore", "layout", "text!templates/layouts/scheleton.html", "views/chrome/navigation"],
	function( Backbone, _, Layout, LytTemplate, NavView ){
		var ScheletonLayout = function( regions ){
			this.regions = {
				"navigation":	"nav",
				"main":			"#application"
			};

			this.parts = {
				"navigation":	NavView
			};

			if( regions && regions instanceof Object ){
				this.assignParts( regions );
			}
		};

		ScheletonLayout.prototype = new Layout();
		ScheletonLayout.prototype.constructor = ScheletonLayout;

		ScheletonLayout.prototype.setup = function(){
			this.output		= "body";
			this.template	= _.template( LytTemplate );

			return this;
		};

		return ScheletonLayout;
	}
);
