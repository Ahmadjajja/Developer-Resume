import React, { useState, useEffect } from "react";
import "../Css_applied/headerStyles.css";

const Header = () => {
  const [btnHover, setBtnHover] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [showFirstContent, setShowFirstContent] = useState(false);
  const [showSecondContent, setShowSecondContent] = useState(false);
  const [showThirdContent, setShowThirdContent] = useState(false);
  const [showFourthContent, setShowFourthContent] = useState(false);
  const [showFifthContent, setShowFifthContent] = useState(false);

  useEffect(() => {
    // For First
    setTimeout(() => {
      setShowFirstContent(true);
    }, 1700);
    // For Second
    setTimeout(() => {
      setShowSecondContent(true);
    }, 1800);
    // For Third
    setTimeout(() => {
      setShowThirdContent(true);
    }, 1900);
    // For Fourth
    setTimeout(() => {
      setShowFourthContent(true);
    }, 2000);
    // For Fifth
    setTimeout(() => {
      setShowFifthContent(true);
    }, 2100);
  }, []);
  return (
    <>
      <div className={{}}>
        <div
          className={`mr-8  ml-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
        >
          <div
            className={`contentContainer ${showFirstContent ? "show" : ""
              }  block  text-[#64ffda]  text-lg  font-normal  ml-2  font-customMono antialiased headerScreen1:w-[44.5rem]`}
          >
            Hi, my name is
          </div>
          <div
            className={`contentContainer ${showSecondContent ? "show" : ""
              } bigHeading mt-3 block text-[#ccd6f6]  font-semibold  text-[1.5em]  leading-[1.1]  font-calibri antialiased headerScreen1:w-[45rem]`}
          >
            Ahmad Jajja
          </div>
          <div
            className={`contentContainer ${showThirdContent ? "show" : ""
              } smallHeading block  text-[#8892b0]  font-semibold  leading-[1]  font-calibri antialiased headerScreen1:w-[90%]`}
          >
            A Full-Stack-Engineer and Mentor
          </div>
          <div
            className={`contentContainer ${showFourthContent ? "show" : ""
              } description block text-[#8892b0]  mt-[1.16rem] py-2  text-lg antialiased headerScreen1:w-[70%]`}
          >
            A Techy with keen interest in Web Development, DEVOPS, WEB 3.0 and machine learning. Love to learn new technologies, currently learning and enhancing my knowledge in docker, kubernates and CI/CD.
            An aspiring{" "}
            <div className="relative inline-block">
              <a
                className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                href="https://drive.google.com/file/d/1HAMbxoTU0kpSDj8k-YFjYE14ngWeisZ1/view"
                target="_blank"
              >
                Certified&nbsp;
              </a>{" "}
            </div>
            Full-Stack-Engineer with a focus on Large Scale Systems.
          </div>
          <div
            className={`contentContainer ${showFifthContent ? "show" : ""
              } pt-[3.125rem] block`}
          >
            <a
              href="mailto:ahmadjajja86@gmail.com"
              // onClick={() => setBtnClicked(true)}
              onMouseOver={() => setBtnHover(true)}
              onMouseOut={() => setBtnHover(false)}
              className={
                btnClicked
                  ? " text-[#64ffda] inline-block py-[1.30rem]  px-[1.25rem]  border  bg-headerBtnColor border-[#64ffda]  font-customMono  text-fourteenPixel  leading-[1]  cursor-pointer  rounded  transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming"
                  : btnHover
                    ? " text-[#64ffda] inline-block py-[1.30rem]  px-[1.25rem]  border  bg-headerBtnColor border-[#64ffda]  font-customMono  text-fourteenPixel  leading-[1]  cursor-pointer  rounded  transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming"
                    : " text-[#64ffda] inline-block  py-[1.30rem]  px-[1.25rem]  border  bg-transparent  border-[#64ffda]  font-customMono  text-fourteenPixel  leading-[1]  cursor-pointer  rounded  transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming  no-underline antialiased"
              }
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
