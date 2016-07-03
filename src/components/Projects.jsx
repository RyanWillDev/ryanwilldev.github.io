import React from 'react';
import Nav from './Nav';
import Project from './Project';

require('../scss/projects.scss');

class Projects extends React.Component {
  constructor() {
    super();
  }
  render() {
    const projInfo = {
      calc: {
        siteLink: 'http://codepen.io/ryanwilldev/full/rxrVqQ',
        imgLink: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/315266.rxrVqQ.small.9c7c5b0a-2f0a-41e6-9882-c3c334369da4.png',
        imgAlt: 'A calculator built using Vanilla JavaScript',
        title: 'JavaScript Calculator',
        desc: 'This is a calculator built using plain ol\' JavaScript',
      },
      wiki: {
        siteLink: 'http://codepen.io/ryanwilldev/full/RayVjJ',
        imgLink: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/315266.RayVjJ.small.01c029f1-c285-482e-af14-b74b229fcedc.png',
        imgAlt: 'Wikipedia Search',
        title: 'Wikipedia Viewer',
        desc: 'Wikipedia search project from FreeCodeCamp. Returns search results from Wikipedia.',
      },
      weather: {
        siteLink: 'http://codepen.io/ryanwilldev/full/ZWJgKy',
        imgLink: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/315266.ZWJgKy.small.810c5f06-313b-4234-ae3e-85e963f2aa34.png',
        imgAlt: 'Local Weather Search',
        title: 'Local Weather',
        desc: 'Weather search from FreeCodeCamp. Uses Open Weather Map API to display weather data.',
      },
      quotes: {
        siteLink: 'http://codepen.io/ryanwilldev/full/OyKVOa',
        imgLink: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/315266.OyKVOa.small.95418491-ecfd-47a3-9228-7bdbf01811c3.png',
        imgAlt: 'Random Quote',
        title: 'Random Quote',
        desc: 'Uses the Forismatic API to display random quotes. It also allows you to share them on Twitter.',
      },
    };

    return (
      <div className="projects-container">
        <h1 className="projects-title">Recent Work</h1>
        <div id="featured-projects">
          <Project siteLink={projInfo.calc.siteLink} imgLink={projInfo.calc.imgLink}
            imgAlt={projInfo.calc.imgAlt} title={projInfo.calc.title} desc={projInfo.calc.desc}
          />
          <Project siteLink={projInfo.wiki.siteLink} imgLink={projInfo.wiki.imgLink}
            imgAlt={projInfo.wiki.imgAlt} title={projInfo.wiki.title} desc={projInfo.wiki.desc}
          />
          <Project siteLink={projInfo.weather.siteLink} imgLink={projInfo.weather.imgLink}
            imgAlt={projInfo.weather.imgAlt} title={projInfo.weather.title} desc={projInfo.weather.desc}
          />
          <Project siteLink={projInfo.quotes.siteLink} imgLink={projInfo.quotes.imgLink}
            imgAlt={projInfo.quotes.imgAlt} title={projInfo.quotes.title} desc={projInfo.quotes.desc}
          />
        </div>
        <Nav left="Contact" right="About" />
      </div>

    );
  }
}

export default Projects;
