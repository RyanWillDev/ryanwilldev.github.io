import React from 'react';
import Helmet from 'react-helmet';
require('prismjs/themes/prism-tomorrow.css');

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div>
        <h1 style={{ textTransform: 'capitalize' }}>
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        publicationDate
        title
        path
      }
    }
  }
`;
