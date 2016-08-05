require('../scss/base.scss');
require('../scss/layout.scss');
import React from 'react';
import MobileNav from './MobileNav'; 
import Footer from './Footer';

class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <MobileNav />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object,
};

export default Layout;
