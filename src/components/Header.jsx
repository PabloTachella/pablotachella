import React, { useState } from 'react';
import NavButton from './NavButton';
import NavBar from './NavBar';
import '../assets/styles/components/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    const navbar = document.querySelector('.b-navbar--container');
    const itemsNodeList = document.querySelectorAll('.b-navbar--item');
    const items = [...itemsNodeList];
    if (open) {
      navbar.style = 'display: none';
    } else {
      navbar.style = 'display: flex';
      items.map(
        (item) => (item.style = 'animation: appear-text 0.4s forwards')
      );
    }

    setOpen(!open);
  };

  return (
    <section className="b-header">
      <div className="b-header__color">
        <a href="#" className="b-navbar--item">
          PABLO TACHELLA
        </a>
        <div className="b-navbar">
          <NavButton open={open} handleOpen={handleOpen} />
          <NavBar />
        </div>
      </div>
    </section>
  );
};

export default Header;
