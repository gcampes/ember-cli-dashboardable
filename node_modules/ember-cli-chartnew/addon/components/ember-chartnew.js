import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-chartnew'],

  defaultOptions: {
    animationSteps: 30,
    inGraphDataShow: true,
    annotateDisplay: true,
    graphTitleFontSize: 18
  },

  processWidth(){
    if(this.get('width')){
      this.set('processedWidth', this.get('width'));
    }
    // this.get('element').style.width = this.get('element').parentNode.clientWidth + 'px';
    this.set('processedWidth', this.get('element').clientWidth - 20);
  },

  processHeight(){
    if(this.get('height')){
      this.set('processedHeight', this.get('height'));
    }
    // this.get('element').style.height = this.get('element').parentNode.clientHeight + 'px';
    this.set('processedHeight', this.get('element').clientHeight);
  },

  dataDidChange: Ember.observer('data', function(){
    this.renderChart();
  }),

  renderChart(){
      let context = this.get('element').childNodes[0].getContext("2d");
      let chartType = Ember.String.classify(this.get('type'));
      let data = this.get('data');
      let options = Ember.merge(this.get('defaultOptions'), this.get('options'))

      if(this.get('noAnimations')){
        this.set('options.animationSteps', 0);
      }
      new Chart(context)[chartType](data, options);

  },

  didInsertElement(){
    setTimeout(() => {
      this.renderChart();
      this.set('noAnimations', true);
    });
  }
});
