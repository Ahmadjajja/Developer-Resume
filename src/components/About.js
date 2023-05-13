import React, { useState, useEffect, useRef } from "react";
import "../Css_applied/aboutStyles.css";
import simpleProfile from "../images/SimpleProfile.png";
import shadedProfile from "../images/ShadedProfile.png";
import simpleProfile2 from "../images/SimpleProfile2.jpg";
import ShadedProfile2 from "../images/ShadedProfile2.jpg";

const About = ({ aboutBtnClickedActive }) => {
  const mySecondImage = useRef();
  const myImage = useRef();
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
      if (!myImage.current.contains(e.target)) {
        setClicked(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [myImage, setClicked]);

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
      className={`mr-12 ml-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
    >
      <div
        className={`contentContainer ${
          isVisible ? "show" : ""
        } pt-[5.538rem] pb-[2.5rem] relative`}
      >
        <div className="inline-block absolute top-[105px] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased aboutScreen3:top-[100px]">
          01.
        </div>{" "}
        <div className="aboutMe inline-block ml-12 bottom-0 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[50] aboutScreen1:w-[7.4rem]">
          About Me
          <div className="z-[50] w-[10%] inline-block h-[100%] absolute bottom-0 aboutScreen1:hidden"></div>
        </div>
        <div className="border-[1px] block box-content relative bottom-[17px] w-[56.7%] left-[38%] border-[#303c55] aboutScreen1:hidden aboutScreen2:left-[174px] md:w-[20rem] aboutScreen7:left-[205px]"></div>
      </div>
      {/* Body Section for < md-screen */}
      <div
        className={`contentContainer ${
          isVisibleTwo ? "show" : ""
        } block aboutScreen8:hidden`}
      >
        {/* Section 2 */}
        <div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            Hello! I'm Abdullah, a full stack software developer based in
            Sheikhupura, PK.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I build things on the internet and love building large scale
            applications with system design in mind. I always try to be creative
            and efficient while building websites and application using latest
            technologies. I have worked in teams and also individually as a
            freelancer and got valuable learning experiences. Currently, I am
            expanding my knowledge in Web 3.0 and Metaverse so that I can build
            things with immersive user experience. I love to teach Computer
            Science concepts. I have taught over more than 500 students. Love to
            analyze the requirements and provide the customer exactly what he
            wants with additional features based on my personal experiences that
            help in achieving the customer's goals.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I am still studying in my undergraduate degree at{" "}
            <a className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block">
              University of Agriculture, Faisalabad.
            </a>{" "}
            I have worked in engineering and development at some{" "}
            <a className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen5:block">
              Software Companies <span> </span>
            </a>
            where I work on a wide variety of interesting and meaningful
            projects on a daily basis.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-5">
            Here are few technologies I have been working on recently:
          </div>
          {/* Technologies I am familiar with */}
          <div className=" w-[60vw] text-[#8892b0] flex flex-wrap aboutScreen6:w-[10.5rem]">
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                JavaScript (ES6+)
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Python
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Hadoop
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Azure
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Node.js
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Expressjs
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                React Js
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Redux DevTool
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                C Language
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                HTML5
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                C++ (OOP + DSA)
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                CSS3, SCSS
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Tailwind CSS
              </div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Bootstrap 5
              </div>
            </div>
            <div>
              <div className="w-[30vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                MongoDB
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="h-auto py-12">
          <div className="relative">
            <img
              ref={mySecondImage}
              onClick={handleSmallImageClick}
              src={clickedSm ? simpleProfile : shadedProfile}
              alt="profile"
              className="h-auto w-auto mr-auto ml-auto object-cover transition-ImageTransitionProperty duration-ImageTransitionDuration ease-ImageTransitionTiming delay-ImageTransitionDelay z-10 opacity-100 relative"
              style={{
                outline: "2px solid #45b2a0",
                outlineOffset: clickedSm ? "10px" : "15px",
                position: "relative",
                top: "0px",
                left: "0px",
                transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Body Section for > md-screen */}
      <div
        className={`contentContainer ${
          isVisibleTwo ? "show" : ""
        } hidden aboutScreen8:block relative`}
      >
        {/* Section 2 */}
        <div className="w-[49.5136vw] aboutScreen11:w-[51vw] aboutScreen12:w-[49vw]">
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            Hello! I'm Abdullah, a full stack software developer based in
            Sheikhupura, PK.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I build things on the internet and love building large scale
            applications with system design in mind. I always try to be creative
            and efficient while building websites and application using latest
            technologies. I have worked in teams and also individually as a
            freelancer and got valuable learning experiences. Currently, I am
            expanding my knowledge in Web 3.0 and Metaverse so that I can build
            things with immersive user experience. I love to teach Computer
            Science concepts. I have taught over more than 500 students. Love to
            analyze the requirements and provide the customer exactly what he
            wants with additional features based on my personal experiences that
            help in achieving the customer's goals.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-4">
            I am still studying in my undergraduate degree at{" "}
            <div className="relative inline-block">
              <a className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block">
                University of Agriculture,
              </a>{" "}
            </div>
            Faisalabad. I have worked in engineering and development at some{" "}
            <div className="inline-block relative">
              <a className="spanOneHoverClass text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen5:block">
                Software Companies
              </a>
            </div>{" "}
            where I work on a wide variety of interesting and meaningful
            projects on a daily basis.
          </div>
          <div className="text-[#8892b0] font-calibri text-[20px] leading-[1.3] antialiased mb-5">
            Here are few technologies I have been working on recently:
          </div>
          {/* Technologies I am familiar with */}
          <div className="text-[#8892b0] flex flex-wrap">
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                JavaScript (ES6+)
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Python
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Hadoop
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Azure
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Node.js
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Expressjs
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                React Js
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Redux DevTool
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                C Language
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                HTML5
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                C++ (OOP + DSA)
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                CSS3, SCSS
              </div>
            </div>
            <div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Tailwind CSS
              </div>
              <div className="w-[23vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen9:w-[12.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                Bootstrap 5
              </div>
            </div>
            <div>
              <div className="w-[47.5456vw] inline-block font-customMono text-[13px] antialiased aboutScreen6:w-[10.5rem] aboutScreen10:w-[13.1rem]">
                <span className="text-[#64ffda] text-[14px] leading-[12px]">
                  ▹
                </span>{" "}
                MongoDB
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
                src={clicked ? simpleProfile2 : ShadedProfile2}
                alt="profile"
                className="h-auto w-auto mr-auto ml-auto object-cover transition-ImageTransitionProperty duration-ImageTransitionDuration ease-ImageTransitionTiming delay-ImageTransitionDelay z-10 opacity-100 relative"
                style={{
                  outline: "2px solid #45b2a0",
                  outlineOffset: clicked ? "10px" : "15px",
                  position: "relative",
                  top: "0px",
                  left: "0px",
                  transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default About;
