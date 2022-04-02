import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images, context } from '../../constants';
import './Footer.css';

const {title, phone, direction, workTitle, open, myWord, right} = context.footer.contact

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter context={context.footer.newsLetter} />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">{title}</h1>
        <p className="p__opensans">{direction}</p>
        <p className="p__opensans">{phone}</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.outaaLogo} alt="footer_logo" />
        <p className="p__opensans">{myWord}</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="footer_spoon" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">{workTitle}</h1>
        {open.map(obj => (
          <>
          <p className="p__opensans">{obj.day}:</p>
          <p className="p__opensans">{obj.hours}</p>
          </>
        ))}
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{right}</p>
    </div>

  </div>
);

export default Footer;
