import React from 'react';
import Link from 'gatsby-link';

import { brandGray } from '../styleConstants';
import { formatDate } from '../utils';

const PostsByTag = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with ${tag}`;

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>{tagHeader}</h1>
      <Link to="/writing">All Posts</Link>
      <ul style={{ marginTop: '2rem' }}>
        {edges.map(({ node }) => (
          <li
            key={node.id}
            style={{
              borderBottom: `1px solid ${brandGray}`,
              margin: '0 1rem 1rem 0',
              paddingBottom: '1rem',
            }}
          >
            <Link to={node.frontmatter.path}>
              <h2
                style={{
                  display: 'inline',
                  marginRight: '1rem',
                  textTransform: 'capitalize',
                }}
              >
                {node.frontmatter.title}
              </h2>
            </Link>
            <span>{formatDate(node.frontmatter.publicationDate)}</span>
            <p style={{ fontSize: '.9rem', margin: '.5rem 0 1rem' }}>
              {node.frontmatter.description}
            </p>
            {node.frontmatter.tags.map((tag, i) => (
              <Link
                key={i}
                to={`/tags/${tag
                  .toLowerCase()
                  .split(' ')
                  .join('-')}`}
              >
                <span
                  style={{
                    marginRight: '.5rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {tag}
                </span>
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsByTag;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            path
            tags
            publicationDate
          }
        }
      }
    }
  }
`;
