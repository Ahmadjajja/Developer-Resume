import { React, useEffect, useRef, useState } from "react";
import "../Css_applied/workStyles.css";

const Work = ({ experienceBtnClickedActive }) => {
  // Work
  const [firstWorkClicked, setFirstWorkClicked] = useState(false);
  const [firstWorkClicked2, setFirstWorkClicked2] = useState(true);
  const [firstWorkClicked3, setFirstWorkClicked3] = useState(false);
  const [firstWorkClicked4, setFirstWorkClicked4] = useState(false);
  const [firstWorkClicked5, setFirstWorkClicked5] = useState(false);
  const [firstWorkClicked6, setFirstWorkClicked6] = useState(false);
  const [firstWorkClicked7, setFirstWorkClicked7] = useState(false);
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
  const [firstBarClicked6, setFirstBarClicked6] = useState(false);
  const [firstBarClicked7, setFirstBarClicked7] = useState(false);

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
  const [firstWorkHover6, setFirstWorkHover6] = useState(false);
  const [firstWorkHover7, setFirstWorkHover7] = useState(false);

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
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(false);

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
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(false);

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
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(false);

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
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(false);

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
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(false);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked5();
  };
  const handleFirstWorkClicked6 = () => {
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);
    setFirstWorkClicked6(true);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked6();
  };
  const handleFirstWorkClicked7 = () => {
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(true);

    setNoneWorkClicked(false);
    setSecondWorkClicked(false);
    setThirdWorkClicked(false);
    setFourthWorkClicked(false);
    handleFirstBarClicked7();
  };


  const handleSecondWorkClicked = () => {
    setSecondWorkClicked(true);

    setNoneWorkClicked(false);
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);
    setFirstWorkClicked4(false);
    setFirstWorkClicked5(false);
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(false);

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
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(false);

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
    setFirstWorkClicked6(false);
    setFirstWorkClicked7(false);

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
    setFirstBarClicked6(false);
    setFirstBarClicked7(false);

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
    setFirstBarClicked6(false);
    setFirstBarClicked7(false);

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
    setFirstBarClicked6(false);
    setFirstBarClicked7(false);

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
    setFirstBarClicked6(false);
    setFirstBarClicked7(false);

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
    setFirstBarClicked6(false);
    setFirstBarClicked7(false);

    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleFirstBarClicked6 = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
    setFirstBarClicked4(false);
    setFirstBarClicked5(false);
    setFirstBarClicked6(true);

    setSecondBarClicked(false);
    setThirdBarClicked(false);
    setFourthBarClicked(false);
  };
  const handleFirstBarClicked7 = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
    setFirstBarClicked4(false);
    setFirstBarClicked5(false);
    setFirstBarClicked6(false);
    setFirstBarClicked7(true);

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
    setFirstBarClicked6(false);
    setFirstBarClicked7(false);

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
    setFirstBarClicked6(false);
    setFirstBarClicked7(false);

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
    setFirstBarClicked6(false);
    setFirstBarClicked7(false);

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
          <div className="inline-block absolute top-[6.7rem] text-accent font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
            02.
          </div>{" "}
          <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-heading text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
            Where I've Worked
            <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
          </div>
          <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[rgba(148,163,184,0.2)] workScreen4:hidden workScreen6:left-[50%] workScreen7:w-[22rem]"></div>
        </div>
        {/* When screen > 500px */}
        <div
          className={`contentContainer ${isVisibleTwo ? "show" : ""
            } block workScreen1:hidden`}
        >
          <div className="flex">
            {/* Left Side */}
            <div className="w-[20%] myScreen1:w-[8rem] workScreen10:w-[25.5%]">
              <div className="h-auto relative border-l-[1px] border-l-muted rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay">
                <div
                  className={
                    firstBarClicked2
                      ? "h-[2.625rem] w-[1.6px] absolute top-0 border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                      : firstBarClicked3
                        ? "h-[2.625rem] w-[1.6px] absolute top-[2.45rem] border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                        : firstBarClicked4
                          ? "h-[2.625rem] w-[1.6px] absolute top-[4.9rem] border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                          : firstBarClicked
                            ? "h-[2.625rem] w-[1.6px] absolute top-[7.6rem]  border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                            : firstBarClicked5
                              ? "h-[2.625rem] w-[1.6px] absolute top-[10.1rem] border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                              : secondBarClicked
                                ? "h-[2.625rem] w-[1.6px] absolute top-[12.55rem] border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                                : thirdBarClicked
                                  ? "h-[2.625rem] w-[1.6px] absolute top-[15rem] border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                                  : fourthBarClicked
                                    ? "h-[2.625rem] w-[1.6px] absolute top-[12.55rem] border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                                    : "h-[2.625rem] w-[1.6px] absolute border border-accent rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay"
                  }
                ></div>
                {/* Marsh Labs */}
                <div
                  onMouseOver={() => setFirstWorkHover2(true)}
                  onMouseOut={() => setFirstWorkHover2(false)}
                  onClick={handleFirstWorkClicked2}
                  className={
                    firstWorkHover2
                      ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                      : firstWorkClicked2
                        ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                        : "h-[2.532rem] text-muted text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Marsh Labs
                </div>
                {/* VIDAVA AI */}
                <div
                  onMouseOver={() => setFirstWorkHover3(true)}
                  onMouseOut={() => setFirstWorkHover3(false)}
                  onClick={handleFirstWorkClicked3}
                  className={
                    firstWorkHover3
                      ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                      : firstWorkClicked3
                        ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                        : "h-[2.532rem] text-muted text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  VIDAVA AI
                </div>
                {/* EcoFactor */}
                <div
                  onMouseOver={() => setFirstWorkHover4(true)}
                  onMouseOut={() => setFirstWorkHover4(false)}
                  onClick={handleFirstWorkClicked4}
                  className={
                    firstWorkHover4
                      ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                      : firstWorkClicked4
                        ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                        : "h-[2.532rem] text-muted text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  EcoFactor
                </div>
                {/* ZAWTech AI */}
                <div
                  onMouseOver={() => setFirstWorkHover(true)}
                  onMouseOut={() => setFirstWorkHover(false)}
                  onClick={handleFirstWorkClicked}
                  className={
                    firstWorkHover
                      ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                      : firstWorkClicked
                        ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                        : "h-[2.532rem] text-muted text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  ZAWTech AI
                </div>
                {/* Seeraht */}
                <div
                  onMouseOver={() => setFirstWorkHover5(true)}
                  onMouseOut={() => setFirstWorkHover5(false)}
                  onClick={handleFirstWorkClicked5}
                  className={
                    firstWorkHover5
                      ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                      : firstWorkClicked5
                        ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                        : "h-[2.532rem] text-muted text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Seeraht
                </div>
                {/* Freelancing */}
                <div
                  onMouseOver={() => setFourthWorkHover(true)}
                  onMouseOut={() => setFourthWorkHover(false)}
                  onClick={handleFourthWorkClicked}
                  className={
                    fourthWorkHover
                      ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                      : fourthWorkClicked
                        ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[var(--color-surface)]"
                        : "h-[2.532rem] text-muted text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Freelancing
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="ml-[10%] w-[70%] relative workScreen10:w-[70%] workScreen10:ml-[4.5%]">
              {/* Marsh Labs */}
              {(firstWorkClicked2 || noneWorkClicked) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                  Software Engineer Intern{" "}
                      <span className="antialiased text-accent">@</span>
                      <span className="antialiased text-accent relative">
                        <a
                          href="#"
                          className="viewArchive"
                          target="_blank"
                        >
                          Marsh Labs, Montana State University
                        </a>
                      </span>
                    </div>
                    <div className="text-dim font-customMono text-[13px] antialiased">
                      May 2025 – Sep 2025{" "}
                    </div>
                    <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Developed a Python desktop app (Tkinter, GeoPandas, Matplotlib) for geospatial mapping, reducing map generation time by 98% for 100+ researchers.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Built an ETL pipeline migrating 150K+ biological records into a structured relational model, reducing data retrieval time by 70%.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Built an agentic AI pipeline with GPT-4o, LangChain, RAG, and function calling to automate species filtering and county-level map generation.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* VIDAVA AI */}
              {(firstWorkClicked3) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Founding Software Engineer{" "}
                      <span className="antialiased text-accent">@</span>
                      <span className="antialiased text-accent relative">
                        <a
                          href="#"
                          className="viewArchive"
                          target="_blank"
                        >
                          VIDAVA AI
                        </a>
                      </span>
                    </div>
                    <div className="text-dim font-customMono text-[13px] antialiased">
                      Sep 2024 – Dec 2024{" "}
                    </div>

                    <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Built a JavaScript Chrome extension that detected checkout pages across 100+ e-commerce sites and improved rewards by 15-30%.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Built backend infrastructure with Node.js, JWT, and MongoDB, supporting 5K+ real-time API requests per month with zero downtime.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Implemented fuzzy string matching that reduced card misidentification by 90% across 50+ credit cards.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* EcoFactor */}
              {(firstWorkClicked4) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Founding Software Engineer{" "}
                      <span className="antialiased text-accent">@</span>
                      <span className="antialiased text-accent relative">
                        <a
                          href="https://ecofactorsite.netlify.app/"
                          className="viewArchive"
                          target="_blank"
                        >
                          EcoFactor
                        </a>
                      </span>
                    </div>
                    <div className="text-dim font-customMono text-[13px] antialiased">
                      Feb 2024 – Sep 2024{" "}
                    </div>

                    <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Co-founded and shipped an AI-powered ESG platform using GPT-4, Vectara RAG, Python, Flask, and React to process 500+ sustainability reports.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Designed REST APIs handling 10K+ requests per month with 99.5% uptime and managed a 7-person engineering team to deliver 4 core AI modules.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* ZAWTech AI */}
              {(firstWorkClicked) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Software Engineer{" "}
                      <span className="antialiased text-accent">@</span>
                      <span className="antialiased text-accent relative">
                        <a
                          href="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"
                          className="viewArchive"
                          target="_blank"
                        >
                          ZAWTech AI
                        </a>
                      </span>
                    </div>
                    <div className="text-dim font-customMono text-[13px] antialiased">
                      Aug 2022 – Feb 2024{" "}
                    </div>

                    <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Built React and Node.js GraphQL APIs for a recruitment platform, reducing average page load time by 40% for 1,000+ active hiring teams.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Optimized architecture and dashboard performance by 35%, reducing real-time data processing latency by 50%.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Shipped 10+ features cross-functionally while maintaining a 95%+ sprint delivery rate across 6 agile cycles.
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
                    <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Software Engineer Intern{" "}
                      <span className="antialiased text-accent">@</span>
                      <span className="antialiased text-accent relative">
                        <a
                          href="https://seeraht.com/"
                          className="viewArchive"
                          target="_blank"
                        >
                          Seeraht
                        </a>
                      </span>
                    </div>
                    <div className="text-dim font-customMono text-[13px] antialiased">
                      May 2022 – Aug 2022{" "}
                    </div>

                    <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Built and shipped an admission portal feature using React.js and Firebase, processing 2,000+ applications.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                      <div className="text-accent pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Integrated the feature into production and reduced admission processing time from weeks to hours across two intake cycles.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* ZWTech */}
              {secondWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-heading font-calibri text-[20px] antialiased leading-[1.4rem] pb-[10px]">
                    Software Engineer{" "}
                    <span className="antialiased text-accent">@</span>
                    <span className="antialiased text-accent relative">
                      <a className="viewArchive">ZAWTech AI</a>
                    </span>
                  </div>
                  <div className="text-dim font-customMono text-[13px] antialiased">
                    Aug 2022 – Feb 2024 · Faisalabad, Pakistan{" "}
                  </div>

                  <div className="mt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Developed React frontend and Node GraphQL APIs for a large-scale recruitment platform.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Implemented efficient data structures/algorithms for dashboards and real-time integration.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Led design team for scalable architecture and performance optimization.
                    </div>
                  </div>
                </div>
              )}
              {/* Seeraht */}
              {thirdWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-heading font-calibri leading-[1.2] text-[20px] antialiased">
                    Software Engineer Intern{" "}
                    <span className="antialiased text-accent">@</span>
                    <span className="antialiased text-accent relative">
                      <a
                        href="https://seeraht.com/"
                        className="viewArchive"
                        target="_blank"
                      >
                        Seeraht
                      </a>
                    </span>
                  </div>
                  <div className="pt-[7px] text-dim inline-block font-customMono text-[13px] antialiased">
                    May 2022 – Aug 2022 · Faisalabad, Pakistan{" "}
                  </div>

                  <div className="mt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Built and shipped an admission portal feature using React.js and Firebase, processing 2,000+ applications.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Integrated the feature into production, reducing admission processing time from weeks to hours across two intake cycles.
                    </div>
                  </div>
                </div>
              )}
              {/* Frelancing */}
              {fourthWorkClicked && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-heading leading-[1.2] font-calibri text-[20px] antialiased cursor-default">
                    MERN Stack Developer{" "}
                    <span className="antialiased text-accent">@</span>
                    <span className="antialiased text-accent relative">
                      <a className="viewArchive">Fb and local Clients</a>
                    </span>
                  </div>
                  <div className="text-dim pt-[7px] font-customMono text-[13px] antialiased">
                    Nov 2021 – Dec 2024{" "}
                  </div>
                  <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Developed and delivered a wide range of web-based
                      solutions, utilizing front-end technologies such as HTML,
                      CSS, and JavaScript, as well as back-end technologies such
                      as Node.js and Express js.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Built and maintained strong relationships with clients
                      through effective communication and problem-solving
                      skills, ensuring timely completion and adherence to
                      project requirements.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Accomplished in utilizing version control systems such as
                      Git and SVN, and implementing agile methodologies for
                      efficient project management.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Proven ability to work independently as well as part of a
                      team, successfully delivering projects on time and within
                      budget.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Experience with database management systems such as
                      MongoDB.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
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
                  className="flex smallScreenWorkWidth mb-[30px] border-b-[2px] border-[rgba(148,163,184,0.2)] z-0 overflow-x-scroll relative"
                >
                  {/* Marsh Labs */}
                  <div
                    onClick={handleFirstWorkClicked2}
                    className={
                      firstWorkClicked2
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Marsh Labs
                  </div>
                  {/* VIDAVA AI */}
                  <div
                    onClick={handleFirstWorkClicked3}
                    className={
                      firstWorkClicked3
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    VIDAVA AI
                  </div>
                  {/* EcoFactor */}
                  <div
                    onClick={handleFirstWorkClicked4}
                    className={
                      firstWorkClicked4
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    EcoFactor
                  </div>
                  {/* ZAWTech AI */}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    ZAWTech AI
                  </div>
                  {/* Seeraht */}
                  <div
                    onClick={handleFirstWorkClicked5}
                    className={
                      firstWorkClicked5
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Seeraht
                  </div>
                  {/* Freelancing */}
                  <div
                    onClick={handleFourthWorkClicked}
                    className={
                      fourthWorkClicked
                        ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
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
                <div className="flex mb-[30px] border-b-[2px] border-[rgba(148,163,184,0.2)] z-0 relative">

                  {/* Marsh Labs*/}
                  <div
                    onClick={handleFirstWorkClicked2}
                    className={
                      firstWorkClicked2
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Marsh Labs
                  </div>
                  {/* VIDAVA AI*/}
                  <div
                    onClick={handleFirstWorkClicked3}
                    className={
                      firstWorkClicked3
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    VIDAVA AI
                  </div>
                  {/* EcoFactor*/}
                  <div
                    onClick={handleFirstWorkClicked4}
                    className={
                      firstWorkClicked4
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    EcoFactor
                  </div>
                  {/* ZAWTech AI*/}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    ZAWTech AI
                  </div>
                  {/* Seeraht */}
                  <div
                    onClick={handleFirstWorkClicked5}
                    className={
                      firstWorkClicked5
                        ? "h-[2.532rem] text-accent text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Seeraht
                  </div>
                  {/* Freelancing */}
                  <div
                    onClick={handleFourthWorkClicked}
                    className={
                      fourthWorkClicked
                        ? "h-[2.532rem] text-accent text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[var(--color-surface)] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-muted text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
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
            {/* Marsh Labs */}
            {(firstWorkClicked2 || noneWorkClicked) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Software Engineer{" "}
                    <span className="antialiased text-accent">@</span>
                    <a
                      href="#"
                      className="antialiased text-accent underline"
                      target="_blank"
                    >
                      Marsh Labs, Montana State University
                    </a>
                  </div>
                  <div className="text-dim font-customMono text-[13px] antialiased">
                    May 2025 – Sep 2025 · Montana, USA{" "}
                  </div>

                  <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Automated 6+ Python desktop applications to reduce map generation from ~1 hour to seconds, saving hundreds of researcher hours.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Processed 150K+ biological records to produce county maps, species heatmaps, and scientific labels, replacing outdated Fortran tools.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Integrated Generative AI into the lab web platform; revamped frontend/backend with React & Node.js to boost productivity.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* VIDAVA AI */}
            {(firstWorkClicked3) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Founding Software Engineer{" "}
                    <span className="antialiased text-accent">@</span>
                    <a
                      href="#"
                      className="antialiased text-accent underline"
                      target="_blank"
                    >
                      VIDAVA AI
                    </a>
                  </div>
                  <div className="text-dim font-customMono text-[13px] antialiased">
                    Sep 2024 – Dec 2024{" "}
                  </div>

                  <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Built a JavaScript Chrome extension that detected checkout pages across 100+ e-commerce sites and improved rewards by 15-30%.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Built backend infrastructure with Node.js, JWT, and MongoDB, supporting 5K+ real-time API requests per month with zero downtime.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Implemented fuzzy string matching that reduced card misidentification by 90% across 50+ credit cards.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* EcoFactor */}
            {(firstWorkClicked4) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Founding Software Engineer{" "}
                    <span className="antialiased text-accent">@</span>
                    <a
                      href="https://ecofactorsite.netlify.app/"
                      className="antialiased text-accent underline"
                      target="_blank"
                    >
                      EcoFactor
                    </a>
                  </div>
                  <div className="text-dim font-customMono text-[13px] antialiased">
                    Feb 2024 – Sep 2024 · São Paulo, Brazil · Remote{" "}
                  </div>

                  <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Co-founded and shipped an AI-powered ESG platform using GPT-4, Vectara RAG, Python, Flask, and React to process 500+ sustainability reports.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Designed REST APIs handling 10K+ requests per month with 99.5% uptime and managed a 7-person engineering team to deliver 4 core AI modules.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Led architecture and code reviews to ship core AI modules on schedule.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ZAWTech AI */}
            {(firstWorkClicked) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Software Engineer{" "}
                    <span className="antialiased text-accent">@</span>
                    <a
                      href="https://pk.worldorgs.com/catalog/faisalabad/accountant/saylani-mass-training-faisalabad"
                      className="antialiased text-accent underline"
                      target="_blank"
                    >
                      ZAWTech AI
                    </a>
                  </div>
                  <div className="text-dim font-customMono text-[13px] antialiased">
                    Aug 2022 – Feb 2024{" "}
                  </div>

                  <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Built React and Node.js GraphQL APIs for a recruitment platform, reducing average page load time by 40% for 1,000+ active hiring teams.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Optimized architecture and dashboard performance by 35%, reducing real-time data processing latency by 50%.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Shipped 10+ features cross-functionally while maintaining a 95%+ sprint delivery rate across 6 agile cycles.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Seeraht */}
            {(firstWorkClicked5) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-heading font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Software Engineer Intern{" "}
                    <span className="antialiased text-accent">@</span>
                    <a
                      href="https://seeraht.com/"
                      className="antialiased text-accent underline"
                      target="_blank"
                    >
                      Seeraht
                    </a>
                  </div>
                  <div className="text-dim font-customMono text-[13px] antialiased">
                    May 2022 – Aug 2022{" "}
                  </div>

                  <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Built and shipped an admission portal feature using React.js and Firebase, processing 2,000+ applications.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                    <div className="text-accent pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Integrated the feature into production, reducing admission processing time from weeks to hours across two intake cycles.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ZWTech  */}
            {secondWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-heading font-calibri text-[20px] antialiased leading-[1.4rem] pb-[10px]">
                  Software Engineer{" "}
                  <span className="antialiased text-accent">@</span>
                  <a className="antialiased text-accent underline">ZAWTech AI</a>
                </div>
                <div className="text-dim font-customMono text-[13px] antialiased">
                  Aug 2022 – Feb 2024 · Faisalabad, Pakistan{" "}
                </div>

                <div className="mt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Developed React frontend and Node GraphQL APIs for a large-scale recruitment platform.
                  </div>
                </div>
                <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Implemented efficient data structures/algorithms for dashboards and real-time integration.
                  </div>
                </div>
                <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Led design team for scalable architecture and performance optimization.
                  </div>
                </div>
              </div>
            )}
            {/* SEERAHT */}
            {thirdWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-heading font-calibri leading-[1.2] text-[20px] antialiased">
                  Software Engineer Intern{" "}
                  <span className="antialiased text-accent">@</span>
                  <a
                    href="https://seeraht.com/"
                    className="antialiased text-accent underline"
                  >
                    Seeraht
                  </a>
                </div>
                <div className="pt-[7px] text-dim inline-block font-customMono text-[13px] antialiased">
                  May 2022 – Aug 2022 · Faisalabad, Pakistan{" "}
                </div>

                <div className="mt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Built and shipped an admission portal feature using React.js and Firebase, processing 2,000+ applications.
                  </div>
                </div>
                <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Integrated the feature into production, reducing admission processing time from weeks to hours across two intake cycles.
                  </div>
                </div>
              </div>
            )}
            {/* Freelancing */}
            {fourthWorkClicked && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-heading leading-[1.2] font-calibri text-[20px] antialiased">
                  MERN Stack Developer{" "}
                  <span className="antialiased text-accent">
                    @Fb and local Clients
                  </span>
                </div>
                <div className="text-dim pt-[7px] font-customMono text-[13px] antialiased">
                  Nov 2021 – Dec 2024{" "}
                </div>
                <div className="pt-[2.3rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Developed and delivered a wide range of web-based solutions,
                    utilizing front-end technologies such as HTML, CSS, and
                    JavaScript, as well as back-end technologies such as Node.js
                    and Express js.
                  </div>
                </div>
                <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Built and maintained strong relationships with clients
                    through effective communication and problem-solving skills,
                    ensuring timely completion and adherence to project
                    requirements.
                  </div>
                </div>
                <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Accomplished in utilizing version control systems such as
                    Git and SVN, and implementing agile methodologies for
                    efficient project management.
                  </div>
                </div>
                <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Proven ability to work independently as well as part of a
                    team, successfully delivering projects on time and within
                    budget.
                  </div>
                </div>
                <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Experience with database management systems such as MongoDB.
                  </div>
                </div>
                <div className="pt-[1rem] text-muted font-calibri text-[18px] antialiased flex">
                  <div className="text-accent pr-[1rem]">➾</div>{" "}
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

