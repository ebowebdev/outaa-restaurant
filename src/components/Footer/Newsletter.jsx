import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = ({context}) => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title={context.subtitle}/>
      <h1 className="headtext__cormorant">{context.title}</h1>
      <p className="p__opensans">{context.titleTwo}</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder={context.placeHolder} />
      <button type="button" className="custom__button">{context.button}</button>
    </div>
  </div>
);

export default Newsletter;
