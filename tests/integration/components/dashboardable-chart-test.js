import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboardable-chart', 'Integration | Component | dashboardable chart', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{dashboardable-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#dashboardable-chart}}
      template block text
    {{/dashboardable-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
