import React, { useEffect, useRef, useState } from "react";
import "../Css_applied/aboutStyles.css";
import DP from "../images/DP.jpg";
import DPs from "../images/DPs.gif";

const About = ({ aboutBtnClickedActive }) => {
  const mySecondImage = useRef();
  const myImage = useRef(null);
  const [clickedSm, setClickedSm] = useState(false);
  const [clicked, setClicked] = useState(false);
  // Displaying content after show time
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) {
        return;
      }

      const { top, height } = aboutRef.current.getBoundingClientRect();
      if (top <= 600 && top + height >= 600) {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisibleTwo(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef]);
  //_______________________

  const handleSmallImageClick = (e) => {
    if (!clickedSm) {
      setClickedSm(true);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (myImage.current && !myImage.current.contains(e.target)) {
        setClicked(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!mySecondImage.current.contains(e.target)) {
        setClickedSm(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [mySecondImage, setClickedSm]);

  // Handling when click on About happens on the Navbar
  const [aboutNavClick, setAboutNavClick] = useState(false);
  useEffect(() => {
    setAboutNavClick(aboutBtnClickedActive);
  }, [aboutBtnClickedActive]);

  useEffect(() => {
    if (aboutNavClick) {
      var el = document.querySelector("#ABOUTDIV");
      var start = window.pageYOffset;
      var end = el.offsetTop;
      var duration = 1000;
      var easing = function (t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      var startTime = null;

      function animate(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var progress = easing(timeElapsed / duration);
        window.scroll(0, start + (end - start) * progress);
        if (timeElapsed < duration) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    }
  }, [aboutNavClick]);

  return (
    <div
      id="ABOUTDIV"
      ref={aboutRef}
      className={`mr-8 ml-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
    >
      <div
        className={`contentContainer ${isVisible ? "show" : ""
          } pt-[5.538rem] pb-[2.5rem] relative`}
      >
        <div className="inline-block absolute top-[105px] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased aboutScreen3:top-[100px]">
          01.
        </div>{" "}
        <div className="aboutMe inline-block ml-12 bottom-0 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[50] aboutScreen1:w-[7.4rem]">
          About Me
          <div className="z-[50] w-[10%] inline-block h-[100%] absolute bottom-0 aboutScreen1:hidden"></div>
        </div>
        <div className="border-[1px] block box-content relative bottom-[17px] w-[56.7%] left-[38%] border-[#303c55] aboutScreen1:hidden aboutScreen2:left-[174px] md:w-[20rem] aboutScreen7:left-[50%]"></div>
      </div>
      {/* Body Section for < md-screen */}
      <div
        className={`contentContainer ${isVisibleTwo ? "show" : ""
          } block aboutScreen8:hidden`}
      >
        {/* Section 2 */}
        <div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            Hello! I'm Ahmad, a full-stack software engineer from Faisalabad, PK.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I have expertise in building Generative AI applications (Python, LLMs, Vectara, RAG), web applications (MERN), and mobile applications (React Native). I bring a diverse background, having worked collaboratively in teams professionally, participated in International Hackathons, worked independently as a freelancer.
            <br />
            <br />
            As a tech trainer at the
            <div className="relative inline-block">
              <a
                className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"
                target="_blank"
              >
                Saylani Welfare Mass Training & Job Creation Program&nbsp;
              </a>{" "}
            </div>
            I've taught 1000+ students by simplifying complex programming concepts (wanna see how I provide training to my students?
            <div className="relative inline-block">
              <a
                className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"
                target="_blank"
              >
                &nbsp; click here
              </a>{" "}
            </div>
            ).
            <br />
            <br />
            I helped over 100 international folks around the globe🌍 solve coding problems in <b>Python</b> as a <div className="relative inline-block">
              <a
                className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7186385467846639620/"
                target="_blank"
              >
                &nbsp;Section Leader&nbsp;
              </a>{" "}
            </div>
            and <div className="relative inline-block">
              <a
                className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7186385467846639620/"
                target="_blank"
              >
                &nbsp;Section Leader Mentor&nbsp;
              </a>{" "}
            </div>
            (𝘵𝘦𝘢𝘤𝘩𝘪𝘯𝘨 𝘰𝘯𝘦-𝘰𝘯-𝘰𝘯𝘦) at <div className="relative inline-block">
              <a
                className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://codeinplace.stanford.edu/"
                target="_blank"
              >
                &nbsp;Stanford's Code in Place&nbsp;
              </a>{" "}
            </div>.
            <br />
            <br />
            I have
            <div className="relative inline-block">
              <a
                className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://www.linkedin.com/posts/ahmad-jajja_stanfordabrcodeabrinabrplaceabrlearnings-activity-7195142429073633281-zNhV/?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                &nbsp;participated&nbsp;
              </a>{" "}
            </div>
            in multiple AI International Hackathons and
            <div className="relative inline-block">
              <a
                className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7176624410651504641/"
                target="_blank"
              >
                &nbsp;won&nbsp;
              </a>{" "}
            </div>
            one of them (Unhallucinate Challenge).
            <br />
            <br />
            I graduated from the
            <a
              className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
              href="http://web.uaf.edu.pk/"
              target="_blank"
            >
              &nbsp;University of Agriculture, Faisalabad
            </a>{" "}
            in June, 2024.
            <br />
            <br />
            I aim to pursue further studies in the United States to advance in technology research and innovation.


          </div>

          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-5">
            Here are few technologies I have been working on recently:
          </div>
          {/* Technologies I am familiar with */}
          <div className="w-[60vw] text-[#8892b0] flex flex-wrap aboutScreen6:w-[10.5rem]">
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                C
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                C++
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Dart
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Java (OOP + DSA)
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Python
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                JavaScript (ES6+)
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Typescript
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                HTML5
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                CSS3
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                SCSS, SASS
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Chakra-UI
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Aunt-Design
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Bootstrap-5
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                React-JS
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                React-Native
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Firebase
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                FireStore
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Node-JS
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Express-JS
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Mongo-DB
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Git
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Github
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Rest-APIs
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                GraphQL
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Generative AI
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                LLMs
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="h-auto pt-12">
          <div className="relative">
            <img
              ref={mySecondImage}
              onClick={handleSmallImageClick}
              src={clickedSm ? DP : DPs}
              alt="profile"
              className="h-auto w-auto mr-auto ml-auto object-cover transition-ImageTransitionProperty duration-ImageTransitionDuration ease-ImageTransitionTiming delay-ImageTransitionDelay z-10 opacity-100 relative"
              style={{
                outline: "2px solid #45b2a0",
                outlineOffset: clickedSm ? "10px" : "15px",
                position: "relative",
                top: "0px",
                left: "0px",
                transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
                height: "450px",
                cursor: "pointer"
              }}
            />
            <h1 style={{ color: "white", marginTop: "15px", paddingLeft: "17%", color: "#64ffda" }} >Click the image above ⤣</h1>
          </div>
        </div>
      </div>
      {/* Body Section for > md-screen */}
      <div
        className={`contentContainer ${isVisibleTwo ? "show" : ""
          } hidden aboutScreen8:block relative`}
      >
        {/* Section 2 */}
        <div className="w-[46.5136vw] aboutScreen11:w-[51vw] aboutScreen12:w-[49vw]">
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            Hello! I'm Ahmad, a full-stack software engineer from Faisalabad, PK.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I have expertise in building Generative AI applications (Python, LLMs, Vectara, RAG), web applications (MERN), and mobile applications (React Native). I bring a diverse background, having worked collaboratively in teams professionally, participated in International Hackathons, worked independently as a freelancer.
            <br />
            <br />
            As a tech trainer at the
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"
                target="_blank"
              >
                &nbsp;Saylani Welfare Mass Training & Job Creation
                Program
              </a>{" "}
            </div>
            I've taught 1000+ students by simplifying complex programming concepts (wanna see how I provide training to my students?<div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://www.linkedin.com/posts/ahmad-jajja_learn-to-code-with-activity-7151895134744256512-Dmyf?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                &nbsp;click here&nbsp;
              </a>{" "}
            </div>
            ).
            <br />
            <br />
            I helped over 100 international folks around the globe🌍 solve coding problems in Python as a
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7186385467846639620/"
                target="_blank"
              >
                &nbsp;Section Leader&nbsp;
              </a>{" "}
            </div>
            and
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://www.linkedin.com/posts/ahmad-jajja_stanfordabrcodeabrinabrplaceabrlearnings-activity-7195142429073633281-zNhV/?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                &nbsp;Section Leader Mentor&nbsp;
              </a>{" "}
            </div>
            (𝘵𝘦𝘢𝘤𝘩𝘪𝘯𝘨 𝘰𝘯𝘦-𝘰𝘯-𝘰𝘯𝘦) at <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://codeinplace.stanford.edu/"
                target="_blank"
              >
                &nbsp;Stanford's Code in Place&nbsp;
              </a>{" "}
            </div>.
            <br />
            <br />
            I have
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://lablab.ai/u/@ahmad_jajja288"
                target="_blank"
              >
                &nbsp;participated&nbsp;
              </a>{" "}
            </div>
            in multiple AI International Hackathons and
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7176624410651504641/"
                target="_blank"
              >
                &nbsp;won&nbsp;
              </a>{" "}
            </div>
            one of them (Unhallucinate Challenge).
            <br />
            <br />
            I graduated from the
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="http://web.uaf.edu.pk/"
                target="_blank"
              >
                &nbsp;University of Agriculture, Faisalabad
              </a>{" "}
              in June, 2024.
            </div>
            <br />
            <br />
            I aim to pursue further studies in the United States to advance in technology research and innovation.
            <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4 mt-4">
              Here are a few technologies I've been working with recently:
            </div>
          </div>
          {/* <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I build things on the internet and love building large-scale
            applications with system design in mind. I have had the opportunity
            to work on various projects both in teams and as a freelancer, which
            has provided me with valuable learning experiences. Additionally, I
            have a passion for teaching Computer Science concepts. In fact, I
            have been actively involved in teaching as a part of my role as a
            <div className="relative inline-block">
              <a className="spanOneHoverClass text-[#64ffda] font-calibri text-[20px] aboutScreen4:block">
                &nbsp; Tech Trainer &nbsp;
              </a>{" "}
            </div>
            within the
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"
                target="_blank"
              >
                &nbsp;Saylani Welfare Mass Training & Job Creation
                Program.&nbsp;
              </a>{" "}
            </div>
            This teaching experience has allowed me to impart comprehensive
            lessons on programming languages and technologies, including HTML,
            CSS,Bootstrap5, JavaScript,Typescript, React JS,React Native,
            NodeJS, MongoDB, and Express JS, to 500+ students. I thoroughly
            enjoy sharing my knowledge and helping others grasp complex concepts
            in a clear and concise manner as well as i loves to solve
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://github.com/Ahmadjajja/JAVA_DSA"
                target="_blank"
              >
                &nbsp; DSA &nbsp;
              </a>{" "}
            </div>{" "}
            Problem on
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://leetcode.com/ahmadjajja86/"
                target="_blank"
              >
                &nbsp;leetcode&nbsp;
              </a>{" "}
            </div>{" "}
            to improve my coding skills.I am an
            <div className="relative inline-block">
              <a className="spanOneHoverClass text-[#64ffda] font-calibri text-[20px] aboutScreen4:block">
                &nbsp;open-source enthusiast &nbsp;
              </a>{" "}
            </div>{" "}
            who is eager to explore new opportunities within the realm of
            open-source development. My goal is to enhance my skills by working
            on substantial codebases and contributing to the open-source
            community. Currently, I am pursuing my undergraduate degree at the
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="http://web.uaf.edu.pk/"
                target="_blank"
              >
                &nbsp;University of Agriculture, Faisalabad.
              </a>{" "}
            </div>
            <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4 mt-4">
              Here are a few technologies I've been working with recently:
            </div>
          </div> */}
          {/* Technologies I am familiar with */}
          <div className="text-[#8892b0] flex flex-wrap">
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                C
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                C++
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Dart
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Java
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Python
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                JavaScript (ES6+)
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Typescript
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                HTML5
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                CSS3
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                SCSS, SASS
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Chakra-UI
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Aunt-Design
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Bootstrap-5
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                React-JS
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                React-Native
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Firebase
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                FireStore
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Node-JS
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Express-JS
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Mongo-DB
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Git
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Github
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Rest-APIs
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                GraphQL
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                Generative AI
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ➾
                </span>{" "}
                LLMs
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[21.0864vw] absolute top-0 right-2 aboutScreen11:right-[2.25rem] aboutScreen12:max-w-[15rem] aboutScreen12:right-[50%] aboutScreen12:left-[69%]">
          <div className="h-auto py-12">
            <div className="relative">
              <img
                ref={myImage}
                onMouseOver={() => setClicked(true)}
                onMouseOut={() => setClicked(false)}
                src={clicked ? DP : DPs}
                alt="profile"
                className="h-auto w-auto mr-auto ml-auto object-cover transition-ImageTransitionProperty duration-ImageTransitionDuration ease-ImageTransitionTiming delay-ImageTransitionDelay z-10 opacity-100 relative"
                style={{
                  outline: "2px solid #45b2a0",
                  outlineOffset: clicked ? "10px" : "15px",
                  position: "relative",
                  top: "0px",
                  left: "0px",
                  transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
                  cursor: "pointer"
                }}
              />
              <h1 style={{ color: "white", marginTop: "12px", paddingLeft: "17%", color: "#64ffda" }} >Hover over the image ⤣</h1>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default About;
