import Ember from 'ember';
import DashboardableMixin from '../mixins/dashboardable';

export default Ember.Component.extend(DashboardableMixin, {
  classNames: ['dashboardable-card']
});
