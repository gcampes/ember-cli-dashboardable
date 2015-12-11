import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Service.extend({
  components: Ember.computed.alias('sortedComponents'),

  sortProperties: ['options.order:asc'],

  sortedComponents : Ember.computed.sort('rawComponents', 'sortProperties'),

  rawComponents : new A([]),

  addComponent(component){
    this.get('rawComponents').pushObject(component);
  },

  addComponents(componentList){
    for(let i = 0; i < componentList.length; i++){
      this.get('rawComponents').pushObject(componentList[i]);
    }
  },

  changeSortProperties(sortProperties){
    this.set('sortProperties', sortProperties);
  },

  removeComponent(component){
    this.get('rawComponents').removeObject(component);
  },

  removeComponents(componentList){
    componentList.forEach((component) => {
      this.get('rawComponents').removeObject(component);
    });
  },

  clear(){
    this.set('rawComponents', new A([]));
  }
});
