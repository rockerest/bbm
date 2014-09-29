define(
	[
		// Libraries
		"backbone", "underscore",
		// Helpers
		"utilities",
		// Dependencies
		"bases/layout", "bases/region", "text!lyt/scheleton.html", "views/chrome/navigation"],
	function( Backbone, _, Utilities, Layout, Region, tmpl, NavView ){
		var ScheletonLayout = function( options ){
			var settings = {
					"regions": {}
				},
				defaults = {
					"regions": {
						"navigation":	"nav",
						"content":		"#main",
						"footer":		"footer"
					},
					"template": tmpl,
					"el": "body"
				};

			settings = Utilities.prepareSettings( settings, defaults, options );

			Layout.call( this, settings );
		};

		ScheletonLayout.prototype.render = function(){
			Layout.prototype.render.call( this );

			this.regions.navigation.show( NavView );
		};

		Utilities.extend( Layout, ScheletonLayout );

		return ScheletonLayout;
	}
);
