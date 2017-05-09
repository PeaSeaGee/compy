const React = require('react');
const PropTypes = require('prop-types');
const CompyActions = require('../actions');
const ToggleButton = require('./toggle-button');

// const debug = require('debug')('mongodb-compass:compy');

class CompyComponent extends React.Component {

  onClick() {
    CompyActions.toggleStatus();
  }

  /**
   * Render Compy component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className="compy">
        <h2 className="compy-title">CompyComponent</h2>
        <p><i>💥 Clippy for Compass 💥</i></p>
        <p>The current status is: <code>{this.props.status}</code></p>
        <ToggleButton onClick={this.onClick} />
      </div>
    );
  }
}

CompyComponent.propTypes = {
  status: PropTypes.oneOf(['enabled', 'disabled'])
};

CompyComponent.defaultProps = {
  status: 'enabled'
};

CompyComponent.displayName = 'CompyComponent';

module.exports = CompyComponent;
