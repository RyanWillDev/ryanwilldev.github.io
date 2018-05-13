import React from 'react';
import Link from 'gatsby-link';
import galamorous from 'glamorous';

import { socialIconList } from '../socialIcons';

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
  <div className={className}>
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

export default galamorous(NavLinks)(
  {
    backgroundColor: brandBlack,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontSize: '1.5rem',
    padding: '.75rem',
    position: 'absolute',
    width: '100%',
    [medaiQueries.tabletUp]: {
      flexWrap: 'nowrap',
    },
    '& ul': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-around',
      listStyle: 'none',
      margin: '0 auto',
      width: '100%',
      '& a': {
        paddingBottom: '5px',
        color: brandGray,
      },
      [medaiQueries.tabletUp]: {
        justifyContent: 'space-between',
        marginLeft: '8px',
        maxWidth: '60%',
      },
      [medaiQueries.desktop]: {
        maxWidth: '40%',
      },
      [medaiQueries.xsmall]: {
        fontSize: '1.25rem',
      },
      '&.social-icons': {
        display: 'flex',
        margin: ' 1rem 0 0 auto',
        [medaiQueries.tabletUp]: {
          margin: '0 16px 0 auto',
          maxWidth: '25%',
        },
        '& a': {
          paddingBottom: '3px',
        },
        '& li': {
          height: '1.5rem',
          width: '1.5rem',
        },
      },
    },
  },
  ({ navIsOpen }) => ({
    top: navIsOpen ? '60px' : '-600px',
  })
);
