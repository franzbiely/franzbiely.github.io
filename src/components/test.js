import React from "react";
import junrillGalvez from "../images/goku.jpg";
import CocoLi from "../images/Coco.png";
import Schilt from "../images/Schilt.jpg";

export default function Slider() {
  const slides = [
    {
      eachSlide: "url(https://unsplash.it/1900/1024/?image=291)",
    },
    {
      eachSlide: "url(https://unsplash.it/1900/1024/?image=786)",
    },
    {
      eachSlide: "url(https://unsplash.it/1900/1024/?image=768)",
    },
    {
      eachSlide: "url(https://unsplash.it/1900/1024/?image=726)",
    },
    {
      eachSlide: "url(https://unsplash.it/1900/1024/?image=821)",
    },
  ];

  const [active, setActive] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(0);
  const max = slides.length;

  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1);

  React.useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  });

  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

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
      ></div>
    ));

  const renderArrows = () => (
    <React.Fragment>
      <button type="button" className="arrows-prev" onClick={() => prevOne()}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button type="button" className="arrows-next" onClick={() => nextOne()}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </React.Fragment>
  );

  return (
    <div>
      <section className="slider">
        <div className="wrapper" style={setSliderStyles()}>
          {renderSlides()}
        </div>
        {renderArrows()}
      </section>
      <div className="feedback-container">
        <div className="comment-section">
          <img className="imageInComment" src={junrillGalvez} alt="" />
          <text className="commentText">
            <text className="cname">Junrill Galvez</text>
            <text className="comment-date"> • 1st</text>
            <br />
            Senior Software Engineer / DevOps Engineer
            <br />
            <text className="comment-date">
              June 10, 2021, Junrill manage Francis directly
            </text>
            <br />
            One of the best Engineer I've work with. Knowledge and skills are
            superb with excellent eye on quality
            <br /> Software craftsmanship.
          </text>
        </div>

        <div className="comment-section">
          <img className="imageInComment" src={CocoLi} alt="" />
          <text className="commentText">
            <text className="cname">Coco Li </text>
            <text className="comment-date"> • 1st</text>
            <br />
            Full Stacks Development Consultant at Cevo
            <br />
            <text className="comment-date">
              February 18, 2021, Coco worked with Francis on the same team
            </text>
            <br />
            Francis is a really reliable and excellent <br />
            colleague. As he's highly skilled in web development and full stack
            development, he always loves to share knowledge and help. I'm very
            lucky working with Francis.
          </text>
        </div>

        <div className="comment-section">
          <img className="imageInComment" src={Schilt} alt="" />
          <text className="commentText">
            <text className="cname">Robert Schilt</text>
            <text className="comment-date"> • 1st</text>
            <br />
            Solutions Architect
            <br />
            <text className="comment-date">
              December 28, 2017, Robert manage Francis directly
            </text>
            <br />
            I have worked with Francis on a number of projects spread over a
            number of years and can highly recommend his Web Dev efforts.
            <br />
            Francis is a team player, technically very competent and is able to
            communicate fluently in english.
          </text>
        </div>
      </div>
    </div>
  );
}
