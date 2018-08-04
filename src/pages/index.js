import React, { Component } from 'react';
import Link from 'gatsby-link';
import { PostList } from '../components/PostList';

class IndexPage extends Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;
    return (
      <div>
        <h1
          style={{
            backgroundColor: 'transparent',
            fontSize: '2.5rem',
            textAlign: 'center',
          }}
        >
          RyanWill<span className="callout">Dev</span>
        </h1>
        <p style={{ fontSize: '1.25rem' }}>
          {this.props.data.site.siteMetadata.description}
        </p>
        <h2>Latest Posts</h2>
        <PostList posts={posts} />
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query SiteDescription {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___publicationDate], order: DESC }
      limit: 5
    ) {
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
