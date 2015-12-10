export function initialize(container, application) {
   application.inject('component', 'dashboard', 'service:dashboard-injector');
   application.inject('controller', 'dashboard', 'service:dashboard-injector');
}

export default {
  name: 'dashboard',
  initialize: initialize
};
