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
define('dummy/components/ember-chartnew', ['exports', 'ember-cli-chartnew/components/ember-chartnew'], function (exports, _emberCliChartnewComponentsEmberChartnew) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliChartnewComponentsEmberChartnew['default'];
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
          _this.dashboard.addComponent(_this.getRandomComponent());
        }, 250 * i);
      }
    },

    getRandomComponent: function getRandomComponent() {
      var random = Math.random();
      if (random < 0.25) {
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
      } else if (random < 0.50) {
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
      } else if (random < 0.75) {
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
      } else {
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
    },

    randomBarChartData: function randomBarChartData() {
      return {
        labels: ["Open", "In Progress", "Closed"],
        datasets: [{
          fillColor: "rgb(0, 109, 179)",
          data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
          title: "2015"
        }]
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
      inGraphDataFontColor: "rgb(65, 64, 64)",
      inGraphDataFontSize: 10,
      scaleGridLineColor: "rgba(0, 0, 0, 0.1)",
      graphTitleFontColor: "rgb(93, 92, 92)",
      scaleFontColor: "rgb(29, 29, 29)"
    },

    randomPieChartData: function randomPieChartData() {
      return [{
        value: Math.round(Math.random() * 100),
        color: "#00a5ff",
        title: "January"
      }, {
        value: Math.round(Math.random() * 100),
        color: "#008cda",
        title: "February"
      }, {
        value: Math.round(Math.random() * 100),
        color: "#006db3",
        title: "March"
      }, {
        value: Math.round(Math.random() * 100),
        color: "#005e95",
        title: "April"
      }, {
        value: Math.round(Math.random() * 100),
        color: "#004b74",
        title: "May"
      }, {
        value: Math.round(Math.random() * 100),
        color: "#003553",
        title: "June"
      }];
    },

    randomDoughnutChartData: function randomDoughnutChartData() {
      return [{
        value: Math.round(Math.random() * 100),
        color: "#00a5ff",
        title: "January"
      }, {
        value: Math.round(Math.random() * 100),
        color: "#008cda",
        title: "February",
        expandInRadius: 0.2,
        expandOutRadius: 0.2
      }, {
        value: Math.round(Math.random() * 100),
        color: "#006db3",
        title: "March"
      }, {
        value: Math.round(Math.random() * 100),
        color: "#005e95",
        title: "April",
        expandInRadius: -0.2
      }, {
        value: Math.round(Math.random() * 100),
        color: "#004b74",
        title: "May"
      }, {
        value: Math.round(Math.random() * 100),
        color: "#003553",
        title: "June",
        expandOutRadius: 0.3
      }];
    },

    actions: {
      addComponent: function addComponent() {
        this.dashboard.addComponent(this.getRandomComponent());
      },

      clearDashboard: function clearDashboard() {
        this.dashboard.clear();
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
    assert.ok(false, 'modules/ember-cli-dashboardable/components/dashboardable-card.js should pass jshint.\nmodules/ember-cli-dashboardable/components/dashboardable-card.js: line 12, col 11, \'$\' is not defined.\n\n1 error');
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
      statements: [["inline", "ember-chartnew", [], ["type", ["subexpr", "@mut", [["get", "options.type", ["loc", [null, [1, 22], [1, 34]]]]], [], []], "data", ["subexpr", "@mut", [["get", "options.data", ["loc", [null, [1, 40], [1, 52]]]]], [], []], "options", ["subexpr", "@mut", [["get", "options.options", ["loc", [null, [1, 61], [1, 76]]]]], [], []]], ["loc", [null, [1, 0], [1, 78]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/dashboardable-navbar", ["exports"], function (exports) {
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
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/dashboardable-navbar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "dashboardable-navbar");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "navbar-content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createTextNode("Header");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/dashboardable-side-menu", ["exports"], function (exports) {
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
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/dashboardable-side-menu.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "dashboardable-side-menu col-md-2");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "side-menu-header");
        var el3 = dom.createTextNode("\n    Here comes something\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "side-menu-list");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item");
        var el4 = dom.createTextNode("Item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item");
        var el4 = dom.createTextNode("Item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item");
        var el4 = dom.createTextNode("Item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item");
        var el4 = dom.createTextNode("Item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "side-menu-item");
        var el4 = dom.createTextNode("Item");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [14, 0], [14, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/ember-chartnew", ["exports"], function (exports) {
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
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ember-chartnew.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("canvas");
        dom.setAttribute(el1, "class", "canvas-chartnew");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'height');
        morphs[1] = dom.createAttrMorph(element0, 'width');
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["attribute", "height", ["get", "processedHeight", ["loc", [null, [1, 41], [1, 56]]]]], ["attribute", "width", ["get", "processedWidth", ["loc", [null, [1, 67], [1, 81]]]]], ["content", "yield", ["loc", [null, [2, 0], [2, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 12,
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
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", [["get", "item.options.icon", ["loc", [null, [10, 17], [10, 34]]]], "-chart"]]], ["inline", "component", [["get", "item.name", ["loc", [null, [11, 16], [11, 25]]]]], ["options", ["subexpr", "@mut", [["get", "item.options", ["loc", [null, [11, 34], [11, 46]]]]], [], []]], ["loc", [null, [11, 4], [11, 48]]]]],
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
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 13,
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
        statements: [["block", "dashboardable-card", [], ["classesToAdd", ["subexpr", "@mut", [["get", "item.options.classesToAdd", ["loc", [null, [9, 37], [9, 62]]]]], [], []]], 0, null, ["loc", [null, [9, 2], [12, 25]]]]],
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
        var el1 = dom.createElement("h5");
        var el2 = dom.createTextNode("these buttons' purpose is to demonstrate the modularity of the dashboard, they would not exist on the real application");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "buttons");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "button");
        dom.setAttribute(el2, "name", "button");
        var el3 = dom.createTextNode("Add");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "button");
        dom.setAttribute(el2, "name", "button");
        var el3 = dom.createTextNode("Clear");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["element", "action", ["addComponent"], [], ["loc", [null, [3, 38], [3, 63]]]], ["element", "action", ["clearDashboard"], [], ["loc", [null, [4, 38], [4, 65]]]], ["block", "each", [["get", "dashboard.components", ["loc", [null, [8, 8], [8, 28]]]]], [], 0, null, ["loc", [null, [8, 0], [13, 9]]]]],
      locals: [],
      templates: [child0]
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
  require("dummy/app")["default"].create({"name":"ember-cli-dashboardable","version":"0.0.0+78a35b2f"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map