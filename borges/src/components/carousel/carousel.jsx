import React from "react";
import "./carousel.css";
const slides = [
  {
    eachSlide: "url(https://dummyimage.com/1980x720)",
  },
  {
    eachSlide: "",
  },
  {
    eachSlide: "",
  },
];
console.log(slides);

const Slider = () => {
  const [active, setActive] = React.useState(0);
  const max = slides.length;

  const intervalBetweenSlides = () =>
    setActive(active === max - 1 ? 0 : active + 1);

  React.useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 5000);
    return () => clearInterval(interval);
  });

  const nextOne = () =>
    active === max - 1 ? setActive(0) : setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = (value) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
    slides.map((item, index) => (
      <div
        className="each-slide"
        key={index}
        style={{ backgroundImage: item.eachSlide }}
      >
        {" "}
        <div className="container px-5 py-12 mx-auto my-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Kickstarter Actually Pinterest Brunch Bitters Occupy
          </h2>
        </div>
      </div>
    ));

  const renderDots = () =>
    slides.map((
      silde,
      index // check index
    ) => (
      <li className={isActive(index) + " dots"} key={index}>
        <button onClick={() => setActive(index)}>
          <span>&#9679;</span>
        </button>
      </li>
    ));
  const renderArrows = () => (
    <React.Fragment>
      <button type="button" className="arrows prev" onClick={() => prevOne()}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button type="button" className="arrows next" onClick={() => nextOne()}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </React.Fragment>
  );

  return (
    <section className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
      <ul className="dots-container">{renderDots()}</ul>
    </section>
  );
};

export default Slider;
