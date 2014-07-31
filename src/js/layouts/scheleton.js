define(
	[
		// Libraries
		"backbone", "underscore",
		// Helpers
		"utilities",
		// Dependencies
		"bases/layout", "text!templates/layouts/scheleton.html", "views/chrome/navigation"],
	function( Backbone, _, Utilities, Layout, LytTemplate, NavView ){
		var ScheletonLayout = function( data ){
			Layout.call( this, data );

			_.extend( this.regions, {
				"navigation":	"nav",
				"main":			"#application"
			});

			_.extend( this.parts, {
				"navigation":	NavView
			});

			this.output = "body";
			this.template = _.template( LytTemplate );
		};

		Utilities.extend( Layout, ScheletonLayout );

		return ScheletonLayout;
	}
);
