define(
	[
		// Libraries
		"backbone", "underscore", "ribcage",
		// Helpers
		"utilities",
		// Dependencies
		"text!lyt/scheleton.html", "views/chrome/navigation"],
	function(
		Backbone, _, Ribcage,
		Utilities,
		tmpl, NavView
	){
		var ScheletonLayout = function( options ){
			var regions = {
					"navigation":	"nav",
					"main":			"#main",
					"footer":		"footer"
				},
				presets = {
					"navigation": {
						"object": NavView
					}
				},
				el = "body",
				_layout = new Ribcage();

			_layout
				.addRegions( regions )
				.setTemplate( tmpl )
				.addPresets( presets )
				.setElement( el );

			return _layout;
		};

		return ScheletonLayout;
	}
);
