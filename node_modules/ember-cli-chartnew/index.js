/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-chartnew',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/chartnew-js/ChartNew.js');
  },
};
