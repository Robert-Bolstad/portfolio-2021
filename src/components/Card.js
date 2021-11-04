const Card = ({ img, date, name, description, technologies, link }) => {
  const handleFocus = (e) => {
    const overlay =
      e.target.parentElement.parentElement.parentElement.parentElement;

    overlay.style.transform = "scale(1)";
  };

  const handleFocusOut = (e) => {
    const overlay =
      e.target.parentElement.parentElement.parentElement.parentElement;

    overlay.style.transform = null;
  };
  return (
    <div className="card card--padding-right">
      <img className="card__image" src={img} alt="project" />
      <div className="card__image--overlay">
        <div className="card__date">{date}</div>
        <div className="card__info">
          <div className="card__info--wrapper">
            <h3 className="card__heading">{name}</h3>
            <p className="card__description">{description}</p>
            <p className="card__description">{technologies}</p>
            <div className="card__btn-wrapper">
              <a
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleFocusOut(e)}
                className="card__view-project"
                target="_blank"
                rel="noreferrer"
                href={link}
              >
                View Project
                <span className="card__view-project--color"> /</span>&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
