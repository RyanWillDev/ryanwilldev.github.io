import React from 'react';
import Link from 'gatsby-link';

import { formatDate, sortByDate } from '../utils';
import { brandGray } from '../styleConstants';

const JournalPage = props => {
  const {
    data: {
      allMarkdownRemark: { edges: posts },
    },
  } = props;

  posts.sort(sortByDate);

  return (
    <div>
      <h1>
        RyanWill<span className="callout">Write</span>
      </h1>
      <ul>
        {posts.map(({ node }) => (
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
                to={`/tags/${tag
                  .toLowerCase()
                  .split(' ')
                  .join('-')}`}
              >
                <span
                  key={i}
                  style={{ marginRight: '.5rem', textTransform: 'capitalize' }}
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

export default JournalPage;

export const pageQuery = graphql`
  query AllPosts {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          id
          headings {
            depth
            value
          }
          frontmatter {
            title
            description
            publicationDate
            tags
            path
          }
        }
      }
    }
  }
`;
