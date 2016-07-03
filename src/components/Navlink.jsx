import React from 'react';
import { Link } from 'react-router';


const NavLink = (props) => {
  const floatClass = ` float float-${props.direction}`;
  const path = `/${props.componentName.toLowerCase()}`;
  const arrowClass = `fa fa-chevron-${props.direction}`;

  function createMarkup() {
    if (props.direction === 'left') {
      return { __html: `<i class="${arrowClass}"></i>
      ${props.componentName}` };
    }

    if (props.direction === 'right') {
      return { __html: `${props.componentName}
      <i class="${arrowClass}"></i>` };
    }
  }

  return (
    <div className={floatClass}>
      <Link to={path} dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

NavLink.propTypes = {
  direction: React.PropTypes.string,
  componentName: React.PropTypes.string,
};

export default NavLink;
