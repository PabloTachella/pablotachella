import React from 'react';
import '../assets/styles/components/NavButton.css';

const NavButton = ({ open, handleOpen }) => {
  return (
    <div className="b-button--container" onClick={handleOpen}>
      {open ? (
        <div className="b-button__open">
          <span className="b-button--cross">x</span>
        </div>
      ) : (
        <div className="b-button__close">
          <span className="b-button--dot b-button--dot__1"></span>
          <span className="b-button--dot b-button--dot__2"></span>
          <span className="b-button--dot b-button--dot__3"></span>
        </div>
      )}
    </div>
  );
};

export default NavButton;
