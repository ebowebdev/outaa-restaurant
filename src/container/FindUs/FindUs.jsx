import React from 'react';

import { SubHeading } from '../../components';
import { images, context } from '../../constants';

const { title, subtitle, direction, open, openTitle, button} = context.findUs;

const FindUs = () => (
  <div className="app__bg-black app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title={subtitle} />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>{title}</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">{direction}</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>{openTitle}</p>
        {open.map(item => <p className="p__opensans">{item}</p>)}
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>{button}</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
