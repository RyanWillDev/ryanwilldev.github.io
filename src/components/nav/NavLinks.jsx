import React from 'react';
import Link from 'gatsby-link';
import galamorous from 'glamorous';

import { socialIconList } from '../SocialIcons';

import medaiQueries from '../../mediaQueries';
import { brandBlack, brandGray, brandBlue } from '../../styleConstants';

const activeLinkStyle = {
  borderBottom: `2px solid ${brandBlue}`,
  paddingBottom: 3,
};

const socialIconLinks = [
  'https://twitter.com/RyanWillDev',
  'https://linkedin.com/in/ryanwilldev',
  'https://github.com/RyanWillDev',
];

const NavLinks = ({ className, openNav, closeNav, navIsOpen }) => (
  <div className={navIsOpen ? 'nav-links open' : 'nav-links'}>
    <ul>
      <li>
        <Link
          exact
          onFocus={openNav}
          onBlur={closeNav}
          activeStyle={activeLinkStyle}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onFocus={openNav}
          onBlur={closeNav}
          activeStyle={activeLinkStyle}
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link onFocus={openNav} activeStyle={activeLinkStyle} to="/writing">
          Writing
        </Link>
      </li>
      <li>
        <Link onFocus={openNav} activeStyle={activeLinkStyle} to="/projects">
          Projects
        </Link>
      </li>
    </ul>
    <ul className="social-icons">
      {socialIconList.map((Icon, i) => (
        <li key={i}>
          <a
            onFocus={openNav}
            onBlur={i == socialIconLinks.length - 1 ? closeNav : () => {}}
            href={socialIconLinks[i]}
            target="_blank"
          >
            <Icon color={brandGray} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavLinks;
