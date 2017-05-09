const React = require('react');
const { StoreConnector } = require('hadron-react-components');
const CompyComponent = require('./compy');
const Store = require('../stores');
const Actions = require('../actions');

// const debug = require('debug')('mongodb-compass:compy:index');

class ConnectedCompyComponent extends React.Component {
  /**
   * Connect CompyComponent to store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <StoreConnector store={Store}>
        <CompyComponent actions={Actions} {...this.props} />
      </StoreConnector>
    );
  }
}

ConnectedCompyComponent.displayName = 'ConnectedCompyComponent';

module.exports = ConnectedCompyComponent;
