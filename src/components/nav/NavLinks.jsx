import React from 'react';
import Link from 'gatsby-link';
import galamorous from 'glamorous';

import { socialIconList } from '../socialIcons';

import medaiQueries from '../../mediaQueries';
import { brandBlack, brandGray, brandBlue } from '../../styleConstants';

const socialIconLinks = [
  'https://twitter.com/RyanWillDev',
  'https://linkedin.com/in/ryanwilldev',
  'https://github.com/RyanWillDev',
];

const NavLinks = ({ className, navIsOpen }) => (
  <div className={className}>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/journal">Journal</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
    <ul className="social-icons">
      {socialIconList.map((Icon, i) => (
        <li key={i}>
          <a href={socialIconLinks[i]} target="_blank">
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
    top: '60px',
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
        borderBottom: '2px solid transparent',
        color: brandGray,
        padding: '5px',
        '&:hover': {
          borderBottom: `2px solid ${brandBlue}`,
        },
      },
      [medaiQueries.tabletUp]: {
        justifyContent: 'space-between',
        margin: '0',
        width: '35%',
      },
      [medaiQueries.desktop]: {
        maxWidth: '325px',
      },
      '&.social-icons': {
        display: 'flex',
        margin: ' 1rem 0 0 auto',
        [medaiQueries.tabletUp]: {
          margin: '0 0 0 auto',
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
    display: navIsOpen ? 'flex' : 'none',
  })
);
