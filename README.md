backbone-marionette-require-handlebars-node-boilerplate
=======================================================

This is the setup I use with [RedditJS](https://github.com/BenjaminAdams/RedditJS).  I thought I would strip it down so myself and others can use it as a good starting point for projects.


####This boiler plat is built with :
 * Node.js <http://nodejs.org/>
 * Backbone.js <https://github.com/jashkenas/backbone>
 * Underscore.js <https://github.com/jashkenas/underscore>
 * Require.js <http://requirejs.org/>
 * Handlebars <http://handlebarsjs.com/>
 * jQuery <http://jquery.com/>

#### How to run this locally
 * Clone repo `git clone git@github.com:BenjaminAdams/backbone-marionette-require-handlebars-node-boilerplate.git`
 * In the console type `npm install`
 * In /public/js/loader.js you may have to change the window.production = false or else the changes you make to the source will not work.
 * `sudo npm -g install nodemon` This starts the node server and monitors for changes in the files and updates the code running on node.
 * Run the project and watch for live changes to the code type `nodemon` and you should be able to open it in http://localhost:8002/ 

 ####Minify for production
 * You might need to do `sudo npm -g install grunt`
 * To minify the code for production type `grunt` and in /public/js/loader.js change window.production = true and it will load the minified source.
