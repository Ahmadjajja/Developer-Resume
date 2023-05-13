import { React, useEffect, useState, useRef } from "react";
import "../Css_applied/workStyles.css";

const Work = ({ experienceBtnClickedActive }) => {
  // Work
  const [firstWorkClicked, setFirstWorkClicked] = useState(true);
  const [secondWorkClicked, setSecondWorkClicked] = useState(false);
  const [thirdWorkClicked, setThirdWorkClicked] = useState(false);
  const [fourthWorkClicked, setFourthWorkClicked] = useState(false);
  const [noneWorkClicked, setNoneWorkClicked] = useState(true);
  // Bar
  const [firstBarClicked, setFirstBarClicked] = useState(false);
  const [secondBarClicked, setSecondBarClicked] = useState(false);
  const [thirdBarClicked, setThirdBarClicked] = useState(false);
  const [fourthBarClicked, setFourthBarClicked] = useState(false);
  // Scroll Left and Right
  const [scrollLeft, setScrollLeft] = useState(0);
  // Hover
  const [firstWorkHover, setFirstWorkHover] = useState(false);
  const [secondWorkHover, setSecondWorkHover] = useState(false);
  const [thirdWorkHover, setThirdWorkHover] = useState(false);
  const [fourthWorkHover, setFourthWorkHover] = useState(false);
  // Displaying content after show time
  const workRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setisVisibleTwo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!workRef.current) {
        return;
      }

      const { top, height } = workRef.current.getBoundingClientRect();
      if (top <= 600 && top + height >= 600) {
        setIsVisible(true);
        setTimeout(() => {
          setisVisibleTwo(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [workRef]);

  // For Small Screen
  const yourDiv = document.getElementById("firstDiv");
  function isElementInViewportWithOffset(el, offset = 0) {
    let rect = el.getBoundingClientRect();
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    let topInView = rect.top + offset >= 0 && rect.top + offset <= windowHeight;

    return topInView;
  }

  window.addEventListener("scroll", function () {
    let element = document.getElementById("title");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  window.addEventListener("scroll", function () {
    let element = document.getElementById("body");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  //__________________________________________________________

  const handleScroll = (event) => {
    setScrollLeft(event.target.scrollLeft);
  };

  const borderBottomStyle = {
    position: "absolute",
    bottom: 0,
    left: secondBarClicked
      ? "134.7px"
      : thirdBarClicked
      ? "221px"
      : fourthBarClicked
      ? "307.842px"
      : "0px",
    width: firstBarClicked
      ? `calc(134.7px + ${scrollLeft}px)`
      : secondBarClicked
      ? `86.3px`
      : thirdBarClicked
      ? `86.842px`
      : fourthBarClicked
      ? `118px`
      : `calc(134.7px + ${scrollLeft}px)`,
    height: "2px",
    backgroundColor: "#64ffda",
    transform: firstBarClicked
      ? `translateX(-${scrollLeft}px)`
      : secondBarClicked
      ? null
      : thirdBarClicked
      ? null
      : fourthBarClicked
      ? null
      : `translateX(-${scrollLeft}px)`,
    transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
  };

  const handleFirstWorkClicked = () => {
    setFirstWorkClicked(true);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked();
  };
  const handleSecondWorkClicked = () => {
    setSecondWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleSecondBarClicked();
  };
  const handleThirdWorkClicked = () => {
    setThirdWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setSecondWorkClicked(false);
    setFourthWorkClicked(false);
    handleThirdBarClicked();
  };
  const handleFourthWorkClicked = () => {
    setFourthWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    handleFourthBarClicked();
  };
  const handleFirstBarClicked = () => {
    setFirstBarClicked(true);
    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleSecondBarClicked = () => {
    setFirstBarClicked(false);
    setSecondBarClicked(true);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleThirdBarClicked = () => {
    setFirstBarClicked(false);
    setSecondBarClicked(false);
    setThirdBarClicked(true);
    setFourthBarClicked(false);
  };
  const handleFourthBarClicked = () => {
    setFirstBarClicked(false);
    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(true);
  };

  useEffect(() => {
    setFirstBarClicked(true);
  }, []);

  // Handling when click on Experience happens on the Navbar
  const [experienceNavClick, setExperienceNavClick] = useState(false);
  useEffect(() => {
    setExperienceNavClick(experienceBtnClickedActive);
  }, [experienceBtnClickedActive]);

  useEffect(() => {
    if (experienceNavClick) {
      var el = document.querySelector("#EXPERIENCEDIV");
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
  }, [experienceNavClick]);
  return (
    <div id="EXPERIENCEDIV" ref={workRef}>
      <div className="mr-12 ml-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]">
        {/* Header Section */}
        <div
          id="title"
          className={`contentContainer ${
            isVisible ? "show" : ""
          } pt-[5.538rem] relative`}
        >
          <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
            02.
          </div>{" "}
          <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
            Where I've Worked
            <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
          </div>
          <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen4:hidden workScreen6:left-[305px] workScreen7:w-[22rem]"></div>
        </div>
        {/* When screen > 500px */}
        <div
          className={`contentContainer ${
            isVisibleTwo ? "show" : ""
          } block workScreen1:hidden`}
        >
          <div className="flex">
            {/* Left Side */}
            <div className="w-[20%] myScreen1:w-[8rem] workScreen10:w-[25.5%]">
              <div className="h-[10.1rem] relative border-l-[1px] border-l-[#8892b0] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay">
                <div
                  className={
                    firstBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute top-0 border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : secondBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded top-[2.2rem] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : thirdBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded top-[4.9rem] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : fourthBarClicked
                      ? "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded top-[7.6rem] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                  }
                ></div>
                {/* Sevenovn */}
                <div
                  onMouseOver={() => setFirstWorkHover(true)}
                  onMouseOut={() => setFirstWorkHover(false)}
                  onClick={handleFirstWorkClicked}
                  className={
                    firstWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Sevenovn 
                </div>
                {/* Fourovr  */}
                <div
                  onMouseOver={() => setSecondWorkHover(true)}
                  onMouseOut={() => setSecondWorkHover(false)}
                  onClick={handleSecondWorkClicked}
                  className={
                    secondWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : secondWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Fourovr 
                </div>
                {/* SEEHRAT */}
                <div
                  onMouseOver={() => setThirdWorkHover(true)}
                  onMouseOut={() => setThirdWorkHover(false)}
                  onClick={handleThirdWorkClicked}
                  className={
                    thirdWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : thirdWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  SEERAHT
                </div>
                {/* Freelancing */}
                <div
                  onMouseOver={() => setFourthWorkHover(true)}
                  onMouseOut={() => setFourthWorkHover(false)}
                  onClick={handleFourthWorkClicked}
                  className={
                    fourthWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : fourthWorkClicked
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Freelancing
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="ml-[10%] w-[70%] relative workScreen10:w-[70%] workScreen10:ml-[4.5%]">
              {/* First One */}
              {(firstWorkClicked || noneWorkClicked) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  {/* For firstWork */}
                  <div>
                    <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Full Stack Engineer{" "}
                      <span className="antialiased text-[#64ffda]">@</span>
                      <span className="antialiased text-[#64ffda] relative">
                        <a
                          href="https://sevenovn.com/"
                          className="viewArchive"
                        >
                          Sevenovn
                        </a>
                      </span>
                    </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      Sept 2022 - present{" "}
                    </div>

                    <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        Designed, developed and modified 4+ software systems and
                        custom components.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        Analyzed 30+ user requirements to derive technical
                        software design and performance requirements.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                      <div className="leading-[1.22rem]">
                        Developed and executed 5+ test procedures for software
                        components.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Second One */}
              {secondWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1.4rem] pb-[10px]">
                    Frontend Developer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a href="https://www.linkedin.com/company/fourovr/" className="viewArchive">
                      Fourovr 
                      </a>
                    </span>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Feb - Aug 2022{" "}
                  </div>

                  <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Developed and upheld UI standards for over 10 websites,
                      comprising of more than 20 pages
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Led the Desgning team and collaborated with product
                      managers, business parteners, and engineers to help define
                      product requirements and roadmap.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Implemented rich user experiences by creating multiple new
                      features using HTML 5, CSS and JavsScript.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Worked cross-functionally with developers to implement new
                      features and maintain site usability.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Designed some front-end Web Interfaces for controlling and
                      monitoring the onboard system.
                    </div>
                  </div>
                </div>
              )}
              {/* Third One */}
              {thirdWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-[#ccd6f6] font-calibri leading-[1.2] text-[20px] antialiased">
                    Web design & development mentor{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a href="https://seeraht.com/" className="viewArchive">
                        SEEHRAT
                      </a>
                    </span>
                  </div>
                  <div className="pt-[7px] text-[#a8b2d1] inline-block font-customMono text-[13px] antialiased">
                    Mar - July 2022{" "}
                  </div>

                  <div className="pt-[1.5rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="leading-[1.22rem]">
                      Provided instructions in the following disciplines:
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">HTML 5</div>
                  </div>
                  <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      CSS, SCSS and Tailwind CSS
                    </div>
                  </div>
                  <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">JavaScript ES6+</div>
                  </div>
                  <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">React and Redux</div>
                  </div>
                  <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      REST API for Backend
                    </div>
                  </div>
                  <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Context API for Frontend
                    </div>
                  </div>
                  <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">Node and Express Js</div>
                  </div>
                  <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px]antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">MongoDB</div>
                  </div>
                </div>
              )}
              {/* Fourth One */}
              {fourthWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased cursor-default">
                    Full Stack Web Developer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a className="viewArchive">Fb and local Clients</a>
                    </span>
                  </div>
                  <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                    Nov 2021 - present{" "}
                  </div>
                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Developed and delivered a wide range of web-based
                      solutions, utilizing front-end technologies such as HTML,
                      CSS, and JavaScript, as well as back-end technologies such
                      as Node.js and Express js.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Built and maintained strong relationships with clients
                      through effective communication and problem-solving
                      skills, ensuring timely completion and adherence to
                      project requirements.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Accomplished in utilizing version control systems such as
                      Git and SVN, and implementing agile methodologies for
                      efficient project management.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Proven ability to work independently as well as part of a
                      team, successfully delivering projects on time and within
                      budget.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Experience with database management systems such as
                      MongoDB.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.3rem]">
                      Experience in integrating web applications with
                      third-party APIs and services.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* When Screen <= 600px */}
      <div id="body" className={`contentContainer hidden workScreen1:block`}>
        <div className="flex flex-col">
          {/* First Upper Side When the screen < 425 i-e when it has scroll bar*/}
          <div className="hidden workScreen9:block">
            <div className="relative rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay ">
              {/* Companies Names*/}
              <div className="flex">
                <div
                  onScroll={handleScroll}
                  className="flex smallScreenWorkWidth mb-[30px] border-b-[2px] border-[#303c55] z-0 overflow-x-scroll relative"
                >
                  {/* Sevenovn */}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Sevenovn
                  </div>
                  {/* Fourovr  */}
                  <div
                    onClick={handleSecondWorkClicked}
                    className={
                      secondWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Fourovr 
                  </div>
                  {/* SEEHRAT */}
                  <div
                    onClick={handleThirdWorkClicked}
                    className={
                      thirdWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    SEERAHT
                  </div>
                  {/* Freelancing */}
                  <div
                    onClick={handleFourthWorkClicked}
                    className={
                      fourthWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Freelancing
                  </div>
                  <div style={borderBottomStyle} />
                </div>
              </div>
            </div>
          </div>

          {/* First Upper Side When the screen >= 425 i-e when it has no scroll bar*/}
          <div className="hidden workScreen8:flex items-center justify-center">
            <div className="relative rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay ">
              {/* Companies Names*/}
              <div className="flex">
                <div className="flex mb-[30px] border-b-[2px] border-[#303c55] z-0 relative">
                  {/* Sevenovn*/}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Sevenovn 
                  </div>
                  {/* Fourovr  */}
                  <div
                    onClick={handleSecondWorkClicked}
                    className={
                      secondWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Fourovr 
                  </div>
                  {/* SEEHRAT */}
                  <div
                    onClick={handleThirdWorkClicked}
                    className={
                      thirdWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    SEERAHT
                  </div>
                  {/* Freelancing */}
                  <div
                    onClick={handleFourthWorkClicked}
                    className={
                      fourthWorkClicked
                        ? "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Freelancing
                  </div>
                  <div style={borderBottomStyle} />
                </div>
              </div>
            </div>
          </div>

          {/* Lower Side */}
          <div className="ml-[10%] w-[70%] relative">
            {/* First One */}
            {(firstWorkClicked || noneWorkClicked) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                {/* For firstWork */}
                <div>
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Full Stack Engineer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <a
                      href="https://sevenovn.com/"
                      className="antialiased text-[#64ffda] underline"
                    >
                      Sevenovn
                    </a>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Sept 2022 - present{" "}
                  </div>

                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Designed, developed and modified 4+ software systems and
                      custom components.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Analyzed 30+ user requirements to derive technical
                      software design and performance requirements.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                    <div className="leading-[1.22rem]">
                      Developed and executed 5+ test procedures for software
                      components.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Second One */}
            {secondWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1.4rem] pb-[10px]">
                  Frontend Developer{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <a
                    href="https://www.linkedin.com/company/fourovr/"
                    className="antialiased text-[#64ffda] underline"
                  >
                    Fourovr 
                  </a>
                </div>
                <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                  Feb - Aug 2022{" "}
                </div>

                <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Developed and upheld UI standards for over 10 websites,
                    comprising of more than 20 pages
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Led the Desgning team and collaborated with product
                    managers, business parteners, and engineers to help define
                    product requirements and roadmap.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Implemented rich user experiences by creating multiple new
                    features using HTML 5, CSS and JavsScript.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Worked cross-functionally with developers to implement new
                    features and maintain site usability.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Designed some front-end Web Interfaces for controlling and
                    monitoring the onboard system.
                  </div>
                </div>
              </div>
            )}
            {/* Third One */}
            {thirdWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-[#ccd6f6] font-calibri leading-[1.2] text-[20px] antialiased">
                  Web design & development mentor{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <a
                    href="https://seeraht.com/"
                    className="antialiased text-[#64ffda] underline"
                  >
                    SEEHRAT
                  </a>
                </div>
                <div className="pt-[7px] text-[#a8b2d1] inline-block font-customMono text-[13px] antialiased">
                  Mar - July 2022{" "}
                </div>

                <div className="pt-[1.5rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="leading-[1.22rem]">
                    Provided instructions in the following disciplines:
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">HTML 5</div>
                </div>
                <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    CSS, SCSS and Tailwind CSS
                  </div>
                </div>
                <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">JavaScript ES6+</div>
                </div>
                <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">React and Redux</div>
                </div>
                <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">REST API for Backend</div>
                </div>
                <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">
                    Context API for Frontend
                  </div>
                </div>
                <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">Node and Express Js</div>
                </div>
                <div className="pt-[0.4rem] text-[#8892b0] font-calibri text-[18px]antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.22rem]">MongoDB</div>
                </div>
              </div>
            )}
            {/* Fourth One */}
            {fourthWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased">
                  Full Stack Web Developer{" "}
                  <span className="antialiased text-[#64ffda]">
                    @Fb and local Clients
                  </span>
                </div>
                <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                  Nov 2021 - present{" "}
                </div>
                <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Developed and delivered a wide range of web-based solutions,
                    utilizing front-end technologies such as HTML, CSS, and
                    JavaScript, as well as back-end technologies such as Node.js
                    and Express js.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Built and maintained strong relationships with clients
                    through effective communication and problem-solving skills,
                    ensuring timely completion and adherence to project
                    requirements.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Accomplished in utilizing version control systems such as
                    Git and SVN, and implementing agile methodologies for
                    efficient project management.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Proven ability to work independently as well as part of a
                    team, successfully delivering projects on time and within
                    budget.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Experience with database management systems such as MongoDB.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">▹</div>{" "}
                  <div className="leading-[1.3rem]">
                    Experience in integrating web applications with third-party
                    APIs and services.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
