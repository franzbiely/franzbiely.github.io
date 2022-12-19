import React from "react";
import displayImage from "../images/me3.jpeg";
import { FaEnvelope } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import jslogo from "../images/logos/js.jpg";
import reactlogo from "../images/logos/reactjs.png";
import vuelogo from "../images/logos/vue.png";
import angularlogo from "../images/logos/angular.png";
import jquerylogo from "../images/logos/jquery.png";
import cloudfrontlogo from "../images/logos/cloudfront.png";
import gatsbylogo from "../images/logos/gatsby.png";
import nuxtjslogo from "../images/logos/nuxtjs.png";
import nextjslogo from "../images/logos/nextjs.png";
import nestjslogo from "../images/logos/nestjs.png";
import nodejslogo from "../images/logos/nodejs.png";
import electronlogo from "../images/logos/electron.png";
import mongodblogo from "../images/logos/mongodb.png";
import mysqllogo from "../images/logos/mysql.png";
import postmanlogo from "../images/logos/postman.png";
import graphqllogo from "../images/logos/graphql.png";
import restApilogo from "../images/logos/restApi.png";
import lambdalogo from "../images/logos/lambda.png";
import s3logo from "../images/logos/s3.png";
import phplogo from "../images/logos/php.png";
import laravellogo from "../images/logos/laravel.png";
import wordpresslogo from "../images/logos/wordpress.png";
import symfonylogo from "../images/logos/symfony.png";
import agoralogo from "../images/logos/agora.png";
import dockerlogo from "../images/logos/docker.png";
import Slider from "./slider";
export default function componentName() {
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
            <span>
              I am a professional web developer for 13 years with vast
              experience
            </span>
          </p>
          <p>
            <span>
              working with different clients accross the globe providing small
              to large
            </span>
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
        <div className="professional">
          <span>
            as a
            <span className="textBold"> Professional Software Engineer</span>
          </span>
          <p>
            <span>
              I have been engaged with different technologies in Javascript, and
              PHP Stacks. Below are
            </span>
          </p>
          <p>
            <span>some of the recent stack I have used: </span>
          </p>
        </div>
        <div className="logos-container">
          <div className="logos-leftSide">
            <div className="logo-row">
              <div>
                <img className="language-logo" src={jslogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={reactlogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={vuelogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={angularlogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={jquerylogo} alt="" />
              </div>
            </div>
            <div className="logo-row2">
              <div>
                <img className="language-logo" src={gatsbylogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={nuxtjslogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={nextjslogo} alt="" />
              </div>
            </div>
            <div className="logo-row3">
              <div>
                <img className="language-logo" src={nestjslogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={nodejslogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={electronlogo} alt="" />
              </div>
            </div>
            <div className="logo-row4">
              <div>
                <img className="language-logo" src={mongodblogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={mysqllogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={postmanlogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={graphqllogo} alt="" />
              </div>
              <div>
                <img className="language-logo" src={restApilogo} alt="" />
              </div>
            </div>
          </div>
          <div className="logos-rightSide">
            <div className="rightSide-row1">
              <img className="rightSide-logo" src={cloudfrontlogo} alt="" />
              <span className="logos-rightSideText">CloudFront</span>
            </div>
            <div className="rightSide-row1">
              <img className="rightSide-logo" src={lambdalogo} alt="" />
              <span className="logos-rightSideText">Lambda</span>
            </div>
            <div className="rightSide-row1">
              <img className="rightSide-logo" src={s3logo} alt="" />
              <span className="logos-rightSideText">S3</span>
            </div>
            <div className="rightSide-row2">
              <div>
                <img className="rightSide-logo2" src={phplogo} alt="" />
              </div>
              <div>
                <img className="rightSide-logo2" src={laravellogo} alt="" />
              </div>
              <div>
                <img className="rightSide-logo2" src={wordpresslogo} alt="" />
              </div>
              <div>
                <img className="rightSide-logo2" src={symfonylogo} alt="" />
              </div>
            </div>
            <div className="rightSide-row3">
              <div>
                <img className="agoraDocker-logo" src={agoralogo} alt="" />
              </div>
              <div>
                <img className="agoraDocker-logo" src={dockerlogo} alt="" />
              </div>
            </div>
          </div>
          <div className="proofOfWork">
            <span className="for-more">
              For more proof of work, <br />
              Please refer to my GitHub accout
            </span>
          </div>
        </div>
        <div className="feedback-container">
          <div>
            <Slider />
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
    </div>
  );
}
