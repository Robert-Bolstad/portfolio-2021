import logo from "../img/mylogo.svg";
import down from "../img/down.svg";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.location.hash = "home";
  }, []);
  return (
    <section id="home" className="home">
      <div className="intro">
        <img className="intro__logo" src={logo} alt="logo" />
        <div className="intro__info">
          <div className="intro__subheading">Hello, my name is</div>
          <h1 className="intro__heading">Robert Bolstad</h1>
          <p className="intro__paragraph">
            I specialize in front-end development, focussing on simplicity,
            responsive design and SEO-friendly code.
          </p>
          <div className="intro__link-wrapper">
            <a
              className="intro__link"
              href="https://www.linkedin.com/in/robert-bolstad-370a3bb4/"
            >
              LinkedIn
            </a>
            <a
              className="intro__link"
              href="https://www.behance.net/robertbolstad"
            >
              Behance
            </a>
            <a className="intro__link" href="https://github.com/robertbolstad">
              Github
            </a>
          </div>
          <div className="intro__btn-wrapper">
            <div className="intro__btn">
              <a className="intro__btn-link" href="#about">
                More about me
              </a>
            </div>
            <div className="intro__btn">
              <a
                className="intro__btn-link intro__btn-link--two"
                href="#contact"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
        <div className="intro__scroll">
          <a href="#portfolio">
            <img className="intro__scroll-icon" src={down} alt="down icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
