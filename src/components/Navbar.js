import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css_applied/navbarStyles.css";

const Navbar = ({
  setAboutBtnClickedActive,
  setExperienceBtnClickedActive,
  setWorkBtnClickedActive,
  setContactBtnClickedActive,
}) => {
  const navigate = useNavigate();
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

  const divStyle = secondCondition
    ? {
        width: "100%",
        paddingTop: "0.5rem",
        zIndex: "60",
        transform: removeTransform ? null : `translateY(${window.scrollY}px)`,
        boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
        marginTop: "-15px",
        ...newStyles,
        transition: "top 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
        top: `${scrollHeight}px`,
      }
    : window.scrollY > 300
    ? {
        transform: "translateY(-56px)",
        zIndex: "60",
        transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
        top: "0px",
      }
    : null;

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
            overflow: "hidden",
            transition: "height 1s ease-in-out",
          }}
          className="block md:hidden"
        >
          <div
            style={divStyle}
            className={
              scrollHeight >= 20
                ? "w-[100%]  -translate-y-14 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming delay-whereIWorkerdTransitionDelay duration-whereIWorkedTransitionDuration shadow-OtherProjectsBoxShadow"
                : "w-[100%]  -translate-y-0 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming delay-whereIWorkerdTransitionDelay duration-whereIWorkedTransitionDuration"
            }
          >
            <div>
              <div className="ml-[1.1rem] mt-[1.263rem] mb-[1.263rem] text-white flex justify-between relative z-[99] myScreen4:w-[16.5rem]">
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
                  <div className=" flex  flex-col  justify-center  items-center bg-[#172a45]  mt-[3.5rem] w-[56vw] ml-6 overflow-hidden">
                    <div className="one  flex  justify-center  items-center bg-[#172a45] w-[100%]  text-[#64ffda]  text-base antialiased">
                      01.
                    </div>
                    <button
                      id="aboutShowDiv"
                      onClick={handleAboutButtonClick}
                      className={`oneDescription  flex  justify-center  items-center w-[100%]  ${
                        aboutBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                      }  bg-[#172a45]  py-2  text-lg  tracking-wide antialiased`}
                    >
                      About
                    </button>

                    <div className="two  mt-4  flex  justify-center  items-center  bg-[#172a45]  text-[#64ffda]  w-[100%]  text-base antialiased">
                      02.
                    </div>
                    <button
                      onClick={handleExperienceButtonClick}
                      className={`twoDescription  flex  justify-center  items-center  w-[100%]  ${
                        experienceBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                      }  bg-[#172a45]  py-2  text-lg  tracking-wide antialiased`}
                    >
                      Experience
                    </button>
                    <div className="three  mt-4  flex  justify-center  items-center  bg-[#172a45]  text-[#64ffda]  w-[100%]  text-base antialiased">
                      03.
                    </div>
                    <button
                      onClick={handleWorkButtonClick}
                      className={`threeDescription  flex  justify-center  items-center  w-[100%]  ${
                        workBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                      }  bg-[#172a45]   py-2  text-lg  tracking-wide antialiased`}
                    >
                      Work
                    </button>
                    <div className="four  mt-4  flex  justify-center  items-center  bg-[#172a45]  text-[#64ffda]  w-[100%]  text-base antialiased">
                      04.
                    </div>
                    <button
                      onClick={handleContactButtonClick}
                      className={`fourDescription  flex  justify-center  items-center  w-[100%]  ${
                        contactBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                      }  bg-[#172a45]  text-lg  py-2  tracking-wide antialiased`}
                    >
                      Contact
                    </button>
                    <div className="five  mt-4  flex  justify-center  items-center  bg-[#172a45]  text-[#64ffda]  w-[100%]  text-base antialiased">
                      05.
                    </div>
                    <Link
                      to="/pensieve"
                      onClick={() => {
                        setOffScreen(false);
                        setActive(false);
                      }}
                      className={`fiveDescription  flex  justify-center  items-center  w-[100%]  ${
                        blogBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                      }  bg-[#172a45]  text-lg  py-2  tracking-wide antialiased`}
                    >
                      Blog
                    </Link>
                    <a
                      href="https://drive.google.com/file/d/1fgKw7H3PplIenkF-pxfqWdMAnvZcCeA0/view?usp=share_link"
                      className="py-[18px] px-[50px] flex  justify-center  items-center  mt-[4rem]  bg-[#172a45] border  border-[#64ffda]  rounded  font-mono  text-[#64ffda]  tracking-wide cursor-pointer antialiased"
                      target="_blank"
                    >
                      CV
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
              "ml-[1.371rem] mt-[1.263rem] mb-[1.263rem] mr-[1.371rem] text-white flex justify-between z-50 myScreen4:w-[16.5rem]"
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
              <div className=" flex  flex-col  justify-center  items-center bg-[#172a45]  mt-[3.5rem] w-[56vw] ml-6 overflow-hidden">
                <div className="one  flex  justify-center  items-center bg-[#172a45] w-[100%]  text-[#64ffda]  text-base antialiased">
                  01.
                </div>
                <button
                  onClick={() => {
                    handleAboutSmClicked();
                    handleAboutButtonClick();
                  }}
                  className={`oneDescription  flex  justify-center  items-center w-[100%]  ${
                    aboutBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                  }  bg-[#172a45]  py-2  text-lg  tracking-wide antialiased`}
                >
                  About
                </button>
                <div className="two  mt-4  flex  justify-center  items-center  bg-[#172a45]  text-[#64ffda]  w-[100%]  text-base antialiased">
                  02.
                </div>
                <button
                  onClick={() => {
                    handleexperienceSmClciked();
                    handleExperienceButtonClick();
                  }}
                  className={`twoDescription  flex  justify-center  items-center  w-[100%]  ${
                    experienceBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                  }  bg-[#172a45]  py-2  text-lg  tracking-wide antialiased`}
                >
                  Experience
                </button>
                <div className="three  mt-4  flex  justify-center  items-center  bg-[#172a45]  text-[#64ffda]  w-[100%]  text-base antialiased">
                  03.
                </div>
                <button
                  onClick={() => {
                    handleWorkSmClicked();
                    handleWorkButtonClick();
                  }}
                  className={`threeDescription  flex  justify-center  items-center  w-[100%]  ${
                    workBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                  }  bg-[#172a45]   py-2  text-lg  tracking-wide antialiased`}
                >
                  Work
                </button>
                <div className="four  mt-4  flex  justify-center  items-center  bg-[#172a45]  text-[#64ffda]  w-[100%]  text-base antialiased">
                  04.
                </div>
                <button
                  onClick={() => {
                    handleContactSmClicked();
                    handleContactButtonClick();
                  }}
                  className={`fourDescription  flex  justify-center  items-center  w-[100%]  ${
                    contactBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                  }  bg-[#172a45]  text-lg  py-2  tracking-wide antialiased`}
                >
                  Contact
                </button>
                <div className="five  mt-4  flex  justify-center  items-center  bg-[#172a45]  text-[#64ffda]  w-[100%]  text-base antialiased">
                  05.
                </div>
                <Link
                  to="/pensieve"
                  onClick={() => {
                    setOffScreen(false);
                    setActive(false);
                  }}
                  className={`fiveDescription  flex  justify-center  items-center  w-[100%]  ${
                    blogBtnSm ? "text-[#64ffda]" : "text-[#ccd6f6]"
                  }  bg-[#172a45]  text-lg  py-2  tracking-wide antialiased`}
                >
                  Blog
                </Link>
                <a
                  href="https://drive.google.com/file/d/1fgKw7H3PplIenkF-pxfqWdMAnvZcCeA0/view?usp=share_link"
                  className="py-[18px] px-[50px] flex  justify-center  items-center  mt-[4rem]  bg-[#172a45] border  border-[#64ffda]  rounded  font-mono  text-[#64ffda]  tracking-wide cursor-pointer antialiased"
                  target="_blank"
                >
                  CV
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
            overflow: "hidden",
            transition: "height 1s ease-in-out",
          }}
          className="hidden md:flex my-[0.4rem] mx-[1.371rem]"
        >
          <div
            style={divStyle}
            className={
              scrollHeight >= 20
                ? "w-[100%] -translate-y-14 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming delay-whereIWorkerdTransitionDelay duration-whereIWorkedTransitionDuration shadow-OtherProjectsBoxShadow"
                : "w-[100%] -translate-y-0 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming delay-whereIWorkerdTransitionDelay duration-whereIWorkedTransitionDuration"
            }
          >
            <div className="ml-[1rem] mt-[1.263rem]  mb-[1.263rem] text-white flex justify-between z-50 ">
              {/* First SVG  ---> LOGO */}
              <a
                href="/"
                onClick={handleLogoClick}
                className="cursor-pointer w-11 h-12 flex justify-center items-center"
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
              {/* Title */}
              <div className="flex justify-between items-center antialiased">
                <div className="text-[13px] p-[10px] no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer mr-[10px] font-customMono myScreen5:px-[5px]">
                  <span className="text-[#64ffda] mr-[3px]">01.</span>
                  <span
                    id="aboutLarge"
                    onClick={handleAboutButtonClick}
                    onMouseOver={() => setAboutMouseOver(true)}
                    onMouseOut={() => setAboutMouseOver(false)}
                    className={
                      aboutMouseHover ? "text-[#64ffda]" : "text-[#ccd6f6]"
                    }
                  >
                    About
                  </span>
                </div>
                <span
                  id="experienceLarge"
                  className="text-[13px] p-[10px] no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer mr-[10px] font-customMono myScreen5:px-[5px]"
                >
                  <span className="text-[#64ffda] mr-[3px]">02.</span>
                  <span
                    onClick={handleExperienceButtonClick}
                    onMouseOver={() => setExpMouseOver(true)}
                    onMouseOut={() => setExpMouseOver(false)}
                    className={
                      expMouseHover ? "text-[#64ffda]" : "text-[#ccd6f6]"
                    }
                  >
                    Experience
                  </span>
                </span>
                <span
                  id="workLarge"
                  className="text-[13px] p-[10px] no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer mr-[10px] font-customMono myScreen5:px-[5px]"
                >
                  <span className="text-[#64ffda] mr-[3px]">03.</span>
                  <span
                    onClick={handleWorkButtonClick}
                    onMouseOver={() => setWorkMouseOver(true)}
                    onMouseOut={() => setWorkMouseOver(false)}
                    className={
                      workMouseHover ? "text-[#64ffda]" : "text-[#ccd6f6]"
                    }
                  >
                    Work
                  </span>
                </span>
                <span
                  id="contactLarge"
                  className="text-[13px] p-[10px] no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer mr-[10px] font-customMono myScreen5:px-[5px]"
                >
                  <span className="text-[#64ffda] mr-[3px]">04.</span>
                  <span
                    onClick={handleContactButtonClick}
                    onMouseOver={() => setContactMouseOver(true)}
                    onMouseOut={() => setContactMouseOver(false)}
                    className={
                      contactMouseHover ? "text-[#64ffda]" : "text-[#ccd6f6]"
                    }
                  >
                    Contact
                  </span>
                </span>
                <Link
                  to="/pensieve"
                  className="text-[13px] p-[10px] no-underline transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming cursor-pointer mr-[10px] font-customMono myScreen5:px-[5px]"
                >
                  <span className="text-[#64ffda] mr-[3px]">05.</span>
                  <span
                    onMouseOver={() => setBlogMouseOver(true)}
                    onMouseOut={() => setBlogMouseOver(false)}
                    className={
                      blogMouseHover ? "text-[#64ffda]" : "text-[#ccd6f6]"
                    }
                  >
                    Blog
                  </span>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1fgKw7H3PplIenkF-pxfqWdMAnvZcCeA0/view"
                  onClick={() => {
                    setResumeBtnClicked(true);
                  }}
                  target="_blank"
                  onMouseOver={() => setResumeMouseOver(true)}
                  onMouseOut={() => setResumeMouseOver(false)}
                  className={
                    resumeBtnClicked
                      ? "py-[10px] px-[25px] mr-4 flex  justify-center  items-center ml-[5px] bg-headerBtnColor border  border-[#64ffda]  rounded  font-mono  text-[#64ffda] cursor-pointer antialiased leading-[1]"
                      : resumeMouseHover
                      ? "py-[10px] px-[25px] mr-4 flex  justify-center  items-center ml-[5px] bg-headerBtnColor border  border-[#64ffda]  rounded  font-mono  text-[#64ffda] cursor-pointer antialiased leading-[1]"
                      : "py-[10px] px-[25px] mr-4 flex  justify-center  items-center ml-[5px] bg-transparent border  border-[#64ffda]  rounded  font-mono  text-[#64ffda] cursor-pointer antialiased leading-[1]"
                  }
                >
                  CV
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