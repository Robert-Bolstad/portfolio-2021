import React from "react";
import logo from "../img/mylogo.svg";

const Nav = () => {
  const clickBurger = () => {
    const burgerIcon = document.querySelector(".nav__burger-icon");
    const list = document.querySelector(".nav__list");

    burgerIcon.classList.toggle("fa-times");
    list.classList.toggle("nav__list-open");
  };

  const scroll = () => {
    const header = document.querySelector(".header");
    if (
      document.body.scrollTop >= 1 ||
      document.documentElement.scrollTop >= 1
    ) {
      header.style.backgroundColor = "black";
    }

    window.onscroll = function () {
      if (
        document.body.scrollTop >= 1 ||
        document.documentElement.scrollTop >= 1
      ) {
        header.style.transition = " 500ms ease-in";
        header.style.backgroundColor = "black";
      } else {
        header.style.transition = " 500ms ease-out";
        header.style.backgroundColor = "transparent";
      }
    };
  };

  window.addEventListener("scroll", scroll);
  return (
    <header className="header">
      {scroll()}
      <nav className="nav">
        <div className="nav__wrapper">
          <a href="#home">
            <div className="nav__brand">
              <img className="nav__logo" src={logo} alt="logo" />
              <div className="nav__brand-text">
                <div className="nav__brand-name">Robert Bolstad</div>
                <div className="nav__brand-subtext">FRONT-END DRVELOPER</div>
              </div>
            </div>
          </a>

          <div className="nav__burger">
            <button
              type="button"
              onClick={clickBurger}
              className="nav__burger-inner"
            >
              <i className="nav__burger-icon fas fa-bars"></i>
            </button>
          </div>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <a
              onClick={clickBurger}
              className="nav__link nav__home"
              href="#home"
            >
              HOME
            </a>
          </li>
          <li className="nav__item">
            <a onClick={clickBurger} className="nav__link" href="#portfolio">
              PORTFOLIO
            </a>
          </li>
          <li className="nav__item">
            <a onClick={clickBurger} className="nav__link" href="#about">
              ABOUT
            </a>
          </li>
          <li className="nav__item">
            <a onClick={clickBurger} className="nav__link" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
