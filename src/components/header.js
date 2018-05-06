import React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';

import Nav from './nav/Nav';

import { brandBlack, brandGray } from '../styleConstants';

const HeaderContainer = glamorous.header({
  background: brandBlack,
  marginBottom: '1.45rem',
  color: brandGray,
  maxHeight: '80px',
  padding: '8px 0',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 100,
});

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Nav />
  </HeaderContainer>
);

export default Header;
