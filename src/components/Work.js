import { React, useEffect, useRef, useState } from "react";
import "../Css_applied/workStyles.css";

const Work = ({ experienceBtnClickedActive }) => {
  // Work
  const [firstWorkClicked, setFirstWorkClicked] = useState(false);
  const [firstWorkClicked2, setFirstWorkClicked2] = useState(true);
  const [firstWorkClicked3, setFirstWorkClicked3] = useState(false);
  const [firstWorkClicked4, setFirstWorkClicked4] = useState(false);
  const [firstWorkClicked5, setFirstWorkClicked5] = useState(false);
  const [secondWorkClicked, setSecondWorkClicked] = useState(false);
  const [thirdWorkClicked, setThirdWorkClicked] = useState(false);
  const [fourthWorkClicked, setFourthWorkClicked] = useState(false);
  const [noneWorkClicked, setNoneWorkClicked] = useState(true);

  // Bar
  const [firstBarClicked, setFirstBarClicked] = useState(false);
  const [firstBarClicked2, setFirstBarClicked2] = useState(true);
  const [firstBarClicked3, setFirstBarClicked3] = useState(false);
  const [firstBarClicked4, setFirstBarClicked4] = useState(false);
  const [firstBarClicked5, setFirstBarClicked5] = useState(false);

  const [secondBarClicked, setSecondBarClicked] = useState(false);
  const [thirdBarClicked, setThirdBarClicked] = useState(false);
  const [fourthBarClicked, setFourthBarClicked] = useState(false);
  // Scroll Left and Right
  const [scrollLeft, setScrollLeft] = useState(0);
  // Hover
  const [firstWorkHover, setFirstWorkHover] = useState(false);
  const [firstWorkHover2, setFirstWorkHover2] = useState(false);
  const [firstWorkHover3, setFirstWorkHover3] = useState(false);
  const [firstWorkHover4, setFirstWorkHover4] = useState(false);
  const [firstWorkHover5, setFirstWorkHover5] = useState(false);

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
    console.log("event.target.scrollLeft: ", event)
    setScrollLeft(event.target.scrollLeft);
  };

  // const borderBottomStyle = {
  //   position: "absolute",
  //   bottom: 0,
  //   left: firstBarClicked2
  //     ? "0px"
  //     : firstBarClicked3
  //       ? "102px"
  //       : firstBarClicked4
  //         ? "204px"
  //         : firstBarClicked
  //           ? "306px"
  //           : firstBarClicked5
  //             ? "372px"
  //             : secondBarClicked
  //               ? "412px"
  //               : thirdBarClicked
  //                 ? "221px"
  //                 : fourthBarClicked
  //                   ? "307.842px"
  //                   : "0px",
  //   width: firstBarClicked2
  //     ? `calc(102px + ${scrollLeft}px)`
  //     : firstBarClicked3
  //       ? `102px`
  //       : firstBarClicked4
  //         ? `102px`
  //         : firstBarClicked
  //           ? `64px`
  //           : firstBarClicked5
  //             ? `140px`
  //             : secondBarClicked
  //               ? `100px`
  //               : thirdBarClicked
  //                 ? `86.842px`
  //                 : fourthBarClicked
  //                   ? `118px`
  //                   : `calc(140px + ${scrollLeft}px)`,
  //   height: "2px",
  //   backgroundColor: "red",
  //   transform: firstBarClicked2
  //     ? `translateX(-${scrollLeft}px)`
  //     : firstBarClicked3
  //       ? null
  //       : firstBarClicked4
  //         ? null
  //         : firstBarClicked
  //           ? null
  //           : firstBarClicked5
  //             ? null
  //             : secondBarClicked
  //               ? null
  //               : thirdBarClicked
  //                 ? null
  //                 : fourthBarClicked
  //                   ? null
  //                   : `translateX(-${scrollLeft}px)`,
  //   transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
  // };

  const handleFirstWorkClicked = () => {
    setFirstWorkClicked(true);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked();
  };

  const handleFirstWorkClicked2 = () => {
    setFirstWorkClicked(false);
    setFirstWorkClicked2(true);
    setFirstWorkClicked3(false);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked2();
  };
  const handleFirstWorkClicked3 = () => {
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(true);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked3();
  };
  const handleFirstWorkClicked4 = () => {
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);

    setFirstWorkClicked4(true);
    setFirstWorkClicked5(false);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked4();
  };
  const handleFirstWorkClicked5 = () => {
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);

    setFirstWorkClicked4(false);
    setFirstWorkClicked5(true);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked5();
  };


  const handleSecondWorkClicked = () => {
    setSecondWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);

    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleSecondBarClicked();
  };
  const handleThirdWorkClicked = () => {
    setThirdWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);

    setSecondWorkClicked(false);
    setFourthWorkClicked(false);
    handleThirdBarClicked();
  };
  const handleFourthWorkClicked = () => {
    setFourthWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);

    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    handleFourthBarClicked();
  };
  const handleFirstBarClicked = () => {
    setFirstBarClicked(true);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
    setFirstBarClicked4(false);
    setFirstBarClicked5(false);

    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleFirstBarClicked2 = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(true);
    setFirstBarClicked3(false);
    setFirstBarClicked4(false);
    setFirstBarClicked5(false);

    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleFirstBarClicked3 = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(true);
    setFirstBarClicked4(false);
    setFirstBarClicked5(false);

    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleFirstBarClicked4 = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
    setFirstBarClicked4(true);
    setFirstBarClicked5(false);

    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleFirstBarClicked5 = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
    setFirstBarClicked4(false);
    setFirstBarClicked5(true);

    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleSecondBarClicked = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
    setFirstBarClicked4(false);
    setFirstBarClicked5(false);

    setSecondBarClicked(true);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleThirdBarClicked = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
    setFirstBarClicked4(false);
    setFirstBarClicked5(false);

    setSecondBarClicked(false);
    setThirdBarClicked(true);
    setFourthBarClicked(false);
  };
  const handleFourthBarClicked = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
    setFirstBarClicked4(false);
    setFirstBarClicked5(false);

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
      <div className="mr-8 ml-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]">
        {/* Header Section */}
        <div
          id="title"
          className={`contentContainer ${isVisible ? "show" : ""
            } pt-[5.538rem] relative`}
        >
          <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
            02.
          </div>{" "}
          <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
            Where I've Worked
            <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
          </div>
          <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen4:hidden workScreen6:left-[50%] workScreen7:w-[22rem]"></div>
        </div>
        {/* When screen > 500px */}
        <div
          className={`contentContainer ${isVisibleTwo ? "show" : ""
            } block workScreen1:hidden`}
        >
          <div className="flex">
            {/* Left Side */}
            <div className="w-[20%] myScreen1:w-[8rem] workScreen10:w-[25.5%]">
              <div className="h-[20rem] relative border-l-[1px] border-l-[#8892b0] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay">
                <div
                  className={
                    firstBarClicked2
                      ? "h-[2.625rem] w-[1.6px] absolute top-0 border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : firstBarClicked3
                        ? "h-[2.625rem] w-[1.6px] absolute top-[2.45rem] border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                        : firstBarClicked4
                          ? "h-[2.625rem] w-[1.6px] absolute top-[4.9rem] border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                          : firstBarClicked
                            ? "h-[2.625rem] w-[1.6px] absolute top-[7.6rem]  border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                            : firstBarClicked5
                              ? "h-[2.625rem] w-[1.6px] absolute top-[10.1rem] border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                              : secondBarClicked
                                ? "h-[2.625rem] w-[1.6px] absolute top-[12.55rem] border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                                : thirdBarClicked
                                  ? "h-[2.625rem] w-[1.6px] absolute top-[15rem] border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                                  : fourthBarClicked
                                    ? "h-[2.625rem] w-[1.6px] absolute top-[17.45rem] border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                                    : "h-[2.625rem] w-[1.6px] absolute border border-[#64ffda] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                  }
                ></div>
                {/* EcoFactor */}
                <div
                  onMouseOver={() => setFirstWorkHover2(true)}
                  onMouseOut={() => setFirstWorkHover2(false)}
                  onClick={handleFirstWorkClicked2}
                  className={
                    firstWorkHover2
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked2
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  EcoFactor
                </div>
                {/* lablab.ai */}
                <div
                  onMouseOver={() => setFirstWorkHover3(true)}
                  onMouseOut={() => setFirstWorkHover3(false)}
                  onClick={handleFirstWorkClicked3}
                  className={
                    firstWorkHover3
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked3
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  lablab.ai
                </div>
                {/* iCodeGuru */}
                <div
                  onMouseOver={() => setFirstWorkHover4(true)}
                  onMouseOut={() => setFirstWorkHover4(false)}
                  onClick={handleFirstWorkClicked4}
                  className={
                    firstWorkHover4
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked4
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  iCodeGuru
                </div>
                {/* SMIT */}
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
                  SMIT
                </div>
                {/* Stanford University */}
                <div
                  onMouseOver={() => setFirstWorkHover5(true)}
                  onMouseOut={() => setFirstWorkHover5(false)}
                  onClick={handleFirstWorkClicked5}
                  className={
                    firstWorkHover5
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked5
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Stanford Univ.
                </div>
                {/* ZWTech  */}
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
                  ZWTech
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
              {/* EcoFactor */}
              {(firstWorkClicked2 || noneWorkClicked) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Co-Founder & Dev Lead{" "}
                      <span className="antialiased text-[#64ffda]">@</span>
                      <span className="antialiased text-[#64ffda] relative">
                        <a
                          href="https://ecofactorsite.netlify.app/"
                          className="viewArchive"
                          target="_blank"
                        >
                          EcoFactor
                        </a>
                      </span>
                    </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      Feb 2024 - present{" "}
                    </div>
                    <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        As a Co-Founder, I'm putting my best efforts with my team into making <b>EcoFactor</b> a reality.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <b>As a Dev Lead</b>, my focus is on the development side of our project EcoFactor. I'm handling front-end, AI integration, and backend with my team. We, as Dev members, are working collaboratively on this project.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <b>EcoFactor</b> currently consists of a team of 7 members: 4 from Pakistan, 2 from Brazil, and 1 from Latvia.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* lablab.ai */}
              {(firstWorkClicked3) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Hackathon Enthusiast{" "}
                      <span className="antialiased text-[#64ffda]">@</span>
                      <span className="antialiased text-[#64ffda] relative">
                        <a
                          href="https://lablab.ai/"
                          className="viewArchive"
                          target="_blank"
                        >
                          lablab.ai
                        </a>
                      </span>
                    </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      Jun 2023 - present{" "}
                    </div>

                    <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://lablab.ai/u/@ahmad_jajja288"
                            target="_blank"
                          >
                            Participated&nbsp;
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
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Focused on enhancing my generative AI skills through these hackathons by building something cool.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Embraced the advent of ChatGPT, recognizing that everyone has equal opportunities in generative AI.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">

                        It's worth spending time in hackathons to create truly amazing and innovative projects using generative AI, LLMs, and other AI technologies.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Spent time in hackathons to create truly amazing and innovative projects using generative AI, LLMs, and other AI technologies.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* iCodeGuru */}
              {(firstWorkClicked4) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Trainer{" "}
                      <span className="antialiased text-[#64ffda]">@</span>
                      <span className="antialiased text-[#64ffda] relative">
                        <a
                          href="https://www.linkedin.com/company/icode-guru/mycompany/"
                          className="viewArchive"
                          target="_blank"
                        >
                          iCodeGuru
                        </a>
                      </span>
                    </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      Feb 2023 - present{" "}
                    </div>

                    <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Trainer and moderator at 𝐢𝐂𝐨𝐝𝐞𝐆𝐮𝐫𝐮 platform, with 20,000+ 𝐦𝐞𝐦𝐛𝐞𝐫𝐬.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Teaching 𝐏𝐲𝐭𝐡𝐨𝐧 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 and 𝐃𝐒𝐀 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Conducting 𝐰𝐞𝐞𝐤𝐥𝐲 𝐰𝐨𝐫𝐤𝐬𝐡𝐨𝐩𝐬 on key DSA topics to help underprivileged students learn freely.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Voluntarily taught the 𝐃𝐮𝐨𝐥𝐢𝐧𝐠𝐨 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐏𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐓𝐞𝐬𝐭 to students.
                      </div>
                    </div>
                    {/* 1 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/Ahmadjajja/LeetCode_Volunteer_Teaching"
                            target="_blank"
                          >
                            &nbsp;(𝐏𝐲𝐭𝐡𝐨𝐧, 𝐃𝐒𝐀, & 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞) 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 &nbsp;
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://www.facebook.com/watch/100063644695494/1341880143172469"
                            target="_blank"
                          >
                            &nbsp;(𝐃𝐮𝐨𝐥𝐢𝐧𝐠𝐨 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐏𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲) 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭&nbsp;
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* SMIT */}
              {(firstWorkClicked) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Tech Trainer{" "}
                      <span className="antialiased text-[#64ffda]">@</span>
                      <span className="antialiased text-[#64ffda] relative">
                        <a
                          href="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"
                          className="viewArchive"
                          target="_blank"
                        >
                          SMIT
                        </a>
                      </span>
                    </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      Dec 2022 - present{" "}
                    </div>

                    <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Instructed 1000+ students.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        My role involves delivering comprehensive training
                        sessions on the MERN stack, covering frontend and
                        backend development, database management, and mobile app
                        development using React Native.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        I aim to empower students to become proficient MERN
                        stack developers, providing them with practical
                        knowledge and guidance to build real-world applications
                        using the MERN stack.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Providing instructions in HTML5, CSS3, SCSS, SASS, Bootstrap 5, JavaScript ES6+, TypeScript, React JS (Context API, Router, State Management), React Native, Redux, Firebase, Firestore, Node JS (ExpressJS, Authentication, API Endpoint Handling), MongoDB, Heroku, Surge, Netlify (Hosting), Git, Github.
                      </div>
                    </div>
                    <div className="pt-[1.5rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="leading-[1.22rem]">

                        🔄 Courses

                      </div>
                    </div>
                    {/* 1 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/Ahmadjajja/AI-Chatbot"
                            target="_blank"
                          >
                            &nbsp;GenAI_Chatbot_1.0&nbsp;
                          </a>{" "} (Current)
                        </div>
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/Ahmadjajja/Backend_Development.git"
                            target="_blank"
                          >
                            &nbsp;Backend_Development_1.0&nbsp;
                          </a>{" "} (Completed)
                        </div>
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/Ahmadjajja/SMIT-Web-and-Mobile-Batch7"
                            target="_blank"
                          >
                            &nbsp;Full_Stack_Development_1.0&nbsp;
                          </a>{" "} (Current)
                        </div>
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/Ahmadjajja/Web_Designing_Crash_Course_A"
                            target="_blank"
                          >
                            &nbsp;Web_Designing_Bootcamp_1.0&nbsp;
                          </a>{" "} (Completed)
                        </div>
                      </div>
                    </div>
                    {/* 5 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/Ahmadjajja/Web_Designing_Crash_Course_B"
                            target="_blank"
                          >
                            &nbsp;Web_Designing_Bootcamp_2.0&nbsp;
                          </a>{" "} (Completed)
                        </div>
                      </div>
                    </div>
                    {/* 6 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/Ahmadjajja/SMIT-WMA-6-A-E"
                            target="_blank"
                          >
                            &nbsp;Frontend_Web_Development_1.0 &nbsp;
                          </a>{" "} (Completed)
                        </div>
                      </div>
                    </div>
                    {/* 7 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/Ahmadjajja/Mobile_Application_Development"
                            target="_blank"
                          >
                            &nbsp;Frontend_Mobile_Development_1.0 &nbsp;
                          </a>{" "} (Completed)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Section Leader Mentor */}
              {(firstWorkClicked5) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  {/* For firstWork */}
                  <div>
                    <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Section Leader Mentor{" "}
                      <span className="antialiased text-[#64ffda]">@</span>
                      <span className="antialiased text-[#64ffda] relative">
                        <a
                          href="https://codeinplace.stanford.edu/"
                          className="viewArchive"
                          target="_blank"
                        >
                          Stanford University
                        </a>
                      </span>
                    </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      Apr 2024 - jun 2024{" "}
                    </div>

                    <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Selected as a <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7186385467846639620/"
                            target="_blank"
                          >
                            Section Leader
                          </a>{" "}
                        </div> for 𝐒𝐭𝐚𝐧𝐟𝐨𝐫𝐝’𝐬 𝐂𝐨𝐝𝐞 𝐢𝐧 𝐏𝐥𝐚𝐜𝐞 to teach 𝐏𝐲𝐭𝐡𝐨𝐧 to international students in groups of 10-15.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Later, I was <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://www.linkedin.com/posts/ahmad-jajja_stanfordabrcodeabrinabrplaceabrlearnings-activity-7195142429073633281-zNhV/?utm_source=share&utm_medium=member_desktop"
                            target="_blank"
                          >
                            promoted to Section Leader Mentor
                          </a>{" "}
                        </div> for 𝐨𝐧𝐞-𝐨𝐧-𝐨𝐧𝐞 𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 and taught 56 𝐓𝐞𝐚𝐜𝐡𝐍𝐨𝐰 𝐬𝐞𝐬𝐬𝐢𝐨𝐧𝐬.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        I helped 100+ 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐟𝐨𝐥𝐤𝐬 worldwide, including countries like the 𝐔𝐒𝐀, 𝐂𝐚𝐧𝐚𝐝𝐚, 𝐑𝐮𝐬𝐬𝐢𝐚, 𝐭𝐡𝐞 𝐔𝐊, 𝐈𝐧𝐝𝐢𝐚, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡, 𝐁𝐫𝐚𝐳𝐢𝐥, 𝐆𝐞𝐫𝐦𝐚𝐧𝐲, and others.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Observed students aged 18-80, showcasing 𝐮𝐧𝐢𝐯𝐞𝐫𝐬𝐚𝐥 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝐢𝐧 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠, even among those 𝐨𝐯𝐞𝐫 60.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* ZWTech */}
              {secondWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1.4rem] pb-[10px]">
                    MERN Stack Developer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a className="viewArchive">ZWTech</a>
                    </span>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Sep 2022 - Mar 2023{" "}
                  </div>

                  <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Implemented new features and modified existing ones on the
                      front-end using React JS for a business website similar to
                      LinkedIn, specifically designed for employee recruitment
                      for a UAE-based client.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Built a GraphQL API from scratch and modified existing
                      GraphQL APIs using Node.js on the back-end, facilitating
                      efficient data management and integration with the
                      Dashboard.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Contributed to the development of a comprehensive platform
                      that streamlined the hiring process for companies,
                      leveraging React JS for the front-end and a robust GraphQL
                      API with Node.js on the back-end, enhancing the client's
                      ability to find and hire suitable employees.
                    </div>
                  </div>
                </div>
              )}
              {/* Seeraht */}
              {thirdWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-[#ccd6f6] font-calibri leading-[1.2] text-[20px] antialiased">
                    MERN Stack Developer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a
                        href="https://seeraht.com/"
                        className="viewArchive"
                        target="_blank"
                      >
                        SEEHRAT
                      </a>
                    </span>
                  </div>
                  <div className="pt-[7px] text-[#a8b2d1] inline-block font-customMono text-[13px] antialiased">
                    May 2022 - Aug 2022{" "}
                  </div>

                  <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Developed and maintained web applications using the MERN
                      stack, focusing on delivering high-quality, scalable, and
                      efficient code for clients at Seeraht software company.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Collaborated with cross-functional teams to understand
                      business requirements and implemented technical solutions,
                      utilizing modern development techniques to design and
                      implement complex software features.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Conducted code reviews, participated in the software
                      development lifecycle, and troubleshooted and debugged
                      code issues. Demonstrated a deep understanding of the MERN
                      stack, Agile development practices, and effective
                      communication and collaboration skills to create
                      cutting-edge web applications that transformed business
                      operations.
                    </div>
                  </div>
                </div>
              )}
              {/* Frelancing */}
              {fourthWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased cursor-default">
                    MERN Stack Developer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a className="viewArchive">Fb and local Clients</a>
                    </span>
                  </div>
                  <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                    Nov 2021 - present{" "}
                  </div>
                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Developed and delivered a wide range of web-based
                      solutions, utilizing front-end technologies such as HTML,
                      CSS, and JavaScript, as well as back-end technologies such
                      as Node.js and Express js.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Built and maintained strong relationships with clients
                      through effective communication and problem-solving
                      skills, ensuring timely completion and adherence to
                      project requirements.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Accomplished in utilizing version control systems such as
                      Git and SVN, and implementing agile methodologies for
                      efficient project management.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Proven ability to work independently as well as part of a
                      team, successfully delivering projects on time and within
                      budget.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Experience with database management systems such as
                      MongoDB.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
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
                  {/* EcoFactor */}
                  <div
                    onClick={handleFirstWorkClicked2}
                    className={
                      firstWorkClicked2
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    EcoFactor
                  </div>
                  {/* lablab.ai */}
                  <div
                    onClick={handleFirstWorkClicked3}
                    className={
                      firstWorkClicked3
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    lablab.ai
                  </div>
                  {/* iCodeGuru */}
                  <div
                    onClick={handleFirstWorkClicked4}
                    className={
                      firstWorkClicked4
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    iCodeGuru
                  </div>
                  {/* SMIT */}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    SMIT
                  </div>
                  {/* Stanford University */}
                  <div
                    onClick={handleFirstWorkClicked5}
                    className={
                      firstWorkClicked5
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Stanford Univ.
                  </div>
                  {/* ZWTech  */}
                  <div
                    onClick={handleSecondWorkClicked}
                    className={
                      secondWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    ZWTech
                  </div>
                  {/* SEEHRAT */}
                  <div
                    onClick={handleThirdWorkClicked}
                    className={
                      thirdWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
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
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Freelancing
                  </div>
                  {/* <div style={borderBottomStyle} /> */}
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

                  {/* EcoFactor*/}
                  <div
                    onClick={handleFirstWorkClicked2}
                    className={
                      firstWorkClicked2
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    EcoFactor
                  </div>
                  {/* lablab.ai*/}
                  <div
                    onClick={handleFirstWorkClicked3}
                    className={
                      firstWorkClicked3
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    lablab.ai
                  </div>
                  {/* iCodeGuru*/}
                  <div
                    onClick={handleFirstWorkClicked4}
                    className={
                      firstWorkClicked4
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    iCodeGuru
                  </div>
                  {/* SMIT*/}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    SMIT
                  </div>
                  {/* Stanford University */}
                  <div
                    onClick={handleFirstWorkClicked5}
                    className={
                      firstWorkClicked4
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Stanford Univ.
                  </div>
                  {/* ZWTech  */}
                  <div
                    onClick={handleSecondWorkClicked}
                    className={
                      secondWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    ZWTech
                  </div>
                  {/* SEEHRAT */}
                  <div
                    onClick={handleThirdWorkClicked}
                    className={
                      thirdWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
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
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Freelancing
                  </div>
                  {/* <div style={borderBottomStyle} /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Lower Side */}
          <div className="ml-[10%] w-[70%] relative">
            {/* EcoFactor */}
            {(firstWorkClicked2 || noneWorkClicked) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Co-Founder & Dev Lead{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <a
                      href="https://ecofactorsite.netlify.app/"
                      className="antialiased text-[#64ffda] underline"
                      target="_blank"
                    >
                      EcoFactor
                    </a>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Feb 2024 - present{" "}
                  </div>

                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">

                      As a Co-Founder, I'm putting my best efforts with my team into making EcoFactor a reality.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      As a Dev Lead, my focus is on the development side of our project EcoFactor. I'm handling front-end, AI integration, and backend with my team. We, as Dev members, are working collaboratively on this project.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      EcoFactor currently consists of a team of 7 members: 4 from Pakistan, 2 from Brazil, and 1 from Latvia.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* lablab.ai */}
            {(firstWorkClicked3) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Hackathon Enthusiast{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <a
                      href="https://lablab.ai/"
                      className="antialiased text-[#64ffda] underline"
                      target="_blank"
                    >
                      lablab.ai
                    </a>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Jun 2023 - present{" "}
                  </div>

                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <div className="relative inline-block">
                        <a
                          className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                          href="https://lablab.ai/u/@ahmad_jajja288"
                          target="_blank"
                        >
                          Participated&nbsp;
                        </a>{" "}
                      </div>
                      in multiple AI International Hackathons and <div className="relative inline-block">
                        <a
                          className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                          href="https://www.linkedin.com/feed/update/urn:li:activity:7176624410651504641/"
                          target="_blank"
                        >
                          won&nbsp;
                        </a>{" "}
                      </div>
                      one of them (Unhallucinate Challenge).
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Focused on enhancing my generative AI skills through these hackathons by building something cool.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Embraced the advent of ChatGPT, recognizing that everyone has equal opportunities in generative AI.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      It's worth spending time in hackathons to create truly amazing and innovative projects using generative AI, LLMs, and other AI technologies.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Spent time in hackathons to create truly amazing and innovative projects using generative AI, LLMs, and other AI technologies.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* iCodeGuru */}
            {(firstWorkClicked4) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Trainer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <a
                      href="https://www.linkedin.com/company/icode-guru/mycompany/"
                      className="antialiased text-[#64ffda] underline"
                      target="_blank"
                    >
                      iCodeGuru
                    </a>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Feb 2023 - present{" "}
                  </div>

                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Trainer and moderator at 𝐢𝐂𝐨𝐝𝐞𝐆𝐮𝐫𝐮 platform, with 20,000+ 𝐦𝐞𝐦𝐛𝐞𝐫𝐬.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Teaching 𝐏𝐲𝐭𝐡𝐨𝐧 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 and 𝐃𝐒𝐀 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Conducting 𝐰𝐞𝐞𝐤𝐥𝐲 𝐰𝐨𝐫𝐤𝐬𝐡𝐨𝐩𝐬 on key DSA topics to help underprivileged students learn freely.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Voluntarily taught the 𝐃𝐮𝐨𝐥𝐢𝐧𝐠𝐨 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐏𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐓𝐞𝐬𝐭 to students.
                    </div>
                  </div>

                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/Ahmadjajja/LeetCode_Volunteer_Teaching"
                        target="_blank"
                      >
                        (𝐏𝐲𝐭𝐡𝐨𝐧, 𝐃𝐒𝐀, & 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞) 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭  &nbsp;
                      </a>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://www.facebook.com/watch/100063644695494/1341880143172469"
                        target="_blank"
                      >
                        (𝐃𝐮𝐨𝐥𝐢𝐧𝐠𝐨 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐏𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲) 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 &nbsp;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* SMIT */}
            {(firstWorkClicked) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Tech Trainer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <a
                      href="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"
                      className="antialiased text-[#64ffda] underline"
                      target="_blank"
                    >
                      SMIT
                    </a>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Dec 2022 - present{" "}
                  </div>

                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Instructed 1000+ students.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      My role involves delivering comprehensive training
                      sessions on the MERN stack, covering frontend and backend
                      development, database management, and mobile app
                      development using React Native.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      I aim to empower students to become proficient MERN stack
                      developers, providing them with practical knowledge and
                      guidance to build real-world applications using the MERN
                      stack.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Providing instructions in HTML5, CSS3, SCSS, SASS, Bootstrap 5, JavaScript ES6+, TypeScript, React JS (Context API, Router, State Management), React Native, Redux, Firebase, Firestore, Node JS (ExpressJS, Authentication, API Endpoint Handling), MongoDB, Heroku, Surge, Netlify (Hosting), Git, Github.
                    </div>
                  </div>

                  <div className="pt-[1.5rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="leading-[1.22rem]">
                      🔄 Courses
                    </div>
                  </div>
                  {/* 1 */}
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/Ahmadjajja/AI-Chatbot"
                        target="_blank"
                      >

                        GenAI_Chatbot_1.0&nbsp;
                      </a>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/Ahmadjajja/Backend_Development.git"
                        target="_blank"
                      >

                        Backend_Development_1.0 &nbsp;
                      </a>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/Ahmadjajja/SMIT-Web-and-Mobile-Batch7"
                        target="_blank"
                      >


                        Full_Stack_Development_1.0  &nbsp;
                      </a>{" "}
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/Ahmadjajja/Web_Designing_Crash_Course_A"
                        target="_blank"
                      >


                        Web_Designing_Bootcamp_1.0&nbsp;
                      </a>{" "}
                    </div>
                  </div>
                  {/* 5 */}
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/Ahmadjajja/Web_Designing_Crash_Course_B"
                        target="_blank"
                      >


                        Web_Designing_Bootcamp_2.0&nbsp;
                      </a>{" "}
                    </div>
                  </div>
                  {/* 6 */}
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/Ahmadjajja/SMIT-WMA-6-A-E"
                        target="_blank"
                      >

                        Frontend_Web_Development_1.0&nbsp;
                      </a>{" "}
                    </div>
                  </div>
                  {/* 7 */}
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/Ahmadjajja/Mobile_Application_Development"
                        target="_blank"
                      >

                        Frontend_Mobile_Development_1.0&nbsp;
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Stanford Univ. */}
            {(firstWorkClicked5) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Section Leader Mentor{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <a
                      href="https://codeinplace.stanford.edu/"
                      className="antialiased text-[#64ffda] underline"
                      target="_blank"
                    >
                      Stanford University
                    </a>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    Apr 2024 - Jun 2024{" "}
                  </div>

                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Selected as a <div className="relative inline-block">
                        <a
                          className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                          href="https://www.linkedin.com/feed/update/urn:li:activity:7186385467846639620/"
                          target="_blank"
                        >
                          Section Leader
                        </a>{" "}
                      </div> for 𝐒𝐭𝐚𝐧𝐟𝐨𝐫𝐝’𝐬 𝐂𝐨𝐝𝐞 𝐢𝐧 𝐏𝐥𝐚𝐜𝐞 to teach 𝐏𝐲𝐭𝐡𝐨𝐧 to international students in groups of 10-15.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Later, I was <div className="relative inline-block">
                        <a
                          className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                          href="https://www.linkedin.com/posts/ahmad-jajja_stanfordabrcodeabrinabrplaceabrlearnings-activity-7195142429073633281-zNhV/?utm_source=share&utm_medium=member_desktop"
                          target="_blank"
                        >
                          promoted to Section Leader Mentor
                        </a>{" "}
                      </div> for 𝐨𝐧𝐞-𝐨𝐧-𝐨𝐧𝐞 𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 and taught 56 𝐓𝐞𝐚𝐜𝐡𝐍𝐨𝐰 𝐬𝐞𝐬𝐬𝐢𝐨𝐧𝐬.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Conducting 𝐰𝐞𝐞𝐤𝐥𝐲 𝐰𝐨𝐫𝐤𝐬𝐡𝐨𝐩𝐬 on key DSA topics to help underprivileged students learn freely.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      I helped 100+ 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐟𝐨𝐥𝐤𝐬 worldwide, including countries like the 𝐔𝐒𝐀, 𝐂𝐚𝐧𝐚𝐝𝐚, 𝐑𝐮𝐬𝐬𝐢𝐚, 𝐭𝐡𝐞 𝐔𝐊, 𝐈𝐧𝐝𝐢𝐚, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡, 𝐁𝐫𝐚𝐳𝐢𝐥, 𝐆𝐞𝐫𝐦𝐚𝐧𝐲, and others.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Observed students aged 18-80, showcasing 𝐮𝐧𝐢𝐯𝐞𝐫𝐬𝐚𝐥 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝐢𝐧 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠, even among those 𝐨𝐯𝐞𝐫 60.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ZWTech  */}
            {secondWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1.4rem] pb-[10px]">
                  MERN Stack Developer{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <a className="antialiased text-[#64ffda] underline">ZWTech</a>
                </div>
                <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                  Sep 2022 - Mar 2023{" "}
                </div>

                <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Implemented new features and modified existing ones on the
                    front-end using React JS for a business website similar to
                    LinkedIn, specifically designed for employee recruitment for
                    a UAE-based client.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Built a GraphQL API from scratch and modified existing
                    GraphQL APIs using Node.js on the back-end, facilitating
                    efficient data management and integration with the
                    Dashboard.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Contributed to the development of a comprehensive platform
                    that streamlined the hiring process for companies,
                    leveraging React JS for the front-end and a robust GraphQL
                    API with Node.js on the back-end, enhancing the client's
                    ability to find and hire suitable employees.
                  </div>
                </div>
              </div>
            )}
            {/* SEERAHT */}
            {thirdWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-[#ccd6f6] font-calibri leading-[1.2] text-[20px] antialiased">
                  MERN Stack Developer{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <a
                    href="https://seeraht.com/"
                    className="antialiased text-[#64ffda] underline"
                  >
                    SEEHRAT
                  </a>
                </div>
                <div className="pt-[7px] text-[#a8b2d1] inline-block font-customMono text-[13px] antialiased">
                  May 2022 - Aug 2022{" "}
                </div>

                <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Developed and maintained web applications using the MERN
                    stack, focusing on delivering high-quality, scalable, and
                    efficient code for clients at Seeraht software company.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Collaborated with cross-functional teams to understand
                    business requirements and implemented technical solutions,
                    utilizing modern development techniques to design and
                    implement complex software features.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Conducted code reviews, participated in the software
                    development lifecycle, and troubleshooted and debugged code
                    issues. Demonstrated a deep understanding of the MERN stack,
                    Agile development practices, and effective communication and
                    collaboration skills to create cutting-edge web applications
                    that transformed business operations.
                  </div>
                </div>
              </div>
            )}
            {/* Freelancing */}
            {fourthWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased">
                  MERN Stack Developer{" "}
                  <span className="antialiased text-[#64ffda]">
                    @Fb and local Clients
                  </span>
                </div>
                <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                  Nov 2021 - present{" "}
                </div>
                <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Developed and delivered a wide range of web-based solutions,
                    utilizing front-end technologies such as HTML, CSS, and
                    JavaScript, as well as back-end technologies such as Node.js
                    and Express js.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Built and maintained strong relationships with clients
                    through effective communication and problem-solving skills,
                    ensuring timely completion and adherence to project
                    requirements.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Accomplished in utilizing version control systems such as
                    Git and SVN, and implementing agile methodologies for
                    efficient project management.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Proven ability to work independently as well as part of a
                    team, successfully delivering projects on time and within
                    budget.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Experience with database management systems such as MongoDB.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
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
