/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { Navigation, LanguageSwitcher } from '..';
// import Contact from '../Contact';
import Menu from './Menu';

const Header = ({ menu, altLangs, currentLang }) => {
  const [isMenuDisplayed, setMenuDisplayed] = useState(false);
  const [isLogoDisplayed, setLogoDisplayed] = useState(false);
  const logo = require('public/images/warp-logo-viseo.svg');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setLogoDisplayed(true);
    } else {
      setLogoDisplayed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <Menu
        isMenuDisplayed={isMenuDisplayed}
        setMenuDisplayed={setMenuDisplayed}
      />
      <Navigation
        menu={menu}
        isMenuDisplayed={isMenuDisplayed}
        setMenuDisplayed={setMenuDisplayed}
      />
      <header className="wrapper grid sp-header-wrapper" style={{ paddingRight: '3rem' }}>
        <ul className="languages">
          <LanguageSwitcher
            altLangs={altLangs}
            currentLang={currentLang}
            setMenuDisplayed={setMenuDisplayed}
          />
        </ul>
        <div className="home-menu">
          <NextLink href="/" passHref>
            <a>
              <p className={isLogoDisplayed ? 'off' : 'on'}>
                Warp Japan <span>Tokyo Digital Agency</span>
              </p>

              <img
                src={logo}
                alt="WarpJapan K.K."
                className={isLogoDisplayed ? 'on' : 'off'}
              />
            </a>
          </NextLink>
        </div>
        <div className="shopify-btn">
          <NextLink href={{ pathname: '/shopify' }} alt="">Shopifyで始めよう</NextLink>
        </div>
      </header>
      {/* <Contact /> */}
    </>
  );
};

export default Header;
