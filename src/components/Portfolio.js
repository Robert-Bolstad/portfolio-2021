import Card from "./Card";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import { useState } from "react";

const Portfolio = () => {
  const [more, setMore] = useState(false);
  return (
    <section id="portfolio" className="portfolio">
      <div>
        <div className="portfolio__intro">
          <h2 className="portfolio__heading">
            Portfolio /<span className="portfolio__heading--color">&#62;</span>
          </h2>
        </div>
        <div className="portfolio__container">
          <Card
            img={img1}
            date="2020"
            name="Launchprep"
            description="Website about SpaceX and their upcoming launches"
            technologies="Next.js, Sass"
            link="https://project-exam-1-spacex.vercel.app/"
          />
          <Card
            img={img2}
            date="2021"
            name="Lampland"
            description="Ecommerce website about lamps"
            technologies="HTML, CSS, Sass, Javascript, Strapi, Heroku"
            link="http://lampland.robertbolstad.com/"
          />
          <Card
            img={img3}
            date="2019"
            name="Numety"
            description="Website for Edyplaytion about their upcoming game numetry"
            technologies="HTML, CSS"
            link="http://robertbolstad.com/assignments/semester_project/numetry/homepage.html"
          />
          <Card
            img={img5}
            date="2021"
            name="Holidaze"
            description="Booking website in bergen"
            technologies="Next.js, Strapi, Heroku"
            link="https://project-exam-2.vercel.app/"
          />
          {more ? (
            <>
              <Card
                img={img4}
                date="2020"
                name="Flower Power"
                description="Website made with WordPress"
                technologies="WordPress"
                link="http://www.flower-power.robertbolstad.com/"
              />
              <Card
                img={img6}
                date="2020"
                name="Portfolio"
                description="Old portfolio website"
                technologies="HTML, CSS, Javascript"
                link="http://portfolio.robertbolstad.com/"
              />
            </>
          ) : (
            <button
              type="button"
              onClick={() => setMore(true)}
              className="portfolio__btn"
            >
              Show More <span className="portfolio__btn--color">/</span>&gt;
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
