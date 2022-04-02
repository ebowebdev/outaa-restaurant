import React from 'react';

import { SubHeading } from '../../components';
import { images, context } from '../../constants';
import './Header.css';

const { title, subtitle, description, button } = context.header
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title={subtitle} />
      <h1 className="app__header-h1">{title}</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>{description}</p>
      <button type="button" className="custom__button">{button}</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.outaaImgSvg} alt="header_img" />
    </div>
  </div>
);

export default Header;
