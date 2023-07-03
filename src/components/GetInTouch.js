import React, { useEffect, useState, useRef } from "react";

const GetInTouch = ({ contactBtnClickedActive }) => {
  const [btnHover, setBtnHover] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  // Displaying content after show time
  // Title Appear when Displayed
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleOne(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refOne.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleOne) {
      setTimeout(() => {
        setTitleVisible(true);
      }, 200);
    }
  });
  // Body Visibility
  const [isBodyVisible, setIsBodyVisible] = useState(false);
  useEffect(() => {
    if (isVisibleOne) {
      setTimeout(() => {
        setIsBodyVisible(true);
      }, 300);
    }
  });

  // Handling when click on About happens on the Navbar
  const [contactNavClick, setContactNavClick] = useState(false);
  useEffect(() => {
    setContactNavClick(contactBtnClickedActive);
  }, [contactBtnClickedActive]);

  useEffect(() => {
    if (contactNavClick) {
      var el = document.querySelector("#CONTACTDIV");
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
  }, [contactNavClick]);

  return (
    <div
      id="CONTACTDIV"
      className="ml-8 mr-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] gitScreen1:ml-auto gitScreen1:mr-auto gitScreen1:max-w-[600px] gitScreen2:max-w-[596px] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem] gitScreen3:mb-[8rem]"
    >
      <div>
        <div
          ref={refOne}
          className={`contentContainer ${
            titleVisible ? "show" : ""
          } pt-[5.4rem] text-center text-[#64ffda] font-customMono text-[16px] antialiased`}
        >
          <span>04.</span>
          <span className="pl-3">What's Next?</span>
        </div>
        <div
          ref={refOne}
          className={`contentContainer ${
            titleVisible ? "show" : ""
          } mt-[1.125rem] text-center text-[40px] text-[#ccd6f6] font-calibri leading-[1.1] font-semibold antialiased`}
        >
          Get In Touch
        </div>
        <div
          className={`contentContainer ${
            isBodyVisible ? "show" : ""
          } text-[#8892b0] text-[20px] font-calibri text-center antialiased mt-[10px] flex flex-wrap
  `}
        >
          I'm currently in a search of new and better opportunities. My inbox is
          always open. Whether you wanna hire or just say hi, I'll try my best
          to get back to you!
        </div>
        <div
          className={`contentContainer ${
            isBodyVisible ? "show" : ""
          } py-[5.5rem] flex justify-center items-center text-[#64ffda] text-[14px]  font-customMono leading-[1] antialiased`}
        >
          <a
            href="mailto:ahmadjajja86@gmail.com"
            onClick={() => setBtnClicked(true)}
            onMouseOver={() => setBtnHover(true)}
            onMouseOut={() => setBtnHover(false)}
            className={
              btnClicked
                ? "py-5 px-7 bg-headerBtnColor cursor-pointer border-[1px] rounded border-[#64ffda]] transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming"
                : btnHover
                ? "py-5 px-7 bg-headerBtnColor cursor-pointer border-[1px] rounded border-[#64ffda]] transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming"
                : "py-5 px-7 bg-transparent cursor-pointer border-[1px] rounded border-[#64ffda]] transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration ease-whereIWorkedTransitionTiming"
            }
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
