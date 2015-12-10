/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*cat ~/wo
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.css');

  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');

  return app.toTree();
};
