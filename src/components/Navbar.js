import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css_applied/navbarStyles.css";

const navTransitionClass =
  "transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming delay-whereIWorkerdTransitionDelay duration-whereIWorkedTransitionDuration";

/** Set to true to show Blog (Pensieve) in the navbar again. Pensieve routes remain in App.js. */
const SHOW_BLOG_IN_NAV = false;

const Navbar = ({
  setAboutBtnClickedActive,
  setExperienceBtnClickedActive,
  setWorkBtnClickedActive,
  setContactBtnClickedActive,
}) => {
  const [isActive, setActive] = useState(false);
  const [isOffScreen, setOffScreen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [secondCondition, setSecondCondition] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [isSecondConditionAlreadyActive, setSecondConditionAlreadyActive] =
    useState(false);
  const [newStyles, setNewStyles] = useState(null);
  const [removeTransform, setRemoveTransform] = useState(false);
  const [height, setHeight] = useState("0px");
  // Show the navbar on small screen at greater height than 300
  const [showDiv, setShowDiv] = useState(false);
  // Show the navbar on small screen at less height than 300
  const [showSecondDiv, setShowSecondDiv] = useState(true);
  // Setting Mouse Over properties to nevbar Divs
  const [aboutMouseHover, setAboutMouseOver] = useState(false);
  const [expMouseHover, setExpMouseOver] = useState(false);
  const [workMouseHover, setWorkMouseOver] = useState(false);
  const [contactMouseHover, setContactMouseOver] = useState(false);
  const [blogMouseHover, setBlogMouseOver] = useState(false);
  // Resume Btn Mouse Hover and Click
  const [resumeMouseHover, setResumeMouseOver] = useState(false);
  const [resumeBtnClicked, setResumeBtnClicked] = useState(false);
  const [aboutBtnSm, setAboutBtnSm] = useState(false);
  const [experienceBtnSm, setExperienceBtnSm] = useState(false);
  const [workBtnSm, setWorkBtnSm] = useState(false);
  const [contactBtnSm, setContactBtnSm] = useState(false);
  const [blogBtnSm, setBlogBtnSm] = useState(false);

  /* Scroll-up: fixed bar must span the viewport (left/right) or the Resume button clips; parent overflow must not clip. */
  const divStyle = secondCondition
    ? {
        ...(newStyles || {}),
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        width: "100%",
        maxWidth: "100vw",
        boxSizing: "border-box",
        paddingLeft: "max(2.75rem, env(safe-area-inset-left))",
        paddingRight: "max(2.75rem, env(safe-area-inset-right))",
        paddingTop: "0.5rem",
        zIndex: 60,
        transform: removeTransform ? undefined : `translateY(${window.scrollY}px)`,
        boxShadow: "none",
        backgroundColor: "transparent",
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        transition:
          "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), top 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }
    : window.scrollY > 300
    ? {
        transform: "translateY(-56px)",
        zIndex: "60",
        transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
        top: "0px",
      }
    : null;

  const navWrapperClassName =
    scrollHeight >= 20
      ? secondCondition
        ? `w-[100%] -translate-y-0 ${navTransitionClass}`
        : `w-[100%] -translate-y-14 ${navTransitionClass} shadow-OtherProjectsBoxShadow`
      : `w-[100%] -translate-y-0 ${navTransitionClass}`;

  const ToggleClass = () => {
    if (isActive && isOffScreen) {
      setActive(false);
      setOffScreen(false);
    } else {
      setActive(true);
      setOffScreen(true);
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= 30 && window.scrollY < 200) {
      setScrollHeight(20);
    } else {
      setScrollHeight(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll2 = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 300) {
        if (currentScroll > previousScroll) {
          setSecondCondition(false);
        } else {
          setSecondCondition(true);
        }
        setPreviousScroll(currentScroll);
      }
      if (currentScroll < 300) {
        setSecondCondition(false);
      }
    };
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, [previousScroll]);

  useEffect(() => {
    if (secondCondition) {
      setSecondConditionAlreadyActive(true);
    } else {
      setSecondConditionAlreadyActive(false);
    }
  });

  useEffect(() => {
    if (isSecondConditionAlreadyActive) {
      setTimeout(() => {
        setNewStyles({
          position: "fixed",
          top: "0px",
          transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
        });
      }, 300);
    } else {
      setNewStyles(null);
    }
  }, [isSecondConditionAlreadyActive]);

  useEffect(() => {
    if (isSecondConditionAlreadyActive) {
      setTimeout(() => {
        setRemoveTransform(true);
      }, 300);
    } else {
      setRemoveTransform(false);
    }
  }, [isSecondConditionAlreadyActive]);

  useEffect(() => {
    setTimeout(() => {
      setHeight("93px");
    }, 500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowDiv(true);
        setShowSecondDiv(false);
      } else {
        setShowDiv(false);
        setShowSecondDiv(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowDiv, setShowSecondDiv]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (event) => {
    const element = document.getElementById("offScreenMenu");
    if (isActive) {
      if (!element.contains(event.target)) {
        setActive(false);
        setOffScreen(false);
      }
    }
  };

  // Setting the Colors of OffSetMenu options in small screen

  const handleAboutSmClicked = () => {
    setAboutBtnSm(true);
    setExperienceBtnSm(false);
    setWorkBtnSm(false);
    setContactBtnSm(false);
    setBlogBtnSm(false);
  };
  const handleexperienceSmClciked = () => {
    setExperienceBtnSm(true);
    setAboutBtnSm(false);
    setWorkBtnSm(false);
    setContactBtnSm(false);
    setBlogBtnSm(false);
  };
  const handleWorkSmClicked = () => {
    setWorkBtnSm(true);
    setAboutBtnSm(false);
    setExperienceBtnSm(false);
    setContactBtnSm(false);
    setBlogBtnSm(false);
  };
  const handleContactSmClicked = () => {
    setContactBtnSm(true);
    setAboutBtnSm(false);
    setExperienceBtnSm(false);
    setWorkBtnSm(false);
    setBlogBtnSm(false);
  };

  useEffect(() => {
    if (!isOffScreen) {
      setBlogBtnSm(false);
      setAboutBtnSm(false);
      setExperienceBtnSm(false);
      setWorkBtnSm(false);
      setContactBtnSm(false);
    }
  });

  // Making the offScreenMenu closed when the user scrolls

  useEffect(() => {
    const handleScroll = () => {
      if (isOffScreen && window.pageYOffset >= 2) {
        setOffScreen(false);
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOffScreen]);

  // Handling the functionality when a click happens on the sections of Navbar
  // About Div
  const handleAboutButtonClick = () => {
    setAboutBtnClickedActive(true);
    if (window.location.pathname !== "/") {
      // Redirect to home page
      window.location.href = "/";
    }
  };

  // Experience Div
  const handleExperienceButtonClick = () => {
    setExperienceBtnClickedActive(true);
    if (window.location.pathname !== "/") {
      // Redirect to home page
      window.location.href = "/";
    }
  };

  // Work Div
  const handleWorkButtonClick = () => {
    setWorkBtnClickedActive(true);
    if (window.location.pathname !== "/") {
      // Redirect to home page
      window.location.href = "/";
    }
  };

  // Contact Div
  const handleContactButtonClick = () => {
    setContactBtnClickedActive(true);
    if (window.location.pathname !== "/") {
      // Redirect to home page
      window.location.href = "/";
    }
  };

  useEffect(() => {
    if (!isActive) {
      setAboutBtnClickedActive(false);
      setExperienceBtnClickedActive(false);
      setWorkBtnClickedActive(false);
      setContactBtnClickedActive(false);
    }
  });
  // Making the Logo clickable
  const handleLogoClick = () => {
    window.location.href = "/";
    window.location.reload();
  };

  // Handling the clicks on the Navbar buttons when not on the main page
  useEffect(() => {
    // For medium and large Screens
    const button1 = document.querySelector("#aboutLarge");
    const button2 = document.querySelector("#experienceLarge");
    const button3 = document.querySelector("#workLarge");
    const button4 = document.querySelector("#contactLarge");

    const handleClick = (event) => {
      if (window.location.pathname === "/") {
        return;
      } else {
        window.location.pathname = "/";
      }
    };

    button1.addEventListener("click", handleClick);
    button2.addEventListener("click", handleClick);
    button3.addEventListener("click", handleClick);
    button4.addEventListener("click", handleClick);

    return () => {
      button1.addEventListener("click", handleClick);
      button2.addEventListener("click", handleClick);
      button3.addEventListener("click", handleClick);
      button4.addEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      {/* Small Screens Navbar with Hamburger */}
      {showDiv && (
        <div
          style={{
            height: height,
            overflow: "visible",
            transition: "height 1s ease-in-out",
          }}
          className="block md:hidden w-full min-w-0"
        >
          <div style={divStyle} className={navWrapperClassName}>
            <div>
              <div className="ml-[max(2rem,env(safe-area-inset-left))] mr-[max(2rem,env(safe-area-inset-right))] mt-[1.263rem] mb-[1.263rem] text-white flex justify-between relative z-[99] myScreen4:w-[16.5rem]">
                {/* First SVG  ---> LOGO */}
                {/* Hiding the logo for smaller screeens and making it visible for larger */}
                <div className="block myScreen8:hidden">
                  <a
                    href="/"
                    className="w-11  h-12  flex justify-center items-center"
                  >
                    <svg
                      id="logo"
                      className={isActive ? "styledLogo" : "unstyledLogo"}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 84 96"
                    >
                      <title>Logo</title>
                      <g transform="translate(-8.000000, -2.000000)">
                        <g transform="translate(11.000000, 5.000000)">
                          <text
                            x="29"
                            y="56"
                            fill="currentColor"
                            fontSize="40px"
                            fontFamily="Consolas, serif"
                          >
                            A
                          </text>
                          <polygon
                            className="main"
                            id="Shape"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="39 0 0 22 0 67 39 90 78 68 78 23"
                          ></polygon>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="hidden myScreen8:block">
                  <a
                    href="/"
                    className="w-11  h-12  flex justify-center items-center"
                  >
                    <svg
                      id="logo"
                      className={isActive ? "styledLogo" : "unstyledLogo"}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 84 96"
                    >
                      <title>Logo</title>
                      <g transform="translate(-8.000000, -2.000000)">
                        <g transform="translate(11.000000, 5.000000)">
                          <text
                            x="25"
                            y="57"
                            fill="currentColor"
                            fontSize="40px"
                            fontFamily="Consolas, serif"
                          >
                            A
                          </text>
                          <polygon
                            className="main"
                            id="Shape"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="39 0 0 22 0 67 39 90 78 68 78 23"
                          ></polygon>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>

                {/* Hamburger */}
                <div
                  className={
                    isOffScreen ? "off-screen-menu active" : "off-screen-menu"
                  }
                >
                  <div className=" flex  flex-col  justify-center  items-center bg-[var(--color-surface)]  mt-[3.5rem] w-[56vw] ml-6 overflow-hidden">
                    <div className="one  flex  justify-center  items-center bg-[var(--color-surface)] w-[100%]  text-accent  text-base antialiased">
                      01.
                    </div>
                    <button
                      id="aboutShowDiv"
                      onClick={handleAboutButtonClick}
                      className={`oneDescription  flex  justify-center  items-center w-[100%]  ${
                        aboutBtnSm ? "text-accent" : "text-heading"
                      }  bg-[var(--color-surface)]  py-2  text-lg  tracking-wide antialiased`}
                    >
                      About
                    </button>

                    <div className="two  mt-4  flex  justify-center  items-center  bg-[var(--color-surface)]  text-accent  w-[100%]  text-base antialiased">
                      02.
                    </div>
                    <button
                      onClick={handleExperienceButtonClick}
                      className={`twoDescription  flex  justify-center  items-center  w-[100%]  ${
                        experienceBtnSm ? "text-accent" : "text-heading"
                      }  bg-[var(--color-surface)]  py-2  text-lg  tracking-wide antialiased`}
                    >
                      Experience
                    </button>
                    <div className="three  mt-4  flex  justify-center  items-center  bg-[var(--color-surface)]  text-accent  w-[100%]  text-base antialiased">
                      03.
                    </div>
                    <button
                      onClick={handleWorkButtonClick}
                      className={`threeDescription  flex  justify-center  items-center  w-[100%]  ${
                        workBtnSm ? "text-accent" : "text-heading"
                      }  bg-[var(--color-surface)]   py-2  text-lg  tracking-wide antialiased`}
                    >
                      Work
                    </button>
                    <div className="four  mt-4  flex  justify-center  items-center  bg-[var(--color-surface)]  text-accent  w-[100%]  text-base antialiased">
                      04.
                    </div>
                    <button
                      onClick={handleContactButtonClick}
                      className={`fourDescription  flex  justify-center  items-center  w-[100%]  ${
                        contactBtnSm ? "text-accent" : "text-heading"
                      }  bg-[var(--color-surface)]  text-lg  py-2  tracking-wide antialiased`}
                    >
                      Contact
                    </button>
                    <div
                      className={
                        SHOW_BLOG_IN_NAV
                          ? "contents"
                          : "hidden"
                      }
                      aria-hidden={!SHOW_BLOG_IN_NAV}
                    >
                      <div className="five  mt-4  flex  justify-center  items-center  bg-[var(--color-surface)]  text-accent  w-[100%]  text-base antialiased">
                        05.
                      </div>
                      <Link
                        to="/pensieve"
                        onClick={() => {
                          setOffScreen(false);
                          setActive(false);
                        }}
                        className={`fiveDescription  flex  justify-center  items-center  w-[100%]  ${
                          blogBtnSm ? "text-accent" : "text-heading"
                        }  bg-[var(--color-surface)]  text-lg  py-2  tracking-wide antialiased`}
                      >
                        Blog
                      </Link>
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1fgKw7H3PplIenkF-pxfqWdMAnvZcCeA0/view?usp=share_link"
                      className="py-[18px] px-[50px] flex  justify-center  items-center  mt-[4rem]  bg-[var(--color-surface)] border  border-accent  rounded  font-mono  text-accent  tracking-wide cursor-pointer antialiased"
                      target="_blank"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <div
                  className=" w-[3.693rem]  h-[3.217rem] flex justify-center items-center"
                  onClick={ToggleClass}
                >
                  <div
                    className={
                      isActive ? "hamburger-menu active" : "hamburger-menu"
                    }
                  >
                    <div
                      className={
                        isActive
                          ? "ham-bar bar-top"
                          : "ham-bar-isActiveFalse bar-top-isActiveFalse"
                      }
                    ></div>
                    <div
                      className={
                        isActive
                          ? "ham-bar bar-mid"
                          : "ham-bar-isActiveFalse bar-mid-isActiveFalse"
                      }
                    ></div>
                    <div
                      className={
                        isActive
                          ? "ham-bar bar-bottom"
                          : "ham-bar-isActiveFalse bar-bottom-isActiveFalse"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSecondDiv && (
        <div className="block md:hidden">
          <div
            className={
              "ml-[max(2rem,env(safe-area-inset-left))] mr-[max(2rem,env(safe-area-inset-right))] mt-[1.263rem] mb-[1.263rem] text-white flex justify-between z-50 myScreen4:w-[16.5rem]"
            }
          >
            {/* First SVG  ---> LOGO */}
            <div className="block myScreen8:hidden">
              <a
                href="/"
                className="w-11  h-12  flex justify-center items-center"
              >
                <svg
                  id="logo"
                  className={isActive ? "styledLogo" : "unstyledLogo"}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 84 96"
                >
                  <title>Logo</title>
                  <g transform="translate(-8.000000, -2.000000)">
                    <g transform="translate(11.000000, 5.000000)">
                      <text
                        x="29"
                        y="56"
                        fill="currentColor"
                        fontSize="40px"
                        fontFamily="Consolas, serif"
                      >
                        A
                      </text>
                      <polygon
                        className="main"
                        id="Shape"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="39 0 0 22 0 67 39 90 78 68 78 23"
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="hidden myScreen8:block">
              <a
                href="/"
                className="w-11  h-12  flex justify-center items-center"
              >
                <svg
                  id="logo"
                  className={isActive ? "styledLogo" : "unstyledLogo"}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 84 96"
                >
                  <title>Logo</title>
                  <g transform="translate(-8.000000, -2.000000)">
                    <g transform="translate(11.000000, 5.000000)">
                      <text
                        x="25"
                        y="57"
                        fill="currentColor"
                        fontSize="40px"
                        fontFamily="Consolas, serif"
                      >
                        A
                      </text>
                      <polygon
                        className="main"
                        id="Shape"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="39 0 0 22 0 67 39 90 78 68 78 23"
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </a>
            </div>

            {/* Hamburger */}
            <div
              className={
                isOffScreen ? "off-screen-menu active" : "off-screen-menu"
              }
            >
              <div className=" flex  flex-col  justify-center  items-center bg-[var(--color-surface)]  mt-[3.5rem] w-[56vw] ml-6 overflow-hidden">
                <div className="one  flex  justify-center  items-center bg-[var(--color-surface)] w-[100%]  text-accent  text-base antialiased">
                  01.
                </div>
                <button
                  onClick={() => {
                    handleAboutSmClicked();
                    handleAboutButtonClick();
                  }}
                  className={`oneDescription  flex  justify-center  items-center w-[100%]  ${
                    aboutBtnSm ? "text-accent" : "text-heading"
                  }  bg-[var(--color-surface)]  py-2  text-lg  tracking-wide antialiased`}
                >
                  About
                </button>
                <div className="two  mt-4  flex  justify-center  items-center  bg-[var(--color-surface)]  text-accent  w-[100%]  text-base antialiased">
                  02.
                </div>
                <button
                  onClick={() => {
                    handleexperienceSmClciked();
                    handleExperienceButtonClick();
                  }}
                  className={`twoDescription  flex  justify-center  items-center  w-[100%]  ${
                    experienceBtnSm ? "text-accent" : "text-heading"
                  }  bg-[var(--color-surface)]  py-2  text-lg  tracking-wide antialiased`}
                >
                  Experience
                </button>
                <div className="three  mt-4  flex  justify-center  items-center  bg-[var(--color-surface)]  text-accent  w-[100%]  text-base antialiased">
                  03.
                </div>
                <button
                  onClick={() => {
                    handleWorkSmClicked();
                    handleWorkButtonClick();
                  }}
                  className={`threeDescription  flex  justify-center  items-center  w-[100%]  ${
                    workBtnSm ? "text-accent" : "text-heading"
                  }  bg-[var(--color-surface)]   py-2  text-lg  tracking-wide antialiased`}
                >
                  Work
                </button>
                <div className="four  mt-4  flex  justify-center  items-center  bg-[var(--color-surface)]  text-accent  w-[100%]  text-base antialiased">
                  04.
                </div>
                <button
                  onClick={() => {
                    handleContactSmClicked();
                    handleContactButtonClick();
                  }}
                  className={`fourDescription  flex  justify-center  items-center  w-[100%]  ${
                    contactBtnSm ? "text-accent" : "text-heading"
                  }  bg-[var(--color-surface)]  text-lg  py-2  tracking-wide antialiased`}
                >
                  Contact
                </button>
                <div
                  className={
                    SHOW_BLOG_IN_NAV
                      ? "contents"
                      : "hidden"
                  }
                  aria-hidden={!SHOW_BLOG_IN_NAV}
                >
                  <div className="five  mt-4  flex  justify-center  items-center  bg-[var(--color-surface)]  text-accent  w-[100%]  text-base antialiased">
                    05.
                  </div>
                  <Link
                    to="/pensieve"
                    onClick={() => {
                      setOffScreen(false);
                      setActive(false);
                    }}
                    className={`fiveDescription  flex  justify-center  items-center  w-[100%]  ${
                      blogBtnSm ? "text-accent" : "text-heading"
                    }  bg-[var(--color-surface)]  text-lg  py-2  tracking-wide antialiased`}
                  >
                    Blog
                  </Link>
                </div>
                <a
                  href="https://drive.google.com/file/d/1fgKw7H3PplIenkF-pxfqWdMAnvZcCeA0/view?usp=share_link"
                  className="py-[18px] px-[50px] flex  justify-center  items-center  mt-[4rem]  bg-[var(--color-surface)] border  border-accent  rounded  font-mono  text-accent  tracking-wide cursor-pointer antialiased"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
            <div
              className=" w-[3.693rem]  h-[3.217rem] flex justify-center items-center"
              onClick={ToggleClass}
            >
              <div
                className={
                  isActive ? "hamburger-menu active" : "hamburger-menu"
                }
              >
                <div
                  className={
                    isActive
                      ? "ham-bar bar-top"
                      : "ham-bar-isActiveFalse bar-top-isActiveFalse"
                  }
                ></div>
                <div
                  className={
                    isActive
                      ? "ham-bar bar-mid"
                      : "ham-bar-isActiveFalse bar-mid-isActiveFalse"
                  }
                ></div>
                <div
                  className={
                    isActive
                      ? "ham-bar bar-bottom"
                      : "ham-bar-isActiveFalse bar-bottom-isActiveFalse"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Medium Screens Navbar */}
      <div>
        <div
          style={{
            height: height,
            overflow: "visible",
            transition: "height 1s ease-in-out",
          }}
          className="box-border hidden w-full min-w-0 max-w-full pl-[max(2.75rem,env(safe-area-inset-left))] pr-[max(2.75rem,env(safe-area-inset-right))] my-[0.4rem] md:flex"
        >
          <div style={divStyle} className={navWrapperClassName}>
            <div className="navbar-desktop mt-[1.263rem] mb-[1.263rem] flex w-full min-w-0 flex-row flex-wrap items-center justify-between gap-x-2 gap-y-3 text-white z-50">
              {/* First SVG  ---> LOGO */}
              <a
                href="/"
                onClick={handleLogoClick}
                className="shrink-0 cursor-pointer w-11 h-12 flex justify-center items-center"
              >
                <svg
                  id="logo"
                  className={isActive ? "styledLogo" : "unstyledLogo"}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 84 96"
                >
                  <title>Logo</title>
                  <g transform="translate(-8.000000, -2.000000)">
                    <g transform="translate(11.000000, 5.000000)">
                      <text
                        x="29"
                        y="56"
                        fill="currentColor"
                        fontSize="40px"
                        fontFamily="Consolas, serif"
                      >
                        A
                      </text>
                      <polygon
                        className="main"
                        id="Shape"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="39 0 0 22 0 67 39 90 78 68 78 23"
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </a>
              {/* Title — never force nowrap on md; that clipped the Resume button on typical laptop widths */}
              <div className="flex min-w-0 max-w-full flex-1 flex-wrap items-center justify-end gap-x-0.5 gap-y-2 antialiased sm:gap-x-1">
                <div className="text-[13px] px-2 py-2 no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer font-customMono">
                  <span className="text-accent mr-[3px]">01.</span>
                  <span
                    id="aboutLarge"
                    onClick={handleAboutButtonClick}
                    onMouseOver={() => setAboutMouseOver(true)}
                    onMouseOut={() => setAboutMouseOver(false)}
                    className={
                      aboutMouseHover ? "text-accent" : "text-heading"
                    }
                  >
                    About
                  </span>
                </div>
                <span
                  id="experienceLarge"
                  className="text-[13px] px-2 py-2 no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer font-customMono"
                >
                  <span className="text-accent mr-[3px]">02.</span>
                  <span
                    onClick={handleExperienceButtonClick}
                    onMouseOver={() => setExpMouseOver(true)}
                    onMouseOut={() => setExpMouseOver(false)}
                    className={
                      expMouseHover ? "text-accent" : "text-heading"
                    }
                  >
                    Experience
                  </span>
                </span>
                <span
                  id="workLarge"
                  className="text-[13px] px-2 py-2 no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer font-customMono"
                >
                  <span className="text-accent mr-[3px]">03.</span>
                  <span
                    onClick={handleWorkButtonClick}
                    onMouseOver={() => setWorkMouseOver(true)}
                    onMouseOut={() => setWorkMouseOver(false)}
                    className={
                      workMouseHover ? "text-accent" : "text-heading"
                    }
                  >
                    Work
                  </span>
                </span>
                <span
                  id="contactLarge"
                  className="text-[13px] px-2 py-2 no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer font-customMono"
                >
                  <span className="text-accent mr-[3px]">04.</span>
                  <span
                    onClick={handleContactButtonClick}
                    onMouseOver={() => setContactMouseOver(true)}
                    onMouseOut={() => setContactMouseOver(false)}
                    className={
                      contactMouseHover ? "text-accent" : "text-heading"
                    }
                  >
                    Contact
                  </span>
                </span>
                <div
                  className={
                    SHOW_BLOG_IN_NAV
                      ? "contents"
                      : "hidden"
                  }
                  aria-hidden={!SHOW_BLOG_IN_NAV}
                >
                  <Link
                    to="/pensieve"
                    className="text-[13px] px-2 py-2 no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer font-customMono"
                  >
                    <span className="text-accent mr-[3px]">05.</span>
                    <span
                      onMouseOver={() => setBlogMouseOver(true)}
                      onMouseOut={() => setBlogMouseOver(false)}
                      className={
                        blogMouseHover ? "text-accent" : "text-heading"
                      }
                    >
                      Blog
                    </span>
                  </Link>
                </div>
                <a
                  href="https://drive.google.com/file/d/1fgKw7H3PplIenkF-pxfqWdMAnvZcCeA0/view"
                  onClick={() => {
                    setResumeBtnClicked(true);
                  }}
                  target="_blank"
                  rel="noreferrer"
                  onMouseOver={() => setResumeMouseOver(true)}
                  onMouseOut={() => setResumeMouseOver(false)}
                  className={
                    resumeBtnClicked
                      ? "ml-5 shrink-0 py-2.5 px-5 flex justify-center items-center bg-headerBtnColor border border-accent rounded font-mono text-accent cursor-pointer antialiased leading-[1]"
                      : resumeMouseHover
                      ? "ml-5 shrink-0 py-2.5 px-5 flex justify-center items-center bg-headerBtnColor border border-accent rounded font-mono text-accent cursor-pointer antialiased leading-[1]"
                      : "ml-5 shrink-0 py-2.5 px-5 flex justify-center items-center bg-transparent border border-accent rounded font-mono text-accent cursor-pointer antialiased leading-[1]"
                  }
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;