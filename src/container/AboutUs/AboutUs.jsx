import React from 'react';

import { images, context } from '../../constants';
import './AboutUs.css';

const { aboutTitle, aboutDesc, aboutBtn, historyTitle, historyDesc, historyBtn } = context.aboutUs;

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">{aboutTitle}</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">{aboutDesc}</p>
        <button type="button" className="custom__button">{aboutBtn}</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">{historyTitle}</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">{historyDesc}</p>
        <button type="button" className="custom__button">{historyBtn}</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
