import React, { useState } from 'react';
import NavButton from './NavButton';
import NavBar from './NavBar';
import '../assets/styles/components/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  
  window.addEventListener('resize', appearNavbar);

  function appearNavbar() {
    const navbar = document.querySelector('.b-navbar--container');
    if (navbar.style.display == 'none') {
      const screenWidth = window.screen.width
      if (screenWidth > 576) {
        navbar.style = 'display: flex';
      }
    }
  }

  const handleOpen = () => {
    const screenWidth = window.screen.width

    if (screenWidth <= 576) {
      const navbar = document.querySelector('.b-navbar--container');
      if (open) {
        navbar.style = 'display: none';
      } else {
        const itemsNodeList = document.querySelectorAll('.b-navbar--item');
        const items = [...itemsNodeList];

        navbar.style = 'display: flex';
        items.map(
          (item) => (item.style = 'animation: appear-text 0.4s forwards')
        );
      }
      setOpen(!open);
    }
  };

  const closeNavBar = () => {
    handleOpen()
  }

  return (
    <section className="b-header">
      <div className="b-header__color">
        <a href="#" className="b-navbar--item">
          PABLO TACHELLA
        </a>
        <div className="b-navbar">
          <NavButton open={open} handleOpen={handleOpen} />
          <NavBar closeNavBar={closeNavBar} />
        </div>
      </div>
    </section>
  );
};

export default Header;
