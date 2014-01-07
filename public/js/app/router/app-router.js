define(['App', 'underscore', 'backbone', 'marionette'],
    function(App, _, Backbone, Marionette) {

        var AppRouter = Backbone.Marionette.AppRouter.extend({
            initialize: function(options) {
                //only runs once

            },
            routes: {
                'foo/:bar(/)': 'foo',
                'foo2/:bar2(/)': 'foo2'
            },

            foo: function(bar) {

                require(['view/foo'], function(FooView) {

                    App.mainRegion.show(new FooView({
                        varOne: 'something something darkside',
                        varTwo: bar || 'bar not set'
                    }));
                })
            },
            foo2: function(bar2) {

                require(['view/foo2'], function(FooView2) {

                    App.mainRegion.show(new FooView2({
                        varOne: 'something something darkside',
                        varTwo: bar2 || 'bar not set'
                    }));
                })
            },

        });

        return AppRouter;

    });