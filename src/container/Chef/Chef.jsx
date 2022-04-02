import React from 'react';

import { SubHeading } from '../../components';
import { images, context } from '../../constants';
import './Chef.css';

const { title, subtitle, name, role, word, quote} = context.chef;

const Chef = () => (
  <div className="app__bg-black app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={subtitle} />
      <h1 className="headtext__cormorant">{title}</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">{quote}</p>
        </div>
        <p className="p__opensans">{word}</p>
      </div>

      <div className="app__chef-sign">
        <p>{name}</p>
        <p className="p__opensans">{role}</p>
        <img src={images.firma} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
