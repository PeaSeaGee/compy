const CompyComponent = require('./lib/components');
const CompyActions = require('./lib/actions');
const CompyStore = require('./lib/stores');

/**
 * A sample role for the component.
 */
const ROLE = {
  name: 'Compy',
  component: CompyComponent
};

/**
 * Activate all the components in the Compy package.
 */
function activate() {
  // Register the CompyComponent as a role in Compass
  //
  // Available roles are:
  //   - Instance.Tab
  //   - Database.Tab
  //   - Collection.Tab
  //   - CollectionHUD.Item
  //   - Header.Item

  global.hadronApp.appRegistry.registerRole('Header.Item', ROLE);
  global.hadronApp.appRegistry.registerAction('Compy.Actions', CompyActions);
  global.hadronApp.appRegistry.registerStore('Compy.Store', CompyStore);
}

/**
 * Deactivate all the components in the Compy package.
 */
function deactivate() {
  global.hadronApp.appRegistry.deregisterRole('Header.Item', ROLE);
  global.hadronApp.appRegistry.deregisterAction('Compy.Actions');
  global.hadronApp.appRegistry.deregisterStore('Compy.Store');
}

module.exports = CompyComponent;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
