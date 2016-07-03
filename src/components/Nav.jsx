require('../scss/nav.scss');
import React from 'react';
import NavLink from './NavLink';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="web-nav nav-links">
        <NavLink componentName={this.props.left} direction="left" />
        <NavLink componentName={this.props.right} direction="right" />
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  left: React.PropTypes.string,
  right: React.PropTypes.string,
};

export default Nav;
