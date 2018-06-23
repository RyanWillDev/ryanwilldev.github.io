import React from 'react';
import Link from 'gatsby-link';
import galamorous from 'glamorous';

import { socialIconList } from '../SocialIcons';

import { brandGray, brandBlue } from '../../styleConstants';

const activeLinkStyle = {
  borderBottom: `2px solid ${brandBlue}`,
  paddingBottom: 3,
};

const socialIconLinks = [
  'https://twitter.com/RyanWillDev',
  'https://linkedin.com/in/ryanwilldev',
  'https://github.com/RyanWillDev',
];

const NavLinks = ({ navIsOpen, closeNav }) => (
  <div className={navIsOpen ? 'nav-links open' : 'nav-links'}>
    <ul>
      <li>
        <Link exact onClick={closeNav} activeStyle={activeLinkStyle} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={closeNav} activeStyle={activeLinkStyle} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link onClick={closeNav} activeStyle={activeLinkStyle} to="/writing">
          Writing
        </Link>
      </li>
      <li>
        <Link onClick={closeNav} activeStyle={activeLinkStyle} to="/projects">
          Projects
        </Link>
      </li>
    </ul>
    <ul className="social-icons">
      {socialIconList.map((Icon, i) => (
        <li key={i}>
          <a href={socialIconLinks[i]} target="_blank" onClick={closeNav}>
            <Icon color={brandGray} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavLinks;
