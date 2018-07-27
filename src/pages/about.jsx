import Img from 'gatsby-image';
import React from 'react';
import glamorous from 'glamorous';
import { brandBlack } from '../styleConstants';

const Avatar = glamorous.div({
  maxHeight: 335,
  maxWidth: 350,
  heigth: '100%',
  width: '100%',
  position: 'relative',
  paddingRight: '2rem',
  marginBottom: '1rem',
  '@media screen and (max-width:950px)': {
    margin: '0 auto 2rem',
  },
});

const AlignRight = glamorous.div({
  alignSelf: 'flex-end',
  width: '60%',
  '@media screen and (max-width:950px)': {
    width: '100%',
  },
});

const AboutPage = ({ data: { avatar } }) => (
  <div>
    <h1>
      RyanWill<span className="callout">Dev</span>
    </h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Avatar>
        <Img
          title="Ryan Will"
          alt="An avatar of Ryan Will"
          sizes={avatar.sizes}
          backgroundColor="rgba(49,50,51, 0.4)"
        />
      </Avatar>
      <AlignRight>
        <p>
          Hey there, my name is Ryan Will, but I suspect you already knew that.
          I am a self-taught software developer from Tennessee. I am interested
          in many aspects of computer science including networking, web
          development, and programming language design.
        </p>
        <p>
          Being a naturally driven and curious person, I am constantly looking
          to learn new things. Just ask my wife how many times I start a
          sentence with "I listened to a podcast about...". My curiosity pushes
          me to constantly improve my craft and never leave a stone unturned
          when trying to solve a problem.
        </p>
      </AlignRight>
      <p>
        Not only do I like learning and solving problems myself, but I also
        enjoy giving back to the community by teaching others and helping them
        solve their problems. Whether through blog posts, giving talks, or
        answering questions in community Slack groups, it is very rewarding to
        be able to pass along the knowledge I have gained and the good will I
        have recieved to people that are on the path to becoming software
        developers.
      </p>
    </div>
  </div>
);

export default AboutPage;

export const pageQuery = graphql`
  query AvatarImageQuery {
    avatar: imageSharp(id: { regex: "/avatar/" }) {
      sizes(maxWidth: 350) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
