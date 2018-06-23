import React, { Component } from 'react';
import glamorous from 'glamorous';
import Link from 'gatsby-link';

import NavLogo from './NavLogo';
import NavLinks from './NavLinks';

class Nav extends Component {
  constructor() {
    super();
    this.state = { navIsOpen: false };
  }

  closeNav = () => {
    this.setState({ navIsOpen: false });
  };

  render() {
    return (
      <nav>
        <div
          style={{
            height: '100%',
            position: 'relative',
            width: '100%',
          }}
        >
          <button
            className="nav__logo"
            style={{
              height: '60px',
              marginLeft: '16px',
              width: '125px',
            }}
            onClick={e => {
              this.setState(state => ({ navIsOpen: !state.navIsOpen }));
            }}
          >
            <NavLogo navIsOpen={this.state.navIsOpen} />
          </button>
          <NavLinks
            closeNav={this.closeNav}
            navIsOpen={this.state.navIsOpen}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
