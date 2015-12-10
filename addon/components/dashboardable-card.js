import Ember from 'ember';
import DashboardableMixin from '../mixins/dashboardable';

export default Ember.Component.extend(DashboardableMixin, {
  classNames: ['dashboardable-card'],

  init(){
    this._super();
    setTimeout(() => {
      if(this.get('classesToAdd')){
        this.get('classesToAdd').split(' ').forEach((className) => {
          $(this.get('element')).addClass(className);
        });
      }
    });
  }
});
