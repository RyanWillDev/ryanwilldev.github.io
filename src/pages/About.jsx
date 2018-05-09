import React from 'react';
import glamorous from 'glamorous';

import avatar from '../../static/avatar.png';
import { brandGray, brandBlue, brandBlack } from '../styleConstants';

const AboutPage = ({ className }) => (
  <div>
    <h1>
      RyanWill<span className="callout">Dev</span>
    </h1>
    <img
      style={{ maxHeight: '335px', paddingRight: '2rem', marginBottom: 0 }}
      src={avatar}
    />
    <p style={{ display: 'inline' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi sunt
      delectus, optio culpa praesentium sit perferendis quia placeat. Quae velit
      iusto quas eum, necessitatibus ipsum recusandae rerum distinctio excepturi
      laudantium maxime? Illo ab ipsam earum tempora corporis nobis illum
      eveniet, rerum assumenda voluptatem, ex iusto at temporibus commodi sit.
    </p>
  </div>
);

export default AboutPage;
