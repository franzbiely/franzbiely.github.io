import React from "react";
import junrillGalvez from "../images/goku.jpg";
import CocoLi from "../images/Coco.png";
import Schilt from "../images/Schilt.jpg";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function SliderView() {
  return (
    <CarouselProvider
      naturalSlideWidth={130}
      naturalSlideHeight={40}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <div className="comment-section">
            <img className="imageInComment" src={junrillGalvez} alt="" />
            <span className="commentText">
              <span className="cname">Junrill Galvez</span>
              <span className="comment-date"> • 1st</span>
              <br />
              Senior Software Engineer / DevOps Engineer
              <br />
              <span className="comment-date">
                June 10, 2021, Junrill manage Francis directly
              </span>
              <br />
              One of the best Engineer I've work with. Knowledge and skills are
              superb with excellent eye on <br />
              quality Software craftsmanship.
            </span>
          </div>
        </Slide>
        <Slide index={0}>
          <div className="comment-section">
            <img className="imageInComment" src={CocoLi} alt="" />
            <span className="commentText">
              <span className="cname">Coco Li </span>
              <span className="comment-date"> • 1st</span>
              <br />
              Full Stacks Development Consultant at Cevo
              <br />
              <span className="comment-date">
                February 18, 2021, Coco worked with Francis on the same team
              </span>
              <br />
              Francis is a really reliable and excellent colleague. As he's
              highly skilled in web development and full
              <br /> stack development, he always loves to share knowledge and
              help. I'm very lucky working with Francis.
            </span>
          </div>
        </Slide>
        <Slide index={0}>
          <div className="comment-section">
            <img className="imageInComment" src={Schilt} alt="" />
            <span className="commentText">
              <span className="cname">Robert Schilt</span>
              <span className="comment-date"> • 1st</span>
              <br />
              Solutions Architect
              <br />
              <span className="comment-date">
                December 28, 2017, Robert manage Francis directly
              </span>
              <br />I have worked with Francis on a number of projects spread
              over a number of years and can highly
              <br /> recommend his Web Dev efforts. Francis is a team player,
              technically very competent and is able to communicate fluently in
              english.
            </span>
          </div>
        </Slide>
      </Slider>
      <div className="buttonss">
        <div className="back-btn">
          <ButtonBack className="button-back">
            <FiChevronLeft size={90} className="arrow-left" />
          </ButtonBack>
        </div>
        <div className="next-btn">
          <ButtonNext size={90} className="button-next">
            <FiChevronRight className="arrow-right" />
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
}
