import React from "react";
import displayImage from "../images/me3.jpeg";
import { FaEnvelope } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SliderView from "./slider";
import "animate.css";

export default function HomePage() {
  return (
    <div className="container">
      <div className="big-image">
        <div>
          <img className="display-Image" src={displayImage} alt="" />
        </div>
      </div>
      <div className="details-container">
        <div className="fname">
          <span className="name"> Francis Albores</span>
          <span className="artificer">(Artificer 00)</span>
        </div>
        <div className="personalSummary">
          <p>
            I am a professional web developer for 13 years with vast experience
            <br />
            working with different clients accross the globe providing small to
            large
          </p>
          <p>
            <span>scale project</span>
          </p>
        </div>
        <div className="contact-container">
          <div className="contacts">
            <div className="contact-row">
              <div>
                <FaEnvelope size={18} color="#183153" />
              </div>
              <div className="textIcon">
                <span>mrthemetribe@gmail.com</span>
              </div>
            </div>
            <div className="iconWithText">
              <div>
                <FaSkype size={18} color="#183153" />
              </div>
              <div className="textIcon">
                <span>francis.albores</span>
              </div>
            </div>
          </div>
          <div className="contacts">
            <div className="contact-row">
              <div>
                <FaLinkedin size={18} color="#183153" />
              </div>
              <div className="textIcon">
                <span>francisalbores</span>
              </div>
            </div>
            <div className="githubText">
              <div>
                <FaGithubAlt size={18} color="#183153" />
              </div>
              <div className="textIcon">
                <span>franzbiely</span>
              </div>
            </div>
          </div>
        </div>
        <CarouselProvider
          naturalSlideWidth={130}
          naturalSlideHeight={60}
          totalSlides={2}
          infinite
          isPlaying
          interval={5000}
        >
          <div className="logo-slider">
            <Slider>
              <Slide>
                <div className="professional">
                  <p>
                    as a
                    <span className="textBold">
                      {" "}
                      Professional Software Engineer
                    </span>
                    <br />I have been engaged with different technologies in
                    Javascript, and PHP Stacks. Below are
                    <br />
                    <span>some of the recent stack I have used: </span>
                  </p>
                </div>
                <div className="logos-container">
                  <div className="logos-leftSide">
                    <div className="logo-row">
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/js.jpg")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/reactjs.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/vue.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/angular.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/jquery.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="logo-row2">
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/gatsby.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/nuxtjs.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/nextjs.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="logo-row3">
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/nestjs.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/nodejs.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/electron.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="logo-row4">
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/mongodb.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/mysql.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/postman.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/graphql.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/restApi.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="logos-rightSide">
                    <div className="rightSide-row1">
                      <img
                        className="rightSide-logo"
                        src={require("../images/logos/cloudfront.png")}
                        alt=""
                      />
                      <span className="logos-rightSideText">CloudFront</span>
                    </div>
                    <div className="rightSide-row1">
                      <img
                        className="rightSide-logo"
                        src={require("../images/logos/lambda.png")}
                        alt=""
                      />
                      <span className="logos-rightSideText">Lambda</span>
                    </div>
                    <div className="rightSide-row1">
                      <img
                        className="rightSide-logo"
                        src={require("../images/logos/s3.png")}
                        alt=""
                      />
                      <span className="logos-rightSideText">S3</span>
                    </div>
                    <div className="rightSide-row2">
                      <div>
                        <img
                          className="rightSide-logo2"
                          src={require("../images/logos/php.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="rightSide-logo2"
                          src={require("../images/logos/laravel.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="rightSide-logo2"
                          src={require("../images/logos/wordpress.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="rightSide-logo2"
                          src={require("../images/logos/symfony.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="rightSide-row3">
                      <div>
                        <img
                          className="agoraDocker-logo"
                          src={require("../images/logos/agora.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="agoraDocker-logo"
                          src={require("../images/logos/docker.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="proofOfWork">
                    <span className="for-more">
                      For more proof of work, <br />
                      Please refer to my GitHub account
                    </span>
                  </div>
                </div>
              </Slide>
              <Slide index={0}>
                <div className="professional">
                  <p>
                    as a
                    <span className="textBold">
                      {" "}
                      Professional Software Engineer
                    </span>
                    <br />I have been engaged with different technologies in
                    Javascript, and PHP Stacks. Below are
                    <br />
                    <span>some of the recent stack I have used: </span>
                  </p>
                </div>
                <div className="logos-container">
                  <div className="logos-leftSide">
                    <div className="logo-row">
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/js.jpg")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/reactjs.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/vue.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/angular.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/jquery.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="logo-row2">
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/gatsby.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/nuxtjs.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/nextjs.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="logo-row3">
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/nestjs.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/nodejs.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/electron.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="logo-row4">
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/mongodb.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/mysql.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/postman.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/graphql.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="language-logo"
                          src={require("../images/logos/restApi.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="logos-rightSide">
                    <div className="rightSide-row1">
                      <img
                        className="rightSide-logo"
                        src={require("../images/logos/cloudfront.png")}
                        alt=""
                      />
                      <span className="logos-rightSideText">CloudFront</span>
                    </div>
                    <div className="rightSide-row1">
                      <img
                        className="rightSide-logo"
                        src={require("../images/logos/lambda.png")}
                        alt=""
                      />
                      <span className="logos-rightSideText">Lambda</span>
                    </div>
                    <div className="rightSide-row1">
                      <img
                        className="rightSide-logo"
                        src={require("../images/logos/s3.png")}
                        alt=""
                      />
                      <span className="logos-rightSideText">S3</span>
                    </div>
                    <div className="rightSide-row2">
                      <div>
                        <img
                          className="rightSide-logo2"
                          src={require("../images/logos/php.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="rightSide-logo2"
                          src={require("../images/logos/laravel.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="rightSide-logo2"
                          src={require("../images/logos/wordpress.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="rightSide-logo2"
                          src={require("../images/logos/symfony.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="rightSide-row3">
                      <div>
                        <img
                          className="agoraDocker-logo"
                          src={require("../images/logos/agora.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="agoraDocker-logo"
                          src={require("../images/logos/docker.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="proofOfWork">
                    <span className="for-more">
                      For more proof of work, <br />
                      Please refer to my GitHub account
                    </span>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className="button-logo">
              <ButtonNext className="button-Slide-next">
                <HiOutlineChevronRight size={90} className="button-slide" />
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
        <div className="feedback-container">
          <div>
            <SliderView />
          </div>
        </div>
        <div className="testimonies">
          <span className="for-more">
            For more testimonies from other people,
            <br />
            Please refer to my LinkedIn accout
          </span>
        </div>
      </div>
    </div>
  );
}
