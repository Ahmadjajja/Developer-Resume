import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Css_applied/otherProjectsStyles.css";

const OtherProjects = () => {
  const [showMoreBtnClicked, setShowMoreBtnClicked] = useState(false);
  const [showMoreBtnHover, setShowMoreBtnHover] = useState(false);

  const [firstBoxClicked, setFirstBoxClicked] = useState(false);
  const [secondBoxClicked, setSecondBoxClicked] = useState(false);
  const [thirdBoxClicked, setThirdBoxClicked] = useState(false);
  const [fourthBoxClicked, setFourthBoxClicked] = useState(false);
  const [fifthBoxClicked, setFifthBoxClicked] = useState(false);
  const [sixthBoxClicked, setSixthBoxClicked] = useState(false);
  const [seventhBoxClicked, setSeventhBoxClicked] = useState(false);
  const [eighthBoxClicked, setEighthBoxClicked] = useState(false);
  const [ninthBoxClicked, setNinthBoxClicked] = useState(false);
  const [tenthBoxClicked, setTenthBoxClicked] = useState(false);
  const [eleventhBoxClicked, setEleventhBoxClicked] = useState(false);
  const [twelvethBoxClicked, setTwelvethBoxClicked] = useState(false);

  const myProject7 = useRef();
  const myProject8 = useRef();
  const myProject9 = useRef();
  const myProject10 = useRef();
  const myProject11 = useRef();
  const myProject12 = useRef();

  const [firstBoxGithubSvg, setFirstBoxGithubSvg] = useState(false);
  const [secondBoxGithubSvg, setSecondBoxGithubSvg] = useState(false);
  const [thirdBoxGithubSvg, setThirdBoxGithubSvg] = useState(false);
  const [fourthBoxGithubSvg, setFourthBoxGithubSvg] = useState(false);
  const [fifthBoxGithubSvg, setFifthBoxGithubSvg] = useState(false);
  const [sixthBoxGithubSvg, setSixthBoxGithubSvg] = useState(false);
  const [seventhBoxGithubSvg, setSeventhBoxGithubSvg] = useState(false);
  const [eighthBoxGithubSvg, setEighthBoxGithubSvg] = useState(false);
  const [ninthBoxGithubSvg, setNinthBoxGithubSvg] = useState(false);
  const [tenthBoxGithubSvg, setTenthBoxGithubSvg] = useState(false);
  const [eleventhBoxGithubSvg, setEleventhBoxGithubSvg] = useState(false);
  const [twelvethBoxGithubSvg, setTwelvethBoxGithubSvg] = useState(false);

  // Displaying content after show time
  const [showSeventhContent, setShowSeventhContent] = useState(false);
  const [showEighthContent, setShowEighthContent] = useState(false);
  const [showNinthContent, setShowNinthContent] = useState(false);
  const [showTenthContent, setShowTenthContent] = useState(false);
  const [showEleventhContent, setShowEleventhContent] = useState(false);
  const [showTwelvethContent, setShowTwelvethContent] = useState(false);

  const handleShowMoreBtnClicked = () => {
    if (showMoreBtnClicked) {
      setShowMoreBtnClicked(false);
    } else {
      setShowMoreBtnClicked(true);
    }
  };

  const handleFirstBoxClicked = () => {
    if (firstBoxClicked) {
      setFirstBoxClicked(false);
    } else {
      setFirstBoxClicked(true);
    }
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleSecondBoxClicked = () => {
    if (secondBoxClicked) {
      setSecondBoxClicked(false);
    } else {
      setSecondBoxClicked(true);
    }
    setFirstBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleThirdBoxClicked = () => {
    if (thirdBoxClicked) {
      setThirdBoxClicked(false);
    } else {
      setThirdBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleFourthBoxClicked = () => {
    if (fourthBoxClicked) {
      setFourthBoxClicked(false);
    } else {
      setFourthBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleFifthBoxClicked = () => {
    if (fifthBoxClicked) {
      setFifthBoxClicked(false);
    } else {
      setFifthBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleSixthBoxClicked = () => {
    if (sixthBoxClicked) {
      setSixthBoxClicked(false);
    } else {
      setSixthBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleSeventhBoxClicked = () => {
    if (seventhBoxClicked) {
      setSeventhBoxClicked(false);
    } else {
      setSeventhBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleEighthBoxClicked = () => {
    if (eighthBoxClicked) {
      setEighthBoxClicked(false);
    } else {
      setEighthBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleNinthBoxClicked = () => {
    if (ninthBoxClicked) {
      setNinthBoxClicked(false);
    } else {
      setNinthBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleTenthBoxClicked = () => {
    if (tenthBoxClicked) {
      setTenthBoxClicked(false);
    } else {
      setTenthBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setEleventhBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleEleventhBoxClicked = () => {
    if (eleventhBoxClicked) {
      setEleventhBoxClicked(false);
    } else {
      setEleventhBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setTwelvethBoxClicked(false);
  };

  const handleTwelvethBoxClicked = () => {
    if (twelvethBoxClicked) {
      setTwelvethBoxClicked(false);
    } else {
      setTwelvethBoxClicked(true);
    }

    setFirstBoxClicked(false);
    setSecondBoxClicked(false);
    setThirdBoxClicked(false);
    setFourthBoxClicked(false);
    setFifthBoxClicked(false);
    setSixthBoxClicked(false);
    setSeventhBoxClicked(false);
    setEighthBoxClicked(false);
    setNinthBoxClicked(false);
    setTenthBoxClicked(false);
    setEleventhBoxClicked(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!myProject7.current.contains(e.target)) {
        setSeventhBoxClicked(false);
      }
      if (!myProject8.current.contains(e.target)) {
        setEighthBoxClicked(false)
      }
      if (!myProject9.current.contains(e.target)) {
        setNinthBoxClicked(false)
      }
      if (!myProject10.current.contains(e.target)) {
        setTenthBoxClicked(false)
      }
      if (!myProject11.current.contains(e.target)) {
        setEleventhBoxClicked(false)
      }
      if (!myProject12.current.contains(e.target)) {
        setTwelvethBoxClicked(false)
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [
    myProject7,
    myProject8,
    myProject9,
    myProject10,
    myProject11,
    myProject12,
    setFirstBoxClicked,
    setSecondBoxClicked,
    setThirdBoxClicked,
    setFourthBoxClicked,
    setFifthBoxClicked,
    setSixthBoxClicked,
    setSeventhBoxClicked,
    setEighthBoxClicked
  ]);

  // Displaying content in transition
  const handleScrollTwo = () => {
    if (showMoreBtnClicked) {
      setShowSeventhContent(true);
      setShowEighthContent(true);
      setShowNinthContent(true);
      setShowTenthContent(true);
      setShowEleventhContent(true);
      setShowTwelvethContent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTwo);
    return () => {
      window.removeEventListener("scroll", handleScrollTwo);
    };
  }, []);

  // Title Appear when Displayed
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const refTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleTitle) {
      setTimeout(() => {
        setTitleVisible(true);
      }, 200);
    }
  });

  // First Project Appear when Displayed
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [firstProjectVisible, setFirstProjectVisible] = useState(false);
  const refFirstProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleOne(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFirstProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleOne) {
      setTimeout(() => {
        setFirstProjectVisible(true);
      }, 200);
    }
  });

  // Second Project Appear when Displayed
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [secondProjectVisible, setSecondProjectVisible] = useState(false);
  const refSecondProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleTwo(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSecondProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleTwo) {
      setTimeout(() => {
        setSecondProjectVisible(true);
      }, 300);
    }
  });

  // Third Project Appear when Displayed
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [thirdProjectVisible, setThirdProjectVisible] = useState(false);
  const refThirdProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleThree(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refThirdProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleThree) {
      setTimeout(() => {
        setThirdProjectVisible(true);
      }, 400);
    }
  });

  // Fourth Project Appear when Displayed
  const [isVisibleFour, setIsVisibleFour] = useState(false);
  const [fourthProjectVisible, setFourthProjectVisible] = useState(false);
  const refFourthProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleFour(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFourthProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleFour) {
      setTimeout(() => {
        setFourthProjectVisible(true);
      }, 200);
    }
  });

  // Fifth Project Appear when Displayed
  const [isVisibleFive, setIsVisibleFive] = useState(false);
  const [fifthProjectVisible, setFifthProjectVisible] = useState(false);
  const refFifthProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleFive(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFifthProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleFive) {
      setTimeout(() => {
        setFifthProjectVisible(true);
      }, 300);
    }
  });

  // Sixth Project Appear when Displayed
  const [isVisibleSix, setIsVisibleSix] = useState(false);
  const [sixthProjectVisible, setSixthProjectVisible] = useState(false);
  const refSixthProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleSix(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSixthProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleSix) {
      setTimeout(() => {
        setSixthProjectVisible(true);
      }, 400);
    }
  });

  return (
    <div className="ml-8 mr-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]">
      {/* Title Head */}
      <div
        ref={refTitle}
        className={`contentContainer ${titleVisible ? "show" : ""
          } py-[6.12rem] flex flex-col justify-center items-center`}
      >
        <div className="text-[#ccd6f6] text-[32px] font-calibri antialiased leading-[1.1] font-semibold">
          Other Projects
        </div>
        {/* <div className=" mt-[10px] text-[#64ffda] text-[14px] font-customMono cursor-pointer antialiased relative">
          <Link to="/archive" className="viewArchive">
            view the archive
          </Link>
        </div> */}
      </div>
      {/* Project Boxes */}
      <div className={`flex flex-wrap gap-[15px] cursor-default`}>
        {/* First Project Box */}
        <div
          ref={refFirstProject}
          onMouseOver={() => setFirstBoxClicked(true)}
          onMouseOut={() => setFirstBoxClicked(false)}
          onClick={handleFirstBoxClicked}
          className={
            firstBoxClicked
              ? `contentContainer ${firstProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              : `contentContainer ${firstProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="h-[40px] w-[40px] text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#172a45"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
                style={{ backgroundColor: "#172a45" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            {/* Github SVG */}
            <div
              onMouseOver={() => setFirstBoxGithubSvg(true)}
              onMouseOut={() => setFirstBoxGithubSvg(false)}
              className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
            >
              <a
                href="https://github.com/Ahmadjajja/Frontend_Eshop"
                aria-label="GitHub Link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#172a45"
                  stroke={firstBoxGithubSvg ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                  style={{ backgroundColor: "#172a45" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%]">
            Full Stack E-Commerce Mobile App Frontend
          </div>
          {/* Description */}
          <div className="mt-5 h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[32%] opScreen6:h-[35%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%]">
            E-commerce mobile app with user registration, product catalog, cart, wishlist, checkout, payment, order tracking, and admin dashboard.
          </div>
          {/* Footer */}
          <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
            JavaScript, React-Native, Redux, Context-API, Native-Base, Node-JS, Express JS, Mongodb
          </div>
        </div>
        {/* Second Project Box */}
        <div
          ref={refSecondProject}
          onMouseOver={() => setSecondBoxClicked(true)}
          onMouseOut={() => setSecondBoxClicked(false)}
          onClick={handleSecondBoxClicked}
          className={
            secondBoxClicked
              ? `contentContainer ${secondProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[32%] opScreen13:w-[100%]`
              : `contentContainer ${secondProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[32%] opScreen13:w-[100%]`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="h-[40px] w-[40px] text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#172a45"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
                style={{ backgroundColor: "#172a45" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            {/* Github SVG */}
            <div
              onMouseOver={() => setSecondBoxGithubSvg(true)}
              onMouseOut={() => setSecondBoxGithubSvg(false)}
              className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
            >
              <a
                href="https://github.com/Ahmadjajja/Backend_Eshop"
                aria-label="GitHub Link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#172a45"
                  stroke={secondBoxGithubSvg ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                  style={{ backgroundColor: "#172a45" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen7:h-[14%] opScreen12:h-[8%] opScreen13:h-[12%] opScreen14:mt-[22px]">
            Full Stack E-Commerce Mobile App Backend
          </div>
          {/* Description */}
          <div className=" mt-5 h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen7:h-[35%] opScreen12:mt-[20px] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen20:h-[50%]">
            Manages data, handles business logic, and provides APIs for frontend interactions, including user authentication, product management, and search functionality.
          </div>
          {/* Footer */}
          <div className="h-[14%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen6:h-[13.8%] opScreen8:h-[15%] opScreen8:mt-[13px] opScreen12:mt-[33px] opScreen13:h-[20%] opScreen13:items-center opScreen13:mt-[5px] opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen18:mt-[35px] opScreen25:mt-[16px] opScreen28:h-[11%] opScreen28:mt-[27.4px] opScreen30:mt-[25.7px]">
            Javascript, Node-JS, Express-JS, MongoDB (Aggragation, populate)
          </div>
        </div>
        {/* Third Project Box */}
        <div
          ref={refThirdProject}
          onMouseOver={() => setThirdBoxClicked(true)}
          onMouseOut={() => setThirdBoxClicked(false)}
          onClick={handleThirdBoxClicked}
          className={
            thirdBoxClicked
              ? `contentContainer ${thirdProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              : `contentContainer ${thirdProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="h-[40px] w-[40px] text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#172a45"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
                style={{ backgroundColor: "#172a45" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            {/* Github SVG */}
            <div
              onMouseOver={() => setThirdBoxGithubSvg(true)}
              onMouseOut={() => setThirdBoxGithubSvg(false)}
              className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
            >
              <a
                href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/MERN-Projects/TODO_React_Native"
                aria-label="GitHub Link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#172a45"
                  stroke={thirdBoxGithubSvg ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                  style={{ backgroundColor: "#172a45" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-6 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen2:h-[13%] opScreen6:h-[17%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen22:h-[18%]">
            TODO List Mobile App
          </div>
          {/* Description */}
          <div className=" mt-5 sh-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[37%] opScreen6:h-[40%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%]">
            Organize tasks, set reminders, and track progress with a user-friendly interface for efficient task management.
          </div>
          {/* Footer */}
          <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri items-center bg-[#172a45] flex opScreen5:mt-[29px] opScreen6:h-[11.7%] opScreen9:h-[15%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen19:mt-[33px] opScreen21:h-[12%] opScreen25:mt-[24px] opScreen28:mt-[33px] opScreen30:mt-[36px] opScreen31:mt-[29px]">
            React-Native, Redux, Local-Storage
          </div>
        </div>
        {/* Fourth Project Box */}
        <div
          ref={refFourthProject}
          onMouseOver={() => setFourthBoxClicked(true)}
          onMouseOut={() => setFourthBoxClicked(false)}
          onClick={handleFourthBoxClicked}
          className={
            fourthBoxClicked
              ? `contentContainer ${fourthProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              : `contentContainer ${fourthProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="h-[40px] w-[40px] text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#172a45"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
                style={{ backgroundColor: "#172a45" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            {/* Github SVG */}
            <div
              onMouseOver={() => setFourthBoxGithubSvg(true)}
              onMouseOut={() => setFourthBoxGithubSvg(false)}
              className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
            >
              <a
                href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/MERN-Projects/CRUD%20-%20React%20JS%2C%20Firebase"
                aria-label="GitHub Link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#172a45"
                  stroke={fourthBoxGithubSvg ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                  style={{ backgroundColor: "#172a45" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-6 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen1:h-[15%] opScreen7:h-[14%] opScreen9:mt-[2rem] opScreen6:mt-[2rem] opScreen13:h-[12%] opScreen14:mt-[22px]">
            CRUD - ReactJS, Firebase
          </div>
          {/* Description */}
          <div className="mt-5 h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen1:h-[45%] opScreen5:h-[37%] opScreen6:h-[39%] opScreen7:h-[37%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen23:h-[48%]">
            Create, Read, Update, and Delete data seamlessly with a dynamic and interactive user interface.
          </div>
          {/* Footer */}
          <div className="pb-5 h-[13%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen5:mt-[20px] opScreen6:h-[13%] opScreen6:mt-[18px] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen19:mt-[30px] opScreen25:mt-[22px]">
            HTML, CSS, Bootstrap5, JavaScript, React JS, Firebase, Firestore
          </div>
        </div>
        {/* Fifth Project Box */}
        <div
          ref={refFifthProject}
          onMouseOver={() => setFifthBoxClicked(true)}
          onMouseOut={() => setFifthBoxClicked(false)}
          onClick={handleFifthBoxClicked}
          className={
            fifthBoxClicked
              ? `contentContainer ${fifthProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[32%] opScreen13:w-[100%]`
              : `contentContainer ${fifthProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[32%] opScreen13:w-[100%]`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="h-[40px] w-[40px] text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#172a45"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
                style={{ backgroundColor: "#172a45" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            {/* Github SVG */}
            <div
              onMouseOver={() => setFifthBoxGithubSvg(true)}
              onMouseOut={() => setFifthBoxGithubSvg(false)}
              className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
            >
              <a
                href="https://github.com/Ahmadjajja/Color-Flipper"
                aria-label="GitHub Link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#172a45"
                  stroke={fifthBoxGithubSvg ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                  style={{ backgroundColor: "#172a45" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen4:h-[13%] opScreen6:h-[26%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen15:h-[22%] opScreen24:h-[22%]">
            React Color Flipper
          </div>
          {/* Description */}
          <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen6:h-[30%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[20px] opScreen17:h-[38%] opScreen25:h-[35%] opScreen29:h-[25%] opScreen30:h-[37%]">
            Dynamic color generator inspired by WhatsApp text status. Simple and fun!
          </div>
          {/* Footer */}
          <div className="h-[12%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen4:mt-[5px] opScreen5:mt-[6.5px] opScreen6:h-[13%] opScreen7:h-[10%] opScreen6:mt-[13px] opScreen11:h-[7%] opScreen11:mt-[9px] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[24px] opScreen17:mt-[20px] opScreen26:mt-[14px] opScreen30:mt-[7px] opScreen30:h-[11%] ">
            HTML, CSS, Bootstrap5, JavaScript, React
          </div>
        </div>
        {/* Sixth Project Box */}
        <div
          ref={refSixthProject}
          onMouseOver={() => setSixthBoxClicked(true)}
          onMouseOut={() => setSixthBoxClicked(false)}
          onClick={handleSixthBoxClicked}
          className={
            sixthBoxClicked
              ? `contentContainer ${sixthProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              : `contentContainer ${sixthProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="h-[40px] w-[40px] text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="#172a45"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
                style={{ backgroundColor: "#172a45" }}
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            {/* Github SVG */}
            <div
              onMouseOver={() => setSixthBoxGithubSvg(true)}
              onMouseOut={() => setSixthBoxGithubSvg(false)}
              className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
            >
              <a
                href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/HTML-CSS-JS-Projects/beat%20the%20button%20-%20PIANO-"
                aria-label="GitHub Link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#172a45"
                  stroke={sixthBoxGithubSvg ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                  style={{ backgroundColor: "#172a45" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen4:h-[13%] opScreen7:h-[14%] opScreen12:h-[12%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen22:h-[19%]">
            Beat the Button: Piano
          </div>
          {/* Description */}
          <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen6:h-[40%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen24:h-[49%] opScreen25:h-[44%] opScreen29:h-[33%] opScreen30:h-[40%]">
            A fun and interactive web-based piano game built using HTML, CSS, and JavaScript, where players strive to beat the buttons in a thrilling musical challenge.
          </div>
          {/* Footer */}
          <div className="h-[13%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen4:mt-[5px] opScreen6:h-[13%] opScreen6:mt-[22px] opScreen7:h-[11%] opScreen9:h-[6%%] opScreen12:mt-[25px] opScreen13:h-[20%] opScreen13:items-center opScreen13:mt-[5px] opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen26:mt-[23px] opScreen27:mt-[14px] opScreen30:mt-[17.6px]">
            HTML, CSS, Bootstrap5, Javascript
          </div>
        </div>
        {showMoreBtnClicked && (
          <>
            {/* Seventh Project Box */}
            <div
              ref={myProject7}
              onMouseOver={() => setSeventhBoxClicked(true)}
              onMouseOut={() => setSeventhBoxClicked(false)}
              onClick={handleSeventhBoxClicked}
              className={
                seventhBoxClicked
                  ? `content w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] top-[-10px] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
                  : `content w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              }
            >
              {/* Header Box */}
              <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
                {/* Folder SVG */}
                <div className="h-[40px] w-[40px] text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="#172a45"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder"
                    style={{ backgroundColor: "#172a45" }}
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                {/* Github SVG */}
                <div
                  onMouseOver={() => setSeventhBoxGithubSvg(true)}
                  onMouseOut={() => setSeventhBoxGithubSvg(false)}
                  className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
                >
                  <a
                    href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/HTML-CSS-JS-Projects/Calculator"
                    aria-label="GitHub Link"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="#172a45"
                      stroke={seventhBoxGithubSvg ? "#64ffda" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                      style={{ backgroundColor: "#172a45" }}
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Title  */}
              <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen2:h-[13%] opScreen7:h-[14%] opScreen12:h-[12%] opScreen14:mt-[22px]">
                Calculator
              </div>
              {/* Description */}
              <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[45%] opScreen6:h-[40%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen20:h-[50%] ">
                Versatile calculator with arithmetic operations, backspace, and clear functionality, designed for seamless calculations.
              </div>
              {/* Footer */}
              <div className="mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen6:h-[20%] opScreen7:h-[12%] opScreen9:h-[20%] opScreen10:mt-[7px] opScreen10:h-[15%] opScreen12:mt-[20px] opScreen13:h-[20%] opScreen13:items-center opScreen13:mt-[5px] opScreen14:mt-[25px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen18:mt-[35px] opScreen20:mt-[40px]">
                HTML, CSS, Bootstrap5, Javascript
              </div>
            </div>
            {/* Eighth Project Box */}
            <div
              ref={myProject8}
              onMouseOver={() => setEighthBoxClicked(true)}
              onMouseOut={() => setEighthBoxClicked(false)}
              onClick={handleEighthBoxClicked}
              className={
                eighthBoxClicked
                  ? `content w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] top-[-10px] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
                  : `content w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              }
            >
              {/* Header Box */}
              <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
                {/* Folder SVG */}
                <div className="h-[40px] w-[40px] text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="#172a45"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder"
                    style={{ backgroundColor: "#172a45" }}
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                {/* Github SVG */}
                <div
                  onMouseOver={() => setEighthBoxGithubSvg(true)}
                  onMouseOut={() => setEighthBoxGithubSvg(false)}
                  className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
                >
                  <a
                    href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/HTML-CSS-JS-Projects/Wine%20E-Commerce"
                    aria-label="GitHub Link"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="#172a45"
                      stroke={eighthBoxGithubSvg ? "#64ffda" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                      style={{ backgroundColor: "#172a45" }}
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Title  */}
              <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen2:h-[13%] opScreen7:h-[14%] opScreen12:h-[12%] opScreen14:mt-[22px]">
                Wine Shop
              </div>
              {/* Description */}
              <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[45%] opScreen6:h-[40%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen20:h-[50%] ">
                E-Commerce Shop design featuring a dynamic carousel, intuitive navigation, and convenient cart for wine purchases.
              </div>
              {/* Footer */}
              <div className="mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen6:h-[20%] opScreen7:h-[12%] opScreen9:h-[20%] opScreen10:mt-[7px] opScreen10:h-[15%] opScreen12:mt-[20px] opScreen13:h-[20%] opScreen13:items-center opScreen13:mt-[5px] opScreen14:mt-[25px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen18:mt-[35px] opScreen20:mt-[40px]">
                HTML, CSS, Bootstrap5
              </div>
            </div>
            {/* Ninth Project Box */}
            <div
              ref={myProject9}
              onMouseOver={() => setNinthBoxClicked(true)}
              onMouseOut={() => setNinthBoxClicked(false)}
              onClick={handleNinthBoxClicked}
              className={
                ninthBoxClicked
                  ? `content w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] top-[-10px] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
                  : `content w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              }
            >
              {/* Header Box */}
              <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
                {/* Folder SVG */}
                <div className="h-[40px] w-[40px] text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="#172a45"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder"
                    style={{ backgroundColor: "#172a45" }}
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                {/* Github SVG */}
                <div
                  onMouseOver={() => setNinthBoxGithubSvg(true)}
                  onMouseOut={() => setNinthBoxGithubSvg(false)}
                  className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
                >
                  <a
                    href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/HTML-CSS-JS-Projects/Wine%20E-Commerce"
                    aria-label="GitHub Link"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="#172a45"
                      stroke={ninthBoxGithubSvg ? "#64ffda" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                      style={{ backgroundColor: "#172a45" }}
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Title  */}
              <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen2:h-[13%] opScreen7:h-[14%] opScreen12:h-[12%] opScreen14:mt-[22px]">
                User Management System
              </div>
              {/* Description */}
              <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[45%] opScreen6:h-[40%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen20:h-[50%] ">
                user management system with features like user list generation, addition, deletion, and login.
              </div>
              {/* Footer */}
              <div className="mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen6:h-[20%] opScreen7:h-[12%] opScreen9:h-[20%] opScreen10:mt-[7px] opScreen10:h-[15%] opScreen12:mt-[20px] opScreen13:h-[20%] opScreen13:items-center opScreen13:mt-[5px] opScreen14:mt-[25px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen18:mt-[35px] opScreen20:mt-[40px]">
                HTML, CSS, Bootstrap5, Javascript, Local Storage
              </div>
            </div>
            {/* Tenth Project Box */}
            <div
              ref={myProject10}
              onMouseOver={() => setTenthBoxClicked(true)}
              onMouseOut={() => setTenthBoxClicked(false)}
              onClick={handleTenthBoxClicked}
              className={
                tenthBoxClicked
                  ? `content w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] top-[-10px] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
                  : `content w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              }
            >
              {/* Header Box */}
              <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
                {/* Folder SVG */}
                <div className="h-[40px] w-[40px] text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="#172a45"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder"
                    style={{ backgroundColor: "#172a45" }}
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                {/* Github SVG */}
                <div
                  onMouseOver={() => setTenthBoxGithubSvg(true)}
                  onMouseOut={() => setTenthBoxGithubSvg(false)}
                  className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
                >
                  <a
                    href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/HTML-CSS-JS-Projects/Smart-Kitchen"
                    aria-label="GitHub Link"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="#172a45"
                      stroke={tenthBoxGithubSvg ? "#64ffda" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                      style={{ backgroundColor: "#172a45" }}
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Title  */}
              <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen2:h-[13%] opScreen7:h-[14%] opScreen12:h-[12%] opScreen14:mt-[22px]">
                Smart Kitchen
              </div>
              {/* Description */}
              <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[45%] opScreen6:h-[40%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen20:h-[50%] ">
                Designed a user-friendly website for a pizza shop, showcasing a variety of pizzas with an intuitive ordering system.
              </div>
              {/* Footer */}
              <div className="mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen6:h-[20%] opScreen7:h-[12%] opScreen9:h-[20%] opScreen10:mt-[7px] opScreen10:h-[15%] opScreen12:mt-[20px] opScreen13:h-[20%] opScreen13:items-center opScreen13:mt-[5px] opScreen14:mt-[25px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen18:mt-[35px] opScreen20:mt-[40px]">
                HTML, CSS, Bootstrap5
              </div>
            </div>
            {/* Eleventh Project Box */}
            <div
              ref={myProject11}
              onMouseOver={() => setEleventhBoxClicked(true)}
              onMouseOut={() => setEleventhBoxClicked(false)}
              onClick={handleEleventhBoxClicked}
              className={
                eleventhBoxClicked
                  ? `content w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] top-[-10px] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
                  : `content w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              }
            >
              {/* Header Box */}
              <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
                {/* Folder SVG */}
                <div className="h-[40px] w-[40px] text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="#172a45"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder"
                    style={{ backgroundColor: "#172a45" }}
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                {/* Github SVG */}
                <div
                  onMouseOver={() => setEleventhBoxGithubSvg(true)}
                  onMouseOut={() => setEleventhBoxGithubSvg(false)}
                  className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
                >
                  <a
                    href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/HTML-CSS-JS-Projects/SBUI-Design-With-Bootstrap"
                    aria-label="GitHub Link"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="#172a45"
                      stroke={eleventhBoxGithubSvg ? "#64ffda" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                      style={{ backgroundColor: "#172a45" }}
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Title  */}
              <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen2:h-[13%] opScreen7:h-[14%] opScreen12:h-[12%] opScreen14:mt-[22px]">
                Versatile SBUI Kit
              </div>
              {/* Description */}
              <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[45%] opScreen6:h-[40%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen20:h-[50%] ">
                Crafted a versatile SBUI kit, empowering businesses with a captivating design template adaptable to various industries.
              </div>
              {/* Footer */}
              <div className="mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen6:h-[20%] opScreen7:h-[12%] opScreen9:h-[20%] opScreen10:mt-[7px] opScreen10:h-[15%] opScreen12:mt-[20px] opScreen13:h-[20%] opScreen13:items-center opScreen13:mt-[5px] opScreen14:mt-[25px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen18:mt-[35px] opScreen20:mt-[40px]">
                HTML, CSS, Bootstrap5
              </div>
            </div>

            {/* Twelveth Project Box */}
            <div
              ref={myProject12}
              onMouseOver={() => setTwelvethBoxClicked(true)}
              onMouseOut={() => setTwelvethBoxClicked(false)}
              onClick={handleTwelvethBoxClicked}
              className={
                twelvethBoxClicked
                  ? `content w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] top-[-10px] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
                  : `content w-[48%] relative py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration mt-4 top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%]`
              }
            >
              {/* Header Box */}
              <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
                {/* Folder SVG */}
                <div className="h-[40px] w-[40px] text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="#172a45"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder"
                    style={{ backgroundColor: "#172a45" }}
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                {/* Github SVG */}
                <div
                  onMouseOver={() => setTwelvethBoxGithubSvg(true)}
                  onMouseOut={() => setTwelvethBoxGithubSvg(false)}
                  className="w-[30px] h-[30px] py-[5px] px-[7px] text-[#a8b2d1] bg-[#172a45]"
                >
                  <a
                    href="https://github.com/Ahmadjajja/MERN-Projects/tree/main/HTML-CSS-JS-Projects/Hamza's%20Product"
                    aria-label="GitHub Link"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="#172a45"
                      stroke={twelvethBoxGithubSvg ? "#64ffda" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                      style={{ backgroundColor: "#172a45" }}
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Title  */}
              <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen2:h-[13%] opScreen7:h-[14%] opScreen12:h-[12%] opScreen14:mt-[22px]">
                Chatify
              </div>
              {/* Description */}
              <div className="h-[40%] mt-[10px] bg-[#172a45] antialiased text-[17px] text-[#a8b2d1] font-calibri leading-[1.3] opScreen5:h-[45%] opScreen6:h-[40%] opScreen7:h-[35%] opScreen13:h-[30%] opScreen16:mt-[30px] opScreen17:h-[44%] opScreen20:h-[50%] ">
                Chatify is a user-friendly chat application that utilizes local storage for seamless and secure messaging experiences.
              </div>
              {/* Footer */}
              <div className="mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-center opScreen6:h-[20%] opScreen7:h-[12%] opScreen9:h-[20%] opScreen10:mt-[7px] opScreen10:h-[15%] opScreen12:mt-[20px] opScreen13:h-[20%] opScreen13:items-center opScreen13:mt-[5px] opScreen14:mt-[25px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] opScreen18:mt-[35px] opScreen20:mt-[40px]">
                HTML, CSS, Bootstrap5, Javascript, Local Storage
              </div>
            </div>
          </>

        )}
      </div>

      {/* Show More Button */}
      <div className="py-[6.7rem] flex justify-center items-center text-[#64ffda] leading-[1]">
        <button
          onMouseOver={() => setShowMoreBtnHover(true)}
          onMouseOut={() => setShowMoreBtnHover(false)}
          onClick={handleShowMoreBtnClicked}
          className={
            showMoreBtnClicked
              ? "py-5 px-7 bg-headerBtnColor cursor-pointer antialiased border-[1px] rounded border-[#64ffda] text-[13px] font-customMono ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration"
              : showMoreBtnHover
                ? "py-5 px-7 bg-headerBtnColor cursor-pointer antialiased border-[1px] rounded border-[#64ffda] text-[13px] font-customMono ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration"
                : "py-5 px-7 bg-transparentent cursor-pointer antialiased border-[1px] rounded border-[#64ffda] text-[13px] font-customMono ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration"
          }
        >
          {showMoreBtnClicked ? (
            <span className="bg-transparent">Show Less</span>
          ) : (
            <span className="bg-transparent">Show More</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default OtherProjects;
