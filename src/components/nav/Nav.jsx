import React, { Component } from 'react';
import glamorous from 'glamorous';
import Link from 'gatsby-link';

import NavLogo from './NavLogo';
import NavLinks from './NavLinks';

class Nav extends Component {
  constructor() {
    super();
    this.state = { navIsOpen: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ navIsOpen: false });
    }, 1500);
  }

  toggleNav = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  };

  openNav = () => {
    this.setState({ navIsOpen: true });
  };

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
          onMouseEnter={this.openNav}
          onMouseLeave={this.closeNav}
          onClick={this.toggleNav}
        >
          <div
            className="nav__logo"
            style={{
              height: '60px',
              marginLeft: '16px',
              width: '125px',
            }}
          >
            <NavLogo navIsOpen={this.state.navIsOpen} />
          </div>
          <NavLinks
            openNav={this.openNav}
            closeNav={this.closeNav}
            navIsOpen={this.state.navIsOpen}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
