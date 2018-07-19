import React from 'react';
import Link from 'gatsby-link';

import { brandGray } from '../styleConstants';
import { formatDate } from '../utils';

export const PostList = ({ posts }) => (
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
              textTransform: 'capitalize',
            }}
          >
            {node.frontmatter.title}
          </h2>
        </Link>
        <span style={{ marginLeft: '1rem' }}>
          {formatDate(node.frontmatter.publicationDate)}
        </span>

        <p style={{ margin: '.5rem 0 1rem' }}>{node.frontmatter.description}</p>
        <div>
          <span>Tags:</span>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: '.5rem',
              width: '100%',
            }}
          >
            {node.frontmatter.tags.map((tag, i) => (
              <li key={i}>
                <Link
                  style={{ marginRight: '1rem' }}
                  to={`/tags/${tag
                    .toLowerCase()
                    .split(' ')
                    .join('-')}`}
                >
                  <span style={{ textTransform: 'capitalize' }}>{tag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>
);
