import React from 'react';
import Link from 'gatsby-link';
import galamorous from 'glamorous';

import {
  socialIconList,
  socialIconLinks,
  socialIconNames,
} from '../SocialIcons';

import { brandGray, brandBlue } from '../../styleConstants';

const activeLinkStyle = {
  borderBottom: `2px solid ${brandBlue}`,
  paddingBottom: 3,
};

const NavLinks = ({ navIsOpen }) => (
  <div className={navIsOpen ? 'nav-links open' : 'nav-links'}>
    <ul>
      <li>
        <Link activeStyle={activeLinkStyle} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link activeStyle={activeLinkStyle} to="/writing">
          Writing
        </Link>
      </li>
      <li>
        <Link activeStyle={activeLinkStyle} to="/projects">
          Projects
        </Link>
      </li>
    </ul>
    <ul className="social-icons">
      {socialIconList.map((Icon, i) => (
        <li key={i}>
          <a
            href={socialIconLinks[i]}
            target="_blank"
            rel="noopener"
            aria-label={socialIconNames[i]}
          >
            <Icon color={brandGray} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavLinks;
