import React from "react";
import logo from "../img/mylogo.svg";
import githubLogo from "../img/github-logo.svg";
import linkedinLogo from "../img/linkedin-logo.svg";
import behanceLogo from "../img/behance-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__nav footer__section">
          <div className="footer__heading-wrap">
            <h3 className="footer__section-heading">Navigation</h3>
          </div>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#home">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#about">
                About
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contact footer__section">
          <div className="footer__heading-wrap">
            <h3 className="footer__section-heading">Contact Info</h3>
          </div>
          <ul className="footer__list">
            <li className="footer__item">
              <span>
                <i className="fas fa-phone"></i>{" "}
              </span>
              +47 98 42 96 73
            </li>
            <li className="footer__item">
              <span>
                <i className="fas fa-envelope-open"></i>{" "}
              </span>
              robert.s.bolstad@gmail.com
            </li>
            <li className="footer__item">
              <span>
                <i className="fas fa-map-marker-alt"></i>{" "}
              </span>
              Solheimsgaten 72, 5054 Bergen
            </li>
          </ul>
        </div>
        <div className="footer__socialmedia footer__section">
          <div className="footer__heading-wrap">
            <h3 className="footer__section-heading">Follow me</h3>
          </div>
          <div>
            <ul className="footer__list-social">
              <li className="footer__item">
                <a
                  className="footer__social-icons"
                  href="https://github.com/robertbolstad"
                >
                  <img src={githubLogo} alt="github icon" />
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__social-icons"
                  href="https://www.behance.net/robertbolstad"
                >
                  <img src={behanceLogo} alt="behance icon" />
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__social-icons"
                  href="https://www.linkedin.com/in/robert-bolstad-370a3bb4/"
                >
                  <img src={linkedinLogo} alt="LinkedIn icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__copyright-wrap">
            <a href="#home">
              <div className="footer__brand">
                <img className="footer__logo" src={logo} alt="logo" />
                <div className="footer__brand-text">
                  <div className="footer__brand-name">Robert Bolstad</div>
                  <div className="footer__brand-subtext">
                    FRONT-END DRVELOPER
                  </div>
                </div>
              </div>
            </a>

            <div className="footer__copyright">
              robertbolstad.com © {new Date().getFullYear()} all rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
