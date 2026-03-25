import React, { useEffect, useState } from "react";
import "../Css_applied/headerStyles.css";

const Header = () => {
  const [showFirstContent, setShowFirstContent] = useState(false);
  const [showSecondContent, setShowSecondContent] = useState(false);
  const [showThirdContent, setShowThirdContent] = useState(false);
  const [showFourthContent, setShowFourthContent] = useState(false);
  const [showFifthContent, setShowFifthContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirstContent(true);
    }, 1700);
    setTimeout(() => {
      setShowSecondContent(true);
    }, 1800);
    setTimeout(() => {
      setShowThirdContent(true);
    }, 1900);
    setTimeout(() => {
      setShowFourthContent(true);
    }, 2000);
    setTimeout(() => {
      setShowFifthContent(true);
    }, 2100);
  }, []);

  return (
    <header className="header-shell" aria-label="Introduction">
      <div
        className={`mr-8 ml-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
      >
        <div
          className={`contentContainer ${
            showFirstContent ? "show" : ""
          } block text-accent text-lg font-normal ml-2 font-customMono antialiased headerScreen1:w-[42.5rem]`}
        >
          Hi, my name is
        </div>
        <div
          className={`contentContainer ${
            showSecondContent ? "show" : ""
          } bigHeading text-gradient-hero mt-3 block font-semibold text-[1.5em] leading-[1.1] font-calibri antialiased headerScreen1:w-[43rem]`}
        >
          Ahmad Jajja.
        </div>
        <div
          className={`contentContainer ${
            showThirdContent ? "show" : ""
          } smallHeading block text-muted font-semibold leading-[1] font-calibri antialiased headerScreen1:w-[90%] marginTop: mt-3`}
        >
          A Software Engineer
        </div>
        <div
          className={`contentContainer ${
            showFourthContent ? "show" : ""
          } description block text-muted mt-[1.16rem] py-2 text-lg antialiased headerScreen1:w-[70%]`}
          style={{
            fontFamily:
              '"DM Sans", ui-sans-serif, system-ui, -apple-system, sans-serif',
          }}
        >
          and graduate student at Montana State University, serving as a
          Graduate Teaching Assistant for 3 semesters.
        </div>
        <div
          className={`contentContainer ${
            showFifthContent ? "show" : ""
          } pt-[3.125rem] block`}
        >
          <a
            href="mailto:ahmadjajja86@gmail.com"
            className="btn-portfolio-primary no-underline"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
