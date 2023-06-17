import React, { useState } from "react";
import "../../Css_applied/Pensieve/pensieveStyles.css";

const PensieveTags = () => {
  const [firstMemoryHoverUp, setFirstMemoryHoverUp] = useState(false);
  return (
    <div className="ml-12 mr-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem] h-[101vh] antialiased">
      <div className="w-[70%] mr-auto ml-auto text-[#64ffda] pt-[100px] text-[14px] font-customMono">
        <span class="mr-[7px]">←</span>
        <span className="relative">
          <a
            className="viewArchive cursor-pointer font-semibold leading-[1.5] tracking-[0.14em]"
            href="/pensieve"
          >
            ALL MEMORIES
          </a>
        </span>
      </div>
      <div className="mt-[50px] w-[70%] mr-auto ml-auto flex justify-between">
        <span className="text-[40px] text-[#ccd6f6] font-calibri font-semibold">
          #Memories
        </span>
        <span className="relative h-[23px] top-[18px]">
          <a
            className="viewArchiveTwo cursor-pointer text-[18px] text-[#64ffda] font-calibri font-normal"
            href="/pensieve/tags"
          >
            View all tags
          </a>
        </span>
      </div>
      {/* Years in Review */}
      <div className="w-[70%] mr-auto ml-auto mt-[5.25rem] flex">
        <span className="text-[#64ffda] pr-[30px] w-[12px] h-[12px]">▹</span>
        <div>
          <span className="relative">
            <a
              onMouseOver={() => setFirstMemoryHoverUp(true)}
              onMouseOut={() => setFirstMemoryHoverUp(false)}
              href="/posts/year-in-review-2021"
              className={`font-calibri text-[24px] cursor-pointer font-semibold leading-[1.1] ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration viewArchiveTwo ${
                firstMemoryHoverUp ? "text-[#64ffda]" : "text-[#a8b2d1]"
              }`}
            >
              Year in Review 2018
            </a>
          </span>
          <p>
            <time className="text-[#8892b0] text-[14px] leading-[1.5] font-normal font-customMono">
              December 31, 2018
            </time>
            <span className="text-[#8892b0] text-[14px] leading-[1.5] font-normal font-customMono">
              &nbsp;—&nbsp;
            </span>
            <span className="relative">
              <a
                aria-current="page"
                href="/pensieve/tags/memories/"
                className="text-[#64ffda] text-[14px] font-customMono viewArchiveTwo"
              >
                #Memories
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PensieveTags;