"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/c3-chart', ['exports', 'ember-c3/components/c3-chart'], function (exports, _emberC3ComponentsC3Chart) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberC3ComponentsC3Chart['default'];
    }
  });
});
define('dummy/components/dashboardable-card', ['exports', 'ember-cli-dashboardable/components/dashboardable-card'], function (exports, _emberCliDashboardableComponentsDashboardableCard) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliDashboardableComponentsDashboardableCard['default'];
    }
  });
});
define('dummy/components/dashboardable-chart', ['exports', 'ember-cli-dashboardable/components/dashboardable-chart'], function (exports, _emberCliDashboardableComponentsDashboardableChart) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliDashboardableComponentsDashboardableChart['default'];
    }
  });
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    init: function init() {
      var _this = this;

      for (var i = 10; i > 0; i--) {
        setTimeout(function () {
          _this.dashboard.addComponent(_this.getComponent());
        }, i);
      }
    },

    getComponent: function getComponent(opt) {
      if (!opt) {
        var optSelector = Math.random();

        if (optSelector <= 0.25) {
          opt = 'bar';
        } else if (optSelector <= 0.50) {
          opt = 'horizontal-bar';
        } else if (optSelector <= 0.75) {
          opt = 'pie';
        } else {
          opt = 'doughnut';
        }
      }

      if (opt === 'bar') {
        return {
          'name': 'dashboardable-chart',
          'options': {
            'icon': 'bar',
            'classesToAdd': 'card-default',
            'data': this.randomBarChartData()
          }
        };
      } else if (opt === 'horizontal-bar') {
        return {
          'name': 'dashboardable-chart',
          'options': {
            'axis': {
              rotated: true, // horizontal bar chart
              x: {
                type: 'category' // this needed to load string x value
              }
            },
            'icon': 'bar',
            'classesToAdd': 'card-default',
            'data': this.randomHorizontalBarChartData()
          }
        };
      } else if (opt === 'pie') {
        return {
          'name': 'dashboardable-chart',
          'options': {
            'icon': 'pie',
            'classesToAdd': 'card-default',
            'data': this.randomPieChartData()
          }
        };
      } else if (opt === 'doughnut') {
        return {
          'name': 'dashboardable-chart',
          'options': {
            'icon': 'pie',
            'classesToAdd': 'card-default',
            'data': this.randomDoughnutChartData()
          }
        };
      } else if (opt === 'information') {
        return {
          'name': 'information-card',
          'options': {
            'text': 'Lorem ipsum'
          }
        };
      }
      return null;
    },

    randomBarChartData: function randomBarChartData() {
      return {
        colors: {
          "Lorem": "#024c81",
          "Dolor": "#0373c4",
          "Ipsum": "#46b1ff"
        },
        columns: [['Lorem', Math.round(Math.random() * 100)], ['Ipsum', Math.round(Math.random() * 100)], ['Dolor', Math.round(Math.random() * 100)]],
        type: 'bar'
      };
    },

    randomHorizontalBarChartData: function randomHorizontalBarChartData() {
      return {
        json: [{
          "label": "Lorem",
          "count": Math.round(Math.random() * 100)
        }, {
          "label": "Dolor",
          "count": Math.round(Math.random() * 100)
        }, {
          "label": "Ipsum",
          "count": Math.round(Math.random() * 100)
        }], // specify that our above json is the data
        keys: {
          x: 'label', // specify that the "name" key is the x value
          value: ["count"] // specify that the "age" key is the y value
        },
        type: 'bar'
      };
    },

    randomPieChartData: function randomPieChartData() {
      return {
        colors: {
          "Lorem": "#005796",
          "Dolor": "#027ad2",
          "Ipsum": "#46b1ff"
        },
        columns: [["Lorem", Math.round(Math.random() * 100)], ["Ipsum", Math.round(Math.random() * 100)], ["Dolor", Math.round(Math.random() * 100)]],
        type: 'pie'
      };
    },

    randomDoughnutChartData: function randomDoughnutChartData() {
      return {
        colors: {
          "Lorem": "#005796",
          "Dolor": "#027ad2",
          "Ipsum": "#46b1ff"
        },
        columns: [["Lorem", Math.round(Math.random() * 100)], ["Ipsum", Math.round(Math.random() * 100)], ["Dolor", Math.round(Math.random() * 100)]],
        type: 'donut'
      };
    },

    actions: {
      addComponent: function addComponent(opt) {
        this.dashboard.addComponent(this.getComponent(opt));
      },

      clearDashboard: function clearDashboard() {
        this.dashboard.clear();
      },

      removeCard: function removeCard(item) {
        this.dashboard.removeComponent(item);
      },

      addBarChart: function addBarChart() {
        this.addComponent('bar');
      },

      addHorizontalBarChart: function addHorizontalBarChart() {
        this.addComponent('horizontal-bar');
      },

      addPieChart: function addPieChart() {
        this.addComponent('pie');
      },

      addDoughnutChart: function addDoughnutChart() {
        this.addComponent('doughnut');
      }
    }
  });
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/ember-cli-dashboardable/tests/modules/ember-cli-dashboardable/components/dashboardable-card.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-dashboardable/components');
  QUnit.test('modules/ember-cli-dashboardable/components/dashboardable-card.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-dashboardable/components/dashboardable-card.js should pass jshint.');
  });
});
define('dummy/ember-cli-dashboardable/tests/modules/ember-cli-dashboardable/components/dashboardable-chart.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-dashboardable/components');
  QUnit.test('modules/ember-cli-dashboardable/components/dashboardable-chart.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-dashboardable/components/dashboardable-chart.js should pass jshint.');
  });
});
define('dummy/ember-cli-dashboardable/tests/modules/ember-cli-dashboardable/initializers/dashboard.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-dashboardable/initializers');
  QUnit.test('modules/ember-cli-dashboardable/initializers/dashboard.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-dashboardable/initializers/dashboard.js should pass jshint.');
  });
});
define('dummy/ember-cli-dashboardable/tests/modules/ember-cli-dashboardable/mixins/dashboardable.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-dashboardable/mixins');
  QUnit.test('modules/ember-cli-dashboardable/mixins/dashboardable.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-dashboardable/mixins/dashboardable.js should pass jshint.');
  });
});
define('dummy/ember-cli-dashboardable/tests/modules/ember-cli-dashboardable/services/dashboard-injector.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-dashboardable/services');
  QUnit.test('modules/ember-cli-dashboardable/services/dashboard-injector.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-dashboardable/services/dashboard-injector.js should pass jshint.');
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/dashboard', ['exports', 'ember-cli-dashboardable/initializers/dashboard'], function (exports, _emberCliDashboardableInitializersDashboard) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliDashboardableInitializersDashboard['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliDashboardableInitializersDashboard.initialize;
    }
  });
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('dummy/services/dashboard-injector', ['exports', 'ember-cli-dashboardable/services/dashboard-injector'], function (exports, _emberCliDashboardableServicesDashboardInjector) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliDashboardableServicesDashboardInjector['default'];
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "dashboardable-side-menu");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "side-menu-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "fa fa-line-chart");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("Dashboard");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "side-menu-list");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item large");
        var el4 = dom.createTextNode("Larger item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item");
        var el4 = dom.createTextNode("item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item");
        var el4 = dom.createTextNode("item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item active");
        var el4 = dom.createTextNode("item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item");
        var el4 = dom.createTextNode("item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" {{dashboardable-side-menu}} ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "dashboardable-dashboard-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [18, 2], [18, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/dashboardable-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/dashboardable-card.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/dashboardable-chart", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/dashboardable-chart.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "c3-chart", [], ["data", ["subexpr", "@mut", [["get", "options.data", ["loc", [null, [1, 16], [1, 28]]]]], [], []], "axis", ["subexpr", "@mut", [["get", "options.axis", ["loc", [null, [1, 34], [1, 46]]]]], [], []]], ["loc", [null, [1, 0], [1, 48]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "buttons");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn-add dropdown-toggle");
          dom.setAttribute(el2, "data-toggle", "dropdown");
          dom.setAttribute(el2, "type", "button");
          dom.setAttribute(el2, "name", "button");
          var el3 = dom.createTextNode("Add");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "caret");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2, "class", "dropdown-menu");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createElement("div");
          var el5 = dom.createElement("i");
          dom.setAttribute(el5, "class", "fa fa-bar-chart");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("Bar Chart");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createElement("div");
          var el5 = dom.createElement("i");
          dom.setAttribute(el5, "class", "fa fa-bar-chart");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("Horizontal Bar Chart");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createElement("div");
          var el5 = dom.createElement("i");
          dom.setAttribute(el5, "class", "fa fa-pie-chart");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("Pie Chart");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createElement("div");
          var el5 = dom.createElement("i");
          dom.setAttribute(el5, "class", "fa fa-pie-chart");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("Doughnut Chart");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn-add-random");
          dom.setAttribute(el2, "type", "button");
          dom.setAttribute(el2, "name", "button");
          var el3 = dom.createTextNode("Add Random");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn-clear");
          dom.setAttribute(el2, "type", "button");
          dom.setAttribute(el2, "name", "button");
          var el3 = dom.createTextNode("Clear");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [3]);
          var element4 = dom.childAt(element3, [1, 0]);
          var element5 = dom.childAt(element3, [3, 0]);
          var element6 = dom.childAt(element3, [5, 0]);
          var element7 = dom.childAt(element3, [7, 0]);
          var element8 = dom.childAt(element2, [5]);
          var element9 = dom.childAt(element2, [7]);
          var morphs = new Array(6);
          morphs[0] = dom.createElementMorph(element4);
          morphs[1] = dom.createElementMorph(element5);
          morphs[2] = dom.createElementMorph(element6);
          morphs[3] = dom.createElementMorph(element7);
          morphs[4] = dom.createElementMorph(element8);
          morphs[5] = dom.createElementMorph(element9);
          return morphs;
        },
        statements: [["element", "action", ["addComponent", "bar"], [], ["loc", [null, [5, 15], [5, 46]]]], ["element", "action", ["addComponent", "horizontal-bar"], [], ["loc", [null, [6, 15], [6, 57]]]], ["element", "action", ["addComponent", "pie"], [], ["loc", [null, [7, 15], [7, 46]]]], ["element", "action", ["addComponent", "doughnut"], [], ["loc", [null, [8, 15], [8, 51]]]], ["element", "action", ["addComponent"], [], ["loc", [null, [11, 63], [11, 88]]]], ["element", "action", ["clearDashboard"], [], ["loc", [null, [12, 58], [12, 85]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 2
              },
              "end": {
                "line": 20,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            var el2 = dom.createTextNode("Lorem Ipsum");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "fa fa-times");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createElementMorph(element1);
            morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", [["get", "item.options.icon", ["loc", [null, [18, 17], [18, 34]]]], "-chart"]]], ["element", "action", ["removeCard", ["get", "item", ["loc", [null, [18, 100], [18, 104]]]]], [], ["loc", [null, [18, 78], [18, 106]]]], ["inline", "component", [["get", "item.name", ["loc", [null, [19, 16], [19, 25]]]]], ["options", ["subexpr", "@mut", [["get", "item.options", ["loc", [null, [19, 34], [19, 46]]]]], [], []]], ["loc", [null, [19, 4], [19, 48]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "dashboardable-card", [], ["class", ["subexpr", "@mut", [["get", "item.options.classesToAdd", ["loc", [null, [17, 30], [17, 55]]]]], [], []]], 0, null, ["loc", [null, [17, 2], [20, 25]]]]],
        locals: ["item"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "dashboardable-card", [], ["class", "full-width"], 0, null, ["loc", [null, [1, 0], [14, 23]]]], ["block", "each", [["get", "dashboard.components", ["loc", [null, [16, 8], [16, 28]]]]], [], 1, null, ["loc", [null, [16, 0], [21, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-cli-dashboardable","version":"0.0.0+1a0df9c9"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map