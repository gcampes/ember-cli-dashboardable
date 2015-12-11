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
          'type': 'bar',
          'classesToAdd': 'custom-class-bar',
          'data': this.randomBarChartData(),
          'options': this.get('chartOptions')
        }
      };
    }
    else if(opt === 'horizontal-bar'){
      return {
        'name': 'dashboardable-chart',
        'options': {
          'icon': 'bar',
          'type': 'horizontal-bar',
          'classesToAdd': 'custom-class-horizontal-bar',
          'data': this.randomBarChartData(),
          'options': this.get('chartOptions')
        }
      };
    }
    else if(opt === 'pie'){
      return {
        'name': 'dashboardable-chart',
        'options': {
          'icon': 'pie',
          'type': 'pie',
          'classesToAdd': 'custom-class-pie',
          'data': this.randomPieChartData(),
          'options': this.get('chartOptions')
        }
      };
    }
    else if(opt === 'doughnut'){
      return {
        'name': 'dashboardable-chart',
        'options': {
          'icon': 'pie',
          'type': 'doughnut',
          'classesToAdd': 'custom-class-doughnut',
          'data': this.randomDoughnutChartData(),
          'options': this.get('chartOptions')
        }
      };
    }
    return null;
  },

  randomBarChartData(){
    return {
      labels: ["Open", "In Progress", "Closed"],
      datasets: [
        {
          fillColor: "rgb(0, 109, 179)",
          data: [Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100)],
          title: "2015"
        }
      ]
    };
  },

  chartOptions: {
    yAxisMinimumInterval: 1,
    animationSteps: 80,
    responsive: true,
    inGraphDataShow: true,
    annotateDisplay: true,
    graphTitleFontSize: 18,
    barShowStroke: false,
    segmentShowStroke: false,
    inGraphDataFontColor : "rgb(65, 64, 64)",
    inGraphDataFontSize: 10,
    scaleGridLineColor: "rgba(0, 0, 0, 0.1)",
    graphTitleFontColor: "rgb(93, 92, 92)",
    scaleFontColor: "rgb(29, 29, 29)"
  },

  randomPieChartData(){
    return [
      {
          value : Math.round(Math.random()*100),
          color: "#00a5ff",
          title : "January"
      },
      {
          value : Math.round(Math.random()*100),
          color: "#008cda",
          title : "February"
      },
      {
          value : Math.round(Math.random()*100),
          color: "#006db3",
          title : "March"
      },
      {
          value : Math.round(Math.random()*100),
          color: "#005e95",
          title : "April"
      },
      {
          value : Math.round(Math.random()*100),
          color: "#004b74",
          title : "May"
      },
      {
          value : Math.round(Math.random()*100),
          color: "#003553",
          title : "June"
      }
    ];
  },

  randomDoughnutChartData(){
    return [
      {
          value : Math.round(Math.random()*100),
          color: "#00a5ff",
          title : "January"
      },
      {
          value : Math.round(Math.random()*100),
          color: "#008cda",
          title : "February",
          expandInRadius : 0.2,
          expandOutRadius : 0.2
      },
      {
          value : Math.round(Math.random()*100),
          color: "#006db3",
          title : "March"
      },
      {
          value : Math.round(Math.random()*100),
          color: "#005e95",
          title : "April",
          expandInRadius : -0.2
      },
      {
          value : Math.round(Math.random()*100),
          color: "#004b74",
          title : "May"
      },
      {
          value : Math.round(Math.random()*100),
          color: "#003553",
          title : "June",
          expandOutRadius : 0.3
      }
    ];
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
