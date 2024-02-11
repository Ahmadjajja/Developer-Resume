import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Css_applied/Pensieve/PensieveTagsStyles.css";

const PensieveTags = () => {
  const [firstMemoryHoverUp, setFirstMemoryHoverUp] = useState(false);
  return (
    <div className="ml-8 mr-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem] h-[101vh] antialiased">
      <div className="w-[70%] mr-auto ml-auto text-[#64ffda] pt-[100px] text-[14px] font-customMono">
        <span className="mr-[15px]">←</span>
        <span className="relative">
          <Link
            to={"/pensieve"}
            className="viewArchive cursor-pointer font-semibold leading-[1.5] tracking-[0.14em]"
          >
            ALL MEMORIES
          </Link>
        </span>
      </div>
      <div className="mt-[50px] w-[70%] mr-auto ml-auto flex justify-between">
        <span className="text-[40px] text-[#ccd6f6] font-calibri font-semibold">
          Tags
        </span>
      </div>
      <div className="w-[70%] mr-auto ml-auto mt-[4.25rem] flex">
        <span className="text-[#64ffda] pr-[30px] w-[12px] h-[12px]">➾</span>
        <div>
          <span className="relative">
            <Link
              to="/pensieve/tags/memories/"
              className={`font-calibri text-22 cursor-pointer leading-1.1 ease-whereIWorkedTransitionTiming transition-whereIWorkedTransitionProperty duration-whereIWorkedTransitionDuration viewArchiveTwo ${
                firstMemoryHoverUp ? "text-[#64ffda]" : "text-[#a8b2d1]"
              } `}
              onMouseOver={() => setFirstMemoryHoverUp(true)}
              onMouseOut={() => setFirstMemoryHoverUp(false)}
            >
              Memories (6)
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PensieveTags;