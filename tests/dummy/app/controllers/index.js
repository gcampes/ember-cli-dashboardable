import Ember from 'ember';

export default Ember.Controller.extend({
  barChartData: {
    labels: ["Open", "In Progress", "Closed"],
    datasets: [
      {
        fillColor: "rgba(0, 182, 214, 1)",
        data: [95,53,99],
        title: "2015"
      }
    ]
  },

  chartOptions: {
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

  pieChartData: [
    {
        value : 30,
        color: "#042334",
        title : "January"
    },
    {
        value : 90,
        color: "#0a5b88",
        title : "February"
    },
    {
        value : 24,
        color: "#21323D",
        title : "March"
    },
    {
        value : 58,
        color: "#05131b",
        title : "April"
    },
    {
        value : 82,
        color: "#1a8ecd",
        title : "May"
    },
    {
        value : 8,
        color: "#00507c",
        title : "June"
    }
  ],

  doughnutChartData: [
    {
        value : 30,
        color: "#00507c",
        title : "January"
    },
    {
        value : 90,
        color: "#1a8ecd",
        title : "February",
        expandInRadius : 0.2,
        expandOutRadius : 0.2
    },
    {
        value : 24,
        color: "#05131b",
        title : "March"
    },
    {
        value : 58,
        color: "#0a5b88",
        title : "April",
        expandInRadius : -0.2
    },
    {
        value : 82,
        color: "#042334",
        title : "May"
    },
    {
        value : 8,
        color: "#4387ac",
        title : "June",
        expandOutRadius : 0.3
    }
  ]

});
