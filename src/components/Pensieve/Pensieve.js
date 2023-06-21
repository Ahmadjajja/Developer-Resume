import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Pensieve = ({ aboutClickedInPensieve }) => {
  const navigate = useNavigate();
  const [zerothBoxClicked, setZerothBoxClicked] = useState(false);
  const [firstBoxClicked, setFirstBoxClicked] = useState(false);
  const [secondBoxClicked, setSecondBoxClicked] = useState(false);
  const [thirdBoxClicked, setThirdBoxClicked] = useState(false);
  const [fourthBoxClicked, setFourthBoxClicked] = useState(false);
  const [fifthBoxClicked, setFifthBoxClicked] = useState(false);

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

  // Zeroth Project Appear when Displayed
  const [isVisibleZero, setIsVisibleZero] = useState(false);
  const [zerothProjectVisible, setZerothProjectVisible] = useState(false);
  const refZerothProject = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleZero(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refZerothProject.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleZero) {
      setTimeout(() => {
        setZerothProjectVisible(true);
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
      }, 200);
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
      }, 200);
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
      }, 200);
    }
  });

  return (
    <div className="ml-8 mr-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem] h-[106vh] antialiased">
      {/* Title Head */}
      <div
        ref={refTitle}
        className={`contentContainer ${titleVisible ? "show" : ""
          }  flex flex-col justify-center items-center mt-[6rem]`}
      >
        <div className="text-[#ccd6f6] text-[77px] font-calibri antialiased leading-[1.1] font-semibold">
          Pensieve
        </div>
        <div className=" mt-[10px] text-[#64ffda] text-[14px] font-customMono cursor-pointer antialiased relative ">
          <span
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="viewArchive"
          >
            a collection of memories and writeups
          </span>
        </div>
      </div>
      {/* Project Boxes */}
      <div className={`pb-14 flex flex-wrap gap-[15px] cursor-default mt-[6rem]`}>
        {/* Zeroth Project Box */}
        <div
          ref={refZerothProject}
          onMouseOver={() => setZerothBoxClicked(true)}
          onMouseOut={() => setZerothBoxClicked(false)}
          onClick={(event) => {
            if (event.target.classList.contains("viewArchive")) {
              navigate("/pensieve/tags/memories/");
            } else {
              navigate("/posts/early-life-in-a-small-village");
            }
          }}
          className={
            zerothBoxClicked
              ? `contentContainer ${zerothProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
              : `contentContainer ${zerothProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="bg-transparent h-[40px] w-[40px] pensieve__StyledFolder-sc-1a201yd-5 fcWQAr">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64ffda"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-zap bg-transparent"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%]">
            Early Life in a Small Village
          </div>
          {/* Footer */}
          <div className="bg-[#172a45] flex justify-between">
            <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
              31/12/17
            </div>
            <div className="text-[12px] text-[#64ffda] h-[15%] mt-[10px] font-customMono bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] relative">
              <button
                onClick={() => {
                  navigate("/pensieve/tags/memories/");
                }}
                className="viewArchive bg-[#172a45]"
              >
                #Memories
              </button>
            </div>
          </div>
        </div>
        {/* First Project Box */}
        <div
          ref={refFirstProject}
          onMouseOver={() => setFirstBoxClicked(true)}
          onMouseOut={() => setFirstBoxClicked(false)}
          onClick={(event) => {
            if (event.target.classList.contains("viewArchive")) {
              navigate("/pensieve/tags/memories/");
            } else {
              navigate("/posts/year-in-review-2018");
            }
          }}
          className={
            firstBoxClicked
              ? `contentContainer ${firstProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
              : `contentContainer ${firstProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="bg-transparent h-[40px] w-[40px] pensieve__StyledFolder-sc-1a201yd-5 fcWQAr">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64ffda"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-zap bg-transparent"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%]">
            Year in Review 2018
          </div>
          {/* Footer */}
          <div className="bg-[#172a45] flex justify-between">
            <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
              31/12/18
            </div>
            <div className="text-[12px] text-[#64ffda] h-[15%] mt-[10px] font-customMono bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] relative">
              <button
                onClick={() => {
                  navigate("/pensieve/tags/memories/");
                }}
                className="viewArchive bg-[#172a45]"
              >
                #Memories
              </button>
            </div>
          </div>
        </div>
        {/* Second Project Box */}
        <div
          ref={refSecondProject}
          onMouseOver={() => setSecondBoxClicked(true)}
          onMouseOut={() => setSecondBoxClicked(false)}
          onClick={(event) => {
            if (event.target.classList.contains("viewArchive")) {
              navigate("/pensieve/tags/memories/");
            } else {
              navigate("/posts/year-in-review-2019");
            }
          }}
          className={
            secondBoxClicked
              ? `contentContainer ${secondProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
              : `contentContainer ${secondProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="bg-transparent h-[40px] w-[40px] pensieve__StyledFolder-sc-1a201yd-5 fcWQAr">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64ffda"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-zap bg-transparent"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%]">
            Year in Review 2019
          </div>
          {/* Footer */}
          <div className="bg-[#172a45] flex justify-between">
            <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
              31/12/19
            </div>
            <div className="text-[12px] text-[#64ffda] h-[15%] mt-[10px] font-customMono bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] relative">
              <button
                onClick={() => {
                  navigate("/pensieve/tags/memories/");
                }}
                className="viewArchive bg-[#172a45]"
              >
                #Memories
              </button>
            </div>
          </div>
        </div>
        {/* Third Project Box */}
        <div
          ref={refThirdProject}
          onMouseOver={() => setThirdBoxClicked(true)}
          onMouseOut={() => setThirdBoxClicked(false)}
          onClick={(event) => {
            if (event.target.classList.contains("viewArchive")) {
              navigate("/pensieve/tags/memories/");
            } else {
              navigate("/posts/year-in-review-2020");
            }
          }}
          className={
            thirdBoxClicked
              ? `contentContainer ${thirdProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
              : `contentContainer ${thirdProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="bg-transparent h-[40px] w-[40px] pensieve__StyledFolder-sc-1a201yd-5 fcWQAr">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64ffda"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-zap bg-transparent"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%]">
            Year in Review 2020
          </div>
          {/* Footer */}
          <div className="bg-[#172a45] flex justify-between">
            <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
              31/12/20
            </div>
            <div className="text-[12px] text-[#64ffda] h-[15%] mt-[10px] font-customMono bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] relative">
              <button
                onClick={() => {
                  navigate("/pensieve/tags/memories/");
                }}
                className="viewArchive bg-[#172a45]"
              >
                #Memories
              </button>
            </div>
          </div>
        </div>
        {/* Fourth Project Box */}
        <div
          ref={refFourthProject}
          onMouseOver={() => setFourthBoxClicked(true)}
          onMouseOut={() => setFourthBoxClicked(false)}
          onClick={(event) => {
            if (event.target.classList.contains("viewArchive")) {
              navigate("/pensieve/tags/memories/");
            } else {
              navigate("/posts/year-in-review-2021");
            }
          }}
          className={
            fourthBoxClicked
              ? `contentContainer ${fourthProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
              : `contentContainer ${fourthProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="bg-transparent h-[40px] w-[40px] pensieve__StyledFolder-sc-1a201yd-5 fcWQAr">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64ffda"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-zap bg-transparent"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%]">
            Year in Review 2021
          </div>
          {/* Footer */}
          <div className="bg-[#172a45] flex justify-between">
            <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
              31/12/21
            </div>
            <div className="text-[12px] text-[#64ffda] h-[15%] mt-[10px] font-customMono bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] relative">
              <button
                onClick={() => {
                  navigate("/pensieve/tags/memories/");
                }}
                className="viewArchive bg-[#172a45]"
              >
                #Memories
              </button>
            </div>
          </div>
        </div>
        {/* Fifth Project Box */}
        <div
          ref={refFifthProject}
          onMouseOver={() => setFifthBoxClicked(true)}
          onMouseOut={() => setFifthBoxClicked(false)}
          onClick={(event) => {
            if (event.target.classList.contains("viewArchive")) {
              navigate("/pensieve/tags/memories/");
            } else {
              navigate("/posts/year-in-review-2022");
            }
          }}
          className={
            fifthBoxClicked
              ? `contentContainer ${fifthProjectVisible ? "show" : ""
              } w-[48%] relative shadow-OtherProjectsBoxShadow py-8 px-7 rounded bg-[#172a45] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-[-10px] mt-4 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
              : `contentContainer ${fifthProjectVisible ? "show" : ""
              } w-[48%] relative py-8 px-7 rounded bg-[#172a45] mt-4 transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration top-0 opScreen6:w-[32%] opScreen7:w-[48%] opScreen9:w-[31%] opScreen13:w-[100%] cursor-pointer`
          }
        >
          {/* Header Box */}
          <div className="w-[100%] h-10 bg-[#172a45] flex justify-between items-center">
            {/* Folder SVG */}
            <div className="bg-transparent h-[40px] w-[40px] pensieve__StyledFolder-sc-1a201yd-5 fcWQAr">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64ffda"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-zap bg-transparent"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
          </div>
          {/* Title  */}
          <div className="h-[20%] mt-8 bg-[#172a45] antialiased text-[#ccd6f6] text-[22px] font-calibri font-semibold leading-[1.1] opScreen3:h-[13%] opScreen5:h-[20%] opScreen6:h-[19%] opScreen7:h-[14%] opScreen13:h-[12%] opScreen14:mt-[22px] opScreen21:h-[18%]">
            Year in Review 2022
          </div>
          {/* Footer */}
          <div className="bg-[#172a45] flex justify-between">
            <div className="h-[15%] mt-[10px] text-[#8892b0] text-[12px] font-calibri bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px]">
              31/12/22
            </div>
            <div className="text-[12px] text-[#64ffda] h-[15%] mt-[10px] font-customMono bg-[#172a45] flex items-end opScreen2:items-center opScreen3:h-[10%] opScreen5:mt-[23px] opScreen6:h-[13%] opScreen13:h-[22%] opScreen13:items-center opScreen14:mt-[15px] opScreen16:h-[6%] opScreen16:mt-[40px] opScreen17:mt-[20px] relative">
              <button
                onClick={() => {
                  navigate("/pensieve/tags/memories/");
                }}
                className="viewArchive bg-[#172a45]"
              >
                #Memories
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pensieve;