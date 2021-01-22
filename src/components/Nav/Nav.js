import React, { useState } from "react";
import Content from "../../content";
import styles from '../../css/Nav/Nav.module.css';
import {Link} from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { slide as Menu } from 'react-burger-menu';

function Nav() {

  const [navScroll, setNavScroll] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  window.onscroll = () => {
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setNavScroll("scroll")
            : setNavScroll("");
  }

  let navItems = (
    <>
      <div className={styles.navLinks}>
        {Content.navItems.map((navItem, index)=>{
          return navItem.internal ? 
          (<Link onClick={()=>{setIsMenuOpen(false)}} className={styles.navItem} index={index} key={index} to={navItem.link}>{navItem.text}</Link>) :
          (<a onClick={()=>{setIsMenuOpen(false)}} className={styles.navItem} index={index} key={index} href={navItem.link}>{navItem.text}</a>);
        })}
      </div>
      <SocialLinks/>
    </>
  );

  return (
    <>
      <div className={`${styles.nav} ${styles[navScroll]}`}>{navItems}</div>
      <div className={styles.mobileNav}>
        <Menu isOpen={isMenuOpen} onStateChange={ (state) => {setIsMenuOpen(state.isOpen)}  } width={ '100%' } right noOverlay>
          {navItems}
        </Menu>
      </div>
    </>
  );
}

export default Nav;
