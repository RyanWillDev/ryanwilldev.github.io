import Img from 'gatsby-image';
import React from 'react';
import glamorous from 'glamorous';

import BrewRank from '../../static/BrewRank.png';
import BoroDevPWA from '../../static/boro_dev_pwa.jpg';
import { brandBlack } from '../styleConstants';
import mediaQueries from '../mediaQueries';

const ProjectImage = glamorous.div({
  maxWidth: '350px',
  [mediaQueries.xsmall]: {
    maxWidth: '275px',
  },
});

const ProjectContainer = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const ProjectListItem = glamorous.li({
  borderBottom: `1px solid ${brandBlack}`,
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
      <h2>Talks</h2>
      <ul>
        <ProjectListItem>
          <ProjectContainer>
            <a href="https://www.meetup.com/BoroDev/events/246821738/">
              <ProjectImage alt="ryan will speaking about progressive web apps at Boro dev meetup">
                <Img
                  alt="Ryan Will speaking about progressive web apps at Boro dev meetup"
                  resolutions={boroDev.resolutions}
                  title="ryan will speaking about progressive web apps at Boro dev meetup"
                />
              </ProjectImage>
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
      </ul>

      <h2>Work</h2>
      <ul>
        <ProjectListItem>
          <ProjectContainer>
            <a href="http://ryanwilldev.com/brew-rank/#/">
              <ProjectImage>
                <Img
                  resolutions={brewRank.resolutions}
                  alt="brewrank screenshot"
                  title="screen shot of brew rank application's dashboard"
                />
              </ProjectImage>
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
      </ul>
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
