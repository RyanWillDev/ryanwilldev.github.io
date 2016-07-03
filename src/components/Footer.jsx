import React from 'react';

require('../scss/footer.scss');

class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <footer>
      <div className="social-links">
        <ul className="social-icons">
          <li><a href="https://github.com/ryanwilldev"><i className="fa fa-github"></i></a></li>
          <li><a href="https://codepen.io/ryanwilldev"><i className="fa fa-codepen"></i></a></li>
          <li><a href="https://twitter.com/ryanwilldev"><i className="fa fa-twitter"></i></a></li>
        </ul>
      </div>
      </footer>
    );
  }
}

export default Footer;
