define(
	[
		// Libraries
		"backbone", "underscore",
		// Helpers
		"utilities",
		// Dependencies
		"bases/layout", "text!lyt/scheleton.html", "views/chrome/navigation"],
	function(
		Backbone, _,
		Utilities,
		Layout, tmpl, NavView
	){
		var ScheletonLayout = function( options ){
			var regions = {
					"navigation":	"nav",
					"main":			"#main",
					"footer":		"footer"
				},
				presets = {
					"navigation":	NavView
				},
				el = "body",
				_layout = new Layout();

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
