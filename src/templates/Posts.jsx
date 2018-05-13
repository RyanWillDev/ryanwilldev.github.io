import React from 'react';
import Helmet from 'react-helmet';

import 'prismjs/themes/prism-tomorrow.css';
import './post.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet
        title={`RyanWillDev |> ${post.frontmatter.title}`}
        meta={[
          { name: 'description', content: post.frontmatter.description },
          {
            name: 'keywords',
            content: post.frontmatter.tags.join(' ').toLowerCase(),
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
        description
        tags
        path
      }
    }
  }
`;
