import Ember from 'ember';

export default Ember.Controller.extend({
  init(){
    for(let i = 10; i > 0 ; i--){
      setTimeout(() => {
        this.dashboard.addComponent(this.getComponent());
      }, i);
    }
  },

  getComponent(opt){
    if(!opt){
      let optSelector = Math.random();

      if(optSelector <= 0.25){
        opt = 'bar';
      }
      else if(optSelector <= 0.50){
        opt = 'horizontal-bar';
      }

      else if(optSelector <= 0.75){
        opt = 'pie';
      }

      else{
        opt = 'doughnut';
      }
    }

    if(opt === 'bar'){
      return {
        'name': 'dashboardable-chart',
        'options': {
          'icon': 'bar',
          'classesToAdd': 'card-default',
          'data': this.randomBarChartData()
        }
      };
    }
    else if(opt === 'horizontal-bar'){
      return {
        'name': 'dashboardable-chart',
        'options': {
          'axis': {
            rotated: true,         // horizontal bar chart
            x: {
                type: 'category'   // this needed to load string x value
            }
          },
          'icon': 'bar',
          'classesToAdd': 'card-default double-width',
          'data': this.randomHorizontalBarChartData()
        }
      };
    }
    else if(opt === 'pie'){
      return {
        'name': 'dashboardable-chart',
        'options': {
          'icon': 'pie',
          'classesToAdd': 'card-default',
          'data': this.randomPieChartData()
        }
      };
    }
    else if(opt === 'doughnut'){
      return {
        'name': 'dashboardable-chart',
        'options': {
          'icon': 'pie',
          'classesToAdd': 'card-default',
          'data': this.randomDoughnutChartData()
        }
      };
    }
    else if(opt === 'information'){
      return {
        'name': 'information-card',
        'options': {
          'text': 'Lorem ipsum'
        }
      }
    }
    return null;
  },

  randomBarChartData(){
    return {
      colors:{
        "Lorem" : "#024c81",
        "Dolor": "#0373c4",
        "Ipsum": "#46b1ff"
      },
      columns: [
        ['Lorem', Math.round(Math.random()*100)],
        ['Ipsum', Math.round(Math.random()*100)],
        ['Dolor', Math.round(Math.random()*100)],
      ],
      type: 'bar'
    };
  },

  randomHorizontalBarChartData(){
    return {
      json: [{
          "label": "Lorem",
          "count": Math.round(Math.random()*100)
      }, {
          "label": "Dolor",
          "count": Math.round(Math.random()*100)
      }, {
          "label": "Ipsum",
          "count": Math.round(Math.random()*100),
      }],            // specify that our above json is the data
      keys: {
        x: 'label',         // specify that the "name" key is the x value
        value: ["count"]     // specify that the "age" key is the y value
      },
      type: 'bar'
    };
  },

  randomPieChartData(){
    return {
        colors:{
          "Lorem" : "#005796",
          "Dolor": "#027ad2",
          "Ipsum": "#46b1ff"
        },
        columns: [
          ["Lorem", Math.round(Math.random()*100)],
          ["Ipsum", Math.round(Math.random()*100)],
          ["Dolor", Math.round(Math.random()*100)],
        ],
        type : 'pie'
    }
  },

  randomDoughnutChartData(){
    return {
      colors:{
        "Lorem" : "#005796",
        "Dolor": "#027ad2",
        "Ipsum": "#46b1ff"
      },
      columns: [
        ["Lorem", Math.round(Math.random()*100)],
        ["Ipsum", Math.round(Math.random()*100)],
        ["Dolor", Math.round(Math.random()*100)],
      ],
      type : 'donut'
    }
  },


  actions:{
    addComponent(opt){
      this.dashboard.addComponent(this.getComponent(opt));
    },

    clearDashboard(){
      this.dashboard.clear();
    },

    removeCard(item){
      this.dashboard.removeComponent(item);
    },

    addBarChart(){
      this.addComponent('bar');
    },

    addHorizontalBarChart(){
      this.addComponent('horizontal-bar');
    },

    addPieChart(){
      this.addComponent('pie');
    },

    addDoughnutChart(){
      this.addComponent('doughnut');
    },
  }
});
