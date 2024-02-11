import React, { useState } from "react";
import "../../Css_applied/Pensieve/pensieveStyles.css";

const PensieveTags = () => {
  const [zerothMemoryHoverUp, setZerothMemoryHoverUp] = useState(false);
  const [firstMemoryHoverUp, setFirstMemoryHoverUp] = useState(false);
  const [secondMemoryHoverUp, setSecondMemoryHoverUp] = useState(false);
  const [thirdMemoryHoverUp, setThirdMemoryHoverUp] = useState(false);
  const [fourthMemoryHoverUp, setFourthMemoryHoverUp] = useState(false);
  const [fifthMemoryHoverUp, setFifthMemoryHoverUp] = useState(false);
  return (
    <div className="sm:ml-8 sm:mr-8  h-[101vh] antialiased">
      <div className="w-[80%] mr-auto ml-auto text-[#64ffda] pt-[100px] text-[14px] font-customMono">
        <span className="mr-[7px]">←</span>
        <span className="relative">
          <a
            className="viewArchive cursor-pointer font-semibold leading-[1.5] tracking-[0.14em]"
            href="/pensieve"
          >
            ALL MEMORIES
          </a>
        </span>
      </div>
      <div className="mt-[50px] w-[80%] mr-auto ml-auto flex justify-between">
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
      {/* Early Life in a Small Village */}
      <div className="w-[80%] mr-auto ml-auto mt-[5.25rem] flex">
        <span className="text-[#64ffda] pr-[30px] w-[12px] h-[12px]">➾</span>
        <div>
          <span className="relative">
            <a
              onMouseOver={() => setZerothMemoryHoverUp(true)}
              onMouseOut={() => setZerothMemoryHoverUp(false)}
              href="/posts/early-life-in-a-small-village"
              className={`font-calibri text-[24px] cursor-pointer font-semibold leading-[1.1] ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration viewArchiveTwo ${zerothMemoryHoverUp ? "text-[#64ffda]" : "text-[#a8b2d1]"
                }`}
            >
              Early Life in a Small Village
            </a>
          </span>
          <p>
            <time className="text-[#8892b0] text-[14px] leading-[1.5] font-normal font-customMono">
              December 31, 2017
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
      {/* Years in Review 2018 */}
      <div className="w-[80%] mr-auto ml-auto mt-[5.25rem] flex">
        <span className="text-[#64ffda] pr-[30px] w-[12px] h-[12px]">➾</span>
        <div>
          <span className="relative">
            <a
              onMouseOver={() => setFirstMemoryHoverUp(true)}
              onMouseOut={() => setFirstMemoryHoverUp(false)}
              href="/posts/year-in-review-2018"
              className={`font-calibri text-[24px] cursor-pointer font-semibold leading-[1.1] ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration viewArchiveTwo ${firstMemoryHoverUp ? "text-[#64ffda]" : "text-[#a8b2d1]"
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
      {/* Years in Review 2019 */}
      <div className="w-[80%] mr-auto ml-auto mt-[5.25rem] flex">
        <span className="text-[#64ffda] pr-[30px] w-[12px] h-[12px]">➾</span>
        <div>
          <span className="relative">
            <a
              onMouseOver={() => setSecondMemoryHoverUp(true)}
              onMouseOut={() => setSecondMemoryHoverUp(false)}
              href="/posts/year-in-review-2019"
              className={`font-calibri text-[24px] cursor-pointer font-semibold leading-[1.1] ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration viewArchiveTwo ${secondMemoryHoverUp ? "text-[#64ffda]" : "text-[#a8b2d1]"
                }`}
            >
              Year in Review 2019
            </a>
          </span>
          <p>
            <time className="text-[#8892b0] text-[14px] leading-[1.5] font-normal font-customMono">
              December 31, 2019
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
      {/* Years in Review 2020 */}
      <div className="w-[80%] mr-auto ml-auto mt-[5.25rem] flex">
        <span className="text-[#64ffda] pr-[30px] w-[12px] h-[12px]">➾</span>
        <div>
          <span className="relative">
            <a
              onMouseOver={() => setThirdMemoryHoverUp(true)}
              onMouseOut={() => setThirdMemoryHoverUp(false)}
              href="/posts/year-in-review-2020"
              className={`font-calibri text-[24px] cursor-pointer font-semibold leading-[1.1] ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration viewArchiveTwo ${thirdMemoryHoverUp ? "text-[#64ffda]" : "text-[#a8b2d1]"
                }`}
            >
              Year in Review 2020
            </a>
          </span>
          <p>
            <time className="text-[#8892b0] text-[14px] leading-[1.5] font-normal font-customMono">
              December 31, 2020
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
      {/* Years in Review 2021 */}
      <div className="w-[80%] mr-auto ml-auto mt-[5.25rem] flex">
        <span className="text-[#64ffda] pr-[30px] w-[12px] h-[12px]">➾</span>
        <div>
          <span className="relative">
            <a
              onMouseOver={() => setFourthMemoryHoverUp(true)}
              onMouseOut={() => setFourthMemoryHoverUp(false)}
              href="/posts/year-in-review-2021"
              className={`font-calibri text-[24px] cursor-pointer font-semibold leading-[1.1] ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration viewArchiveTwo ${fourthMemoryHoverUp ? "text-[#64ffda]" : "text-[#a8b2d1]"
                }`}
            >
              Year in Review 2021
            </a>
          </span>
          <p>
            <time className="text-[#8892b0] text-[14px] leading-[1.5] font-normal font-customMono">
              December 31, 2021
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
      {/* Years in Review 2022 */}
      <div className="mb-5 w-[80%] mr-auto ml-auto mt-[5.25rem] flex">
        <span className="text-[#64ffda] pr-[30px] w-[12px] h-[12px]">➾</span>
        <div>
          <span className="relative">
            <a
              onMouseOver={() => setFifthMemoryHoverUp(true)}
              onMouseOut={() => setFifthMemoryHoverUp(false)}
              href="/posts/year-in-review-2022"
              className={`font-calibri text-[24px] cursor-pointer font-semibold leading-[1.1] ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration viewArchiveTwo ${fifthMemoryHoverUp ? "text-[#64ffda]" : "text-[#a8b2d1]"
                }`}
            >
              Year in Review 2022
            </a>
          </span>
          <p>
            <time className="text-[#8892b0] text-[14px] leading-[1.5] font-normal font-customMono">
              December 31, 2022
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