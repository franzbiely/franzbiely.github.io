/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
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
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SliderView from "./slider";
import "animate.css";
import BounceLoader from "react-spinners/BounceLoader";
export default function HomePage() {
  const imageList1 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <img
                src={require("../images/gif/Js.gif")}
                alt=""
                className="tooltipContent"
              />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/js.jpg"),
      redirect: "https://franzbiely.github.io/demo/bubble/dist/",
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/reactjs.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/vue.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/angular.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/jquery.png"),
    },
  ];
  const imageList2 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/gatsby.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/nuxtjs.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/nextjs.png"),
    },
  ];
  const imageList3 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/nestjs.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/nodejs.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/electron.png"),
    },
  ];
  const imageList4 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/mongodb.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/mysql.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/postman.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/graphql.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/restApi.png"),
    },
  ];
  const imageListRight2 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/php.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/laravel.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/wordpress.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/symfony.png"),
    },
  ];
  const imageListRight3 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/agora.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/docker.png"),
    },
  ];
  const imageListRight1 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/cloudfront.png"),
      iconText: "CloudFront",
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/lambda.png"),
      iconText: "Lambda",
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <BounceLoader color="#36d7b7" />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/s3.png"),
      iconText: "S3",
    },
  ];

  // ----------------Mobile---------------//
  const mobileList1 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <img
                src={require("../images/gif/Js.gif")}
                alt=""
                className="tooltipContent"
              />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/react-native.png"),
      // redirect: "https://franzbiely.github.io/demo/bubble/dist/",
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <img
                src={require("../images/gif/Js.gif")}
                alt=""
                className="tooltipContent"
              />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/appcenter.png"),
      // redirect: "https://franzbiely.github.io/demo/bubble/dist/",
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <img
                src={require("../images/gif/Js.gif")}
                alt=""
                className="tooltipContent"
              />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/expo.png"),
      // redirect: "https://franzbiely.github.io/demo/bubble/dist/",
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <img
                src={require("../images/gif/Js.gif")}
                alt=""
                className="tooltipContent"
              />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/firebase.png"),
      // redirect: "https://franzbiely.github.io/demo/bubble/dist/",
    },
  ];

  // ----------------IOT---------------//
  const IOTList1 = [
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <img
                // src={require("../images/gif/Js.gif")}
                alt=""
                className="tooltipContent"
              />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/arduino.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <img
                // src={require("../images/gif/Js.gif")}
                alt=""
                className="tooltipContent"
              />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/tinkercad.png"),
    },
    {
      content: (
        <>
          <Tooltip title="Top Tooltip" position="top">
            <div>
              <img
                // src={require("../images/gif/Js.gif")}
                alt=""
                className="tooltipContent"
              />
            </div>
          </Tooltip>
        </>
      ),
      src: require("../images/logos/sketchup.png"),
    },
  ];

  const [style, setStyle] = useState("big-image");
  const changeStyle = () => {
    console.log("you just clicked");

    setStyle("big-image big-image2");
  };

  function Tooltip({ children, title, position }) {
    return (
      <div className={`tooltip`} data-position={position} data-tool-tip={title}>
        {children}
      </div>
    );
  }

  return (
    <div className="container">
      <div className={style}>
        {/* <div className="big-image"> */}
        <img className="display-Image" src={displayImage} alt="" />
        {/* </div> */}
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
                <span>
                  <a href="mailto:" className="mailto">
                    mrthemetribe@gmail.com
                  </a>
                </span>
              </div>
            </div>
            <div className="iconWithText">
              <div>
                <FaSkype size={18} color="#183153" />
              </div>
              <div className="textIcon">
                <span>
                  <a href="mailto:" className="mailto">
                    francis.albores
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="contacts">
            <div className="contact-row">
              <div>
                <FaLinkedin size={18} color="#183153" />
              </div>
              <div className="textIcon">
                <span>
                  <a href="mailto:mrthemetribe@gmail.com" className="mailto">
                    francisalbores
                  </a>
                </span>
              </div>
            </div>
            <div className="githubText">
              <div>
                <FaGithubAlt size={18} color="#183153" />
              </div>
              <div className="textIcon">
                <span>
                  <a href="mailto:" className="mailto">
                    franzbiely
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="proofOfWork">
          <a
            href="https://github.com/franzbiely"
            target="_blank"
            className="redirect-link"
          >
            For more proof of work, <br />
            Please refer to my GitHub account
          </a>
        </div>
        <CarouselProvider
          naturalSlideWidth={130}
          naturalSlideHeight={80}
          totalSlides={3}
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
                      {imageList1.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <a href={item.redirect} target="_blank">
                            <img
                              src={item.src}
                              className="language-logo"
                              alt=""
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="logo-row2">
                      {imageList2.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <img
                            src={item.src}
                            className="language-logo"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    <div className="logo-row3">
                      {imageList3.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <img
                            src={item.src}
                            className="language-logo"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    <div className="logo-row4">
                      {imageList4.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <img
                            src={item.src}
                            className="language-logo"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="logos-rightSide">
                    <div className="rightSide-row1">
                      {imageListRight1.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <div className="hov">
                            <img
                              src={item.src}
                              className="rightSide-logo2c"
                              alt=""
                            />
                            <div className="logos-rightSideText">
                              {item.iconText}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rightSide-row2">
                      {imageListRight2.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <img
                            src={item.src}
                            className="rightSide-logo2"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rightSide-row3">
                      {imageListRight3.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <img
                            src={item.src}
                            className="rightSide-logo2"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div className="professional">
                  <p>
                    I am an experienced
                    <span className="textBold"> Mobile Developer</span>
                    <br />
                    with a track record of success in designing and building
                    mobile applications for various industries.
                    <br />
                    Familiar with tools such as React Native and appcenter.
                    <span> Some of the recent stack I have used: </span>
                  </p>
                </div>
                <div className="logos-container">
                  <div className="logos-leftSide">
                    <div className="logo-row">
                      {mobileList1.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <img
                            src={item.src}
                            className="language-logo"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div className="professional">
                  <p>
                    I am an experienced
                    <span className="textBold"> IoT </span>with a proven track
                    record of designing and implementing IoT solutions.
                    <br />
                    familiar with Arduino, AWS IoT. Strong understanding of
                    cloud-based solutions and data security.
                    <br />
                    Strong problem-solving skills, effective communication and
                    team-oriented approach.
                  </p>
                </div>
                <div className="logos-container">
                  <div className="logos-leftSide">
                    <div className="logo-row">
                      {IOTList1.map((item) => (
                        <div className="logo-item">
                          {item.content}
                          <img
                            src={item.src}
                            className="language-logo"
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className="button-logo">
              <ButtonNext className="button-Slide-next">
                <HiOutlineChevronRight
                  size={90}
                  className="button-slide"
                  onClick={changeStyle}
                />
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
          <a
            href="https://www.linkedin.com/in/francisalbores/"
            target="_blank"
            className="redirect-link"
          >
            For more testimonies from other people,
            <br />
            Please refer to my LinkedIn accout
          </a>
        </div>
      </div>
    </div>
  );
}
