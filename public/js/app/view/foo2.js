define(['App', 'jquery', 'underscore', 'backbone', 'hbs!template/foo2', 'view/base-view'],
	function(App, $, _, Backbone, FooTmpl, BaseView) {
		return BaseView.extend({
			template: FooTmpl,
			events: {
				//'click .tabmenu-right li': 'changeGridOption'
			},
			ui: {
				//'siteTable': '#siteTable',
				//'nextprev': '.nextprev'
			},
			// regions: {
			// 	'btmRightHeader': '#header-bottom-right',
			// },
			initialize: function(data) {
				_.bindAll(this);

				this.model = new Backbone.Model({
					bar: 5
				})

			},
			onRender: function() {

			}

		});
	});