import React from 'react';
import Link from 'gatsby-link';

import { brandGray } from '../styleConstants';
import { formatDate } from '../utils';
import { PostList } from '../components/PostList';

const PostsByTag = ({ pathContext, data }) => {
  if (data.allMarkdownRemark == null) return null;

  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with ${tag}`;

  return (
    <div>
      <h1 style={{ marginBottom: '1rem', textTransform: 'capitalize' }}>
        {tagHeader}
      </h1>
      <Link
        style={{ display: 'inline-block', marginBottom: '2rem' }}
        to="/writing"
      >
        Back to All Posts
      </Link>
      <PostList posts={edges} />
    </div>
  );
};

export default PostsByTag;

export const pageQuery = graphql`
  query PostByTag($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true }, tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___publicationDate], order: DESC }
    ) {
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
