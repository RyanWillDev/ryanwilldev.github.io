import React from 'react';
import Link from 'gatsby-link';

import { PostList } from '../components/PostList';

const Writing = props => {
  const {
    data: {
      allMarkdownRemark: { edges: posts },
    },
  } = props;

  return (
    <div>
      <h1>
        RyanWill<span className="callout">Write</span>
      </h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Writing;

export const pageQuery = graphql`
  query AllPosts {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___publicationDate], order: DESC }
    ) {
      edges {
        node {
          id
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
