import React from 'react';

// class Project extends React.Component {
//   constructor() {
//     super();
//   }

// }


const Project = (props) => {
  const { siteLink, imgLink, imgAlt, title, desc } = props;
  return (
   <div className="featured-project">
    <a href={siteLink}>
      <img src={imgLink} alt={imgAlt} />
      <div className="project-desc">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </a>
  </div>
  );
};


export default Project;


Project.proptypes = {
  siteLink: React.PropTypes.string,
  imgLink: React.PropTypes.string,
  imgAlt: React.PropTypes.string,
  title: React.PropTypes.string,
  desc: React.PropTypes.string,
};
