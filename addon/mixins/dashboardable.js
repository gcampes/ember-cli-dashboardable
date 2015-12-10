import Ember from 'ember';
const {
  computed,
  on
  } = Ember;

export default Ember.Mixin.create({
  injectProperties: on('didInsertElement', function(){
    let options = this.get('options');
    if(options){
      if(!this.get('options.order')){
        this.set('options.order', 'Ω');
      }

      for(let property in options){
        let optionName = 'options.'+property;
        this.set(property, computed.alias(optionName));
      }
    }
  })
});
