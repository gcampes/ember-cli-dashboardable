import Ember from 'ember';
import DashboardableMixin from '../../../mixins/dashboardable';
import { module, test } from 'qunit';

module('Unit | Mixin | dashboardable');

// Replace this with your real tests.
test('it works', function(assert) {
  let DashboardableObject = Ember.Object.extend(DashboardableMixin);
  let subject = DashboardableObject.create();
  assert.ok(subject);
});
