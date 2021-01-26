import React, {useState, useEffect} from 'react';
import '../Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.screenY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <div className={`Nav ${show && 'nav__black'}`}>
      <img
        className="nav__logoy"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
        alt="netflix logo"
      />
      <img
        className="nav__logon"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
      />
    </div>
  );
};

export default Nav;
