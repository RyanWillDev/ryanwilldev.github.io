import Img from 'gatsby-image';
import React from 'react';
import glamorous from 'glamorous';

import { brandGray } from '../styleConstants';

const Heading = glamorous.h2({
  backgroundColor: brandGray,
  marginBottom: 40,
  padding: '0.5rem 2rem 0.5rem 0.5rem',
});

const ProjectContainer = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const ProjectList = glamorous.ul({
  marginBottom: 88,
});

const ProjectListItem = glamorous.li({
  marginBottom: '2rem',
  paddingBottom: '1.5rem',
});

const ProjectInfo = glamorous.div({
  width: '50%',
  '@media screen and (max-width: 780px)': { width: '100%' },
});

const ProjectTitle = glamorous.h3({ marginTop: '1.5rem' });

const Projects = ({ data: { brewRank, boroDev } }) => {
  return (
    <div>
      <Heading>Talks</Heading>
      <ProjectList>
        <ProjectListItem>
          <ProjectContainer>
            <a href="https://www.meetup.com/BoroDev/events/246821738/">
              <Img
                alt="Ryan Will speaking about progressive web apps at Boro dev meetup"
                resolutions={boroDev.resolutions}
                title="ryan will speaking about progressive web apps at Boro dev meetup"
              />
            </a>
            <ProjectInfo>
              <ProjectTitle>
                <a href="https://www.meetup.com/BoroDev/events/246821738/">
                  'BoroDev Meetup
                </a>
              </ProjectTitle>
              <p>
                A talk on Progressive Web Apps given at the 'BoroDev meet up.
              </p>
            </ProjectInfo>
          </ProjectContainer>
        </ProjectListItem>
      </ProjectList>

      <Heading>Work</Heading>
      <ProjectList>
        <ProjectListItem>
          <ProjectContainer>
            <a href="http://ryanwilldev.com/brew-rank/#/">
              <Img
                resolutions={brewRank.resolutions}
                alt="brewrank screenshot"
                title="screen shot of brew rank application's dashboard"
              />
            </a>
            <ProjectInfo>
              <ProjectTitle>
                <a href="http://ryanwilldev.com/brew-rank/#/">BrewRank</a>
              </ProjectTitle>
              <p>
                An app for brew pubs to track the user ratings of their brews.
              </p>
            </ProjectInfo>
          </ProjectContainer>
        </ProjectListItem>
      </ProjectList>
    </div>
  );
};

export default Projects;

export const pageQuery = graphql`
  query ProjectImagesQuery {
    brewRank: imageSharp(id: { regex: "/BrewRank/" }) {
      resolutions(width: 350) {
        ...GatsbyImageSharpResolutions
      }
    }
    boroDev: imageSharp(id: { regex: "/boro_dev_pwa/" }) {
      resolutions(width: 350) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
