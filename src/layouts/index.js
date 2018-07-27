import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Header } from '../components/Header';
import './index.css';
import { brandBlack } from '../styleConstants';
import logo from '../../static/logo.png';

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.siteKeywords },
        { property: 'og:title', content: 'RyanWillDev' },
        { property: 'og:url', content: 'https://ryanwilldev.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${logo}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        {
          property: 'og:description',
          content: data.site.siteMetadata.description,
        },
        { name: 'twitter:creator', content: '@RyanWillDev' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${logo}` },
        {
          name: 'twitter:description',
          content: data.site.siteMetadata.description,
        },
      ]}
    >
      <html lang="en" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
      <link rel="icon" type="image/x-icon" href={logo} />
      <link
        rel="canonical"
        href={`https://ryanwilldev.com${location.pathname}`}
      />
    </Helmet>
    <Header />
    <div
      style={{
        color: brandBlack,
        margin: '150px auto 0',
        maxWidth: 1040,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        siteKeywords
      }
    }
  }
`;
