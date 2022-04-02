import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { images, context } from '../../constants';
import './Navbar.css';

const {list, logIn, register, book} = context.navbar

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.outaaLogo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        {list.map(item => 
        <li className="p__opensans"><a href={`#${item}`}>{`${item}`}</a></li> )}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">{logIn}/{register}</a>
        <div />
        <a href="/" className="p__opensans">{book}</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            {list.map(item => 
              <li><a href={`#${item}`} onClick={() => setToggleMenu(false)}>{`${item}`}</a></li> )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
