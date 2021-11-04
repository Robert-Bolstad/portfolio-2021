import React from "react";
import javascripticon from "../img/javascripticon.svg";
import html5icon from "../img/html5icon.svg";
import cssicon from "../img/cssicon.svg";

const About = () => {
  const getAge = () => {
    const today = new Date();
    const birthday = new Date("1994-01-31");
    let years = today.getFullYear() - birthday.getFullYear();
    if (
      today.getMonth() < birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() &&
        today.getDate() < birthday.getDate())
    ) {
      years--;
    }
    return years;
  };
  return (
    <section id="about" className="about">
      <div>
        <h2 className="about__heading">
          About /<span className="about__heading--color">&#62;</span>
        </h2>
        <div className="about__wrapper">
          <div className="about__topic">
            <h3 className="about__subheading">About Me</h3>
            <p className="about__paragraph">
              Hello, my name is Robert Bolstad. I'm a {getAge()}
              -year-old Norwegian with a background as an electrician. I'm
              currently in bergen studying Front end development at Noroff
              school of technology and digital media.
            </p>
          </div>
          <div className="about__topic">
            <h3 className="about__subheading">About Website</h3>
            <p className="about__paragraph">
              This website is a responsive website hand-crafted from the ground
              up, built using React.js and Sass. It will serve as my portfolio,
              where I'll showcase some of my work from various assignments and
              project I've completed throughout my studies at Noroff.
            </p>
          </div>
          <div className="about__topic">
            <h3 className="about__subheading">My Skills</h3>
            <p className="about__paragraph">
              I specialize in front-end development, focussing on simplicity,
              responsive design and functionality. Throughout my studies at
              Noroff - School of technology and digital media, I've learned
              several Technologies and Languages. My primary languages are
              HTML5, CSS3 and Javascript. I'm also familiar with technologies
              and frameworks such as{" "}
              <span className="about__paragraph--highlight">React/Next.js</span>
              {", "}
              Bootstrap, BEM, Sass, WordPress, node.js, Stapi and Heroku. My
              level of skill with each of these varies. Please have a look at my
              portfolio to get a better evaluation of my abilities.
            </p>
          </div>
          <div className="about__topic">
            <h3 className="about__subheading">Primary Languages I Use</h3>
            <div className="about__languages">
              <div>
                <img
                  className="about__language-icon"
                  src={html5icon}
                  alt="html5 icon"
                />
              </div>
              <div className="about__lanuage-wrapper">
                <img
                  className="about__language-icon"
                  src={javascripticon}
                  alt="html5 icon"
                />
              </div>
              <div>
                <img
                  className="about__language-icon"
                  src={cssicon}
                  alt="html5 icon"
                />
              </div>
            </div>
          </div>
        </div>
        <a className="about__download" href="/images/noFileYet.jpg" download>
          <i className="about__download-icon fas fa-file-alt"></i> Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
