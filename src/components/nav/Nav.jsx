import React, { Component } from 'react';
import glamorous from 'glamorous';
import Link from 'gatsby-link';

import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import { MenuIcon } from './MenuIcon';

class Nav extends Component {
  constructor() {
    super();
    this.state = { navIsOpen: false };
  }

  toggleNav = () => {
    console.log('toggle');
    this.setState(state => ({
      navIsOpen: !state.navIsOpen,
    }));
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
          <div
            aria-label="open nav"
            className="nav__logo"
            style={{
              height: '60px',
              marginLeft: '16px',
              marginRight: 'auto',
              width: '125px',
            }}
          >
            <NavLogo />
          </div>
          <NavLinks navIsOpen={this.state.navIsOpen} />
        </div>
        <button
          style={{ position: 'absolute', top: 12, right: 22, padding: 8 }}
          onClick={this.toggleNav}
        >
          <MenuIcon />
        </button>
      </nav>
    );
  }
}

export default Nav;
