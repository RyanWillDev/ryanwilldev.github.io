import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import {
  socialIconList,
  socialIconLinks,
  socialIconNames,
} from '../components/SocialIcons';
import 'prismjs/themes/prism-tomorrow.css';
import './post.css';
import { formatDate } from '../utils';
import { brandBlack } from '../styleConstants';

export default function Template({ data }) {
  const {
    markdownRemark: post,
    site: {
      siteMetadata: { siteKeywords },
    },
  } = data;

  return (
    <div>
      <Helmet
        title={`RyanWillDev |> ${post.frontmatter.title}`}
        meta={[
          { name: 'description', content: post.frontmatter.description },
          {
            name: 'keywords',
            content: siteKeywords
              .concat(
                ', ',
                post.frontmatter.tags
                  .concat(post.frontmatter.keywords)
                  .join(', ')
              )
              .toLowerCase(),
          },
          { property: 'og:url', content: post.frontmatter.path },
          { property: 'og:description', content: post.frontmatter.description },
          { property: 'og:type', content: 'article' },
          {
            name: 'twitter:description',
            content: post.frontmatter.description,
          },
        ]}
      />
      <div className="post">
        <h1>{post.frontmatter.title}</h1>
        <div className="metadata">
          <h2>{formatDate(post.frontmatter.publicationDate)}</h2>
          <Link to="/writing">See all posts</Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="social-links">
          <ul className="social-icons">
            {socialIconList.map((Icon, i) => (
              <li key={i}>
                <a
                  href={socialIconLinks[i]}
                  target="_blank"
                  rel="noopener"
                  aria-label={socialIconNames[i]}
                >
                  <Icon color={brandBlack} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostsByPath($path: String!) {
    site {
      siteMetadata {
        siteKeywords
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        publicationDate
        title
        path
        description
        tags
        path
        keywords
      }
    }
  }
`;
