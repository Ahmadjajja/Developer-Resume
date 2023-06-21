import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Css_applied/Pensieve/pensieveStyles.css";
import year2019 from "../../images/Year's In Review/2019/2019.jpeg"
import failure from "../../images/Year's In Review/2019/standOutInCroud.jpg"
import coding from "../../images/Year's In Review/2019/coding.jpg";
import thinkOutsideTheBox from "../../images/Year's In Review/2019/thinkingOutsideTheBox.jpeg";
import sacrifice from "../../images/Year's In Review/2018/sacrifice.jpeg"

const MemoryTwo = () => {
  const [showFirstContent, setShowFirstContent] = useState(false);
  const [showSecondContent, setShowSecondContent] = useState(false);
  const [showThirdContent, setShowThirdContent] = useState(false);
  const [showFourthContent, setShowFourthContent] = useState(false);

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
    }, 2000);
    // For Fourth
    setTimeout(() => {
      setShowFourthContent(true);
    }, 2200);
  }, []);

  // For Blog Content
  const refDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // For Listing
  const [isListingDescription, setIsListingDescription] = useState(false);
  const [listingVisible, setListingVisible] = useState(false);
  const refListing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refListing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isListingDescription) {
      setTimeout(() => {
        setListingVisible(true);
      }, 200);
    }
  });

  // For Title of First Listing
  const [isFirstListingTitle, setFirstListingTitle] = useState(false);
  const [firstListingTitleVisible, setFirstListingTitleVisible] =
    useState(false);
  const refFirstListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFirstListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFirstListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFirstListingTitle) {
      setTimeout(() => {
        setFirstListingTitleVisible(true);
      }, 200);
    }
  });

  // First Listing Description
  const [isFirstListingDescription, setFirstListingDescription] =
    useState(false);
  const [firstListingDescriptionVisible, setFirstListingDescriptionVisible] =
    useState(false);
  const refFirstListingDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFirstListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFirstListingDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFirstListingDescription) {
      setTimeout(() => {
        setFirstListingDescriptionVisible(true);
      }, 200);
    }
  });

  // First Listing Image
  const [isFirstListingImage, setFirstListingImage] = useState(false);
  const [firstListingImageVisible, setFirstListingImageVisible] =
    useState(false);
  const refFirstListingImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFirstListingImage(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFirstListingImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFirstListingImage) {
      setTimeout(() => {
        setFirstListingImageVisible(true);
      }, 200);
    }
  });

  // For Title of Second Listing
  const [isSecondListingTitle, setSecondListingTitle] = useState(false);
  const [secondListingTitleVisible, setSecondListingTitleVisible] =
    useState(false);
  const refSecondListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecondListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSecondListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSecondListingTitle) {
      setTimeout(() => {
        setSecondListingTitleVisible(true);
      }, 200);
    }
  });

  // Second Listing Description
  const [isSecondListingDescription, setSecondListingDescription] =
    useState(false);
  const [secondListingDescriptionVisible, setSecondListingDescriptionVisible] =
    useState(false);
  const refSecondDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecondListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSecondDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSecondListingDescription) {
      setTimeout(() => {
        setSecondListingDescriptionVisible(true);
      }, 200);
    }
  });

  // Second Listing Image
  const [isSecondListingImage, setSecondListingImage] = useState(false);
  const [secondListingImageVisible, setSecondListingImageVisible] =
    useState(false);
  const refSecondListingImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecondListingImage(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSecondListingImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSecondListingImage) {
      setTimeout(() => {
        setSecondListingImageVisible(true);
      }, 200);
    }
  });

  // For Title of Third Listing
  const [isThirdListingTitle, setThirdListingTitle] = useState(false);
  const [thirdListingTitleVisible, setThirdListingTitleVisible] =
    useState(false);
  const refThirdListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setThirdListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refThirdListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isThirdListingTitle) {
      setTimeout(() => {
        setThirdListingTitleVisible(true);
      }, 200);
    }
  });

  // Third Listing Description
  const [isThirdListingDescription, setThirdListingDescription] =
    useState(false);
  const [thirdListingDescriptionVisible, setThirdListingDescriptionVisible] =
    useState(false);
  const refThirdDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setThirdListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refThirdDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isThirdListingDescription) {
      setTimeout(() => {
        setThirdListingDescriptionVisible(true);
      }, 200);
    }
  });

  // Third Listing Image
  const [isThirdListingImage, setThirdListingImage] = useState(false);
  const [thirdListingImageVisible, setThirdListingImageVisible] =
    useState(false);
  const refThirdListingImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setThirdListingImage(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refThirdListingImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isThirdListingImage) {
      setTimeout(() => {
        setThirdListingImageVisible(true);
      }, 200);
    }
  });

  // For Title of Fifth Listing
  const [isFifthListingTitle, setFifthListingTitle] = useState(false);
  const [fifthListingTitleVisible, setFifthListingTitleVisible] =
    useState(false);
  const refFifthListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFifthListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFifthListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFifthListingTitle) {
      setTimeout(() => {
        setFifthListingTitleVisible(true);
      }, 200);
    }
  });

  // Fifth Listing Description
  const [isFifthListingDescription, setFifthListingDescription] =
    useState(false);
  const [fifthListingDescriptionVisible, setFifthListingDescriptionVisible] =
    useState(false);
  const refFifthDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFifthListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFifthDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFifthListingDescription) {
      setTimeout(() => {
        setFifthListingDescriptionVisible(true);
      }, 200);
    }
  });

  return (
    <div className="ml-8 mr-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem] antialiased myScreen8:ml-8 myScreen8:mr-8">
      {/* Back to All Memories */}
      <div
        className={`contentContainer ${showFirstContent ? "show" : ""
          } w-[70%] mr-auto ml-auto text-[#64ffda] pt-[70px] text-[14px] font-customMono myScreen8:w-[100%]`}
      >
        <span className="mr-[7px]">←</span>
        <span className="relative">
          <Link
            className="viewArchive cursor-pointer font-semibold leading-[1.5] tracking-[0.14em]"
            to="/pensieve"
          >
            ALL MEMORIES
          </Link>
        </span>
      </div>
      {/* Memory Tags */}
      <div
        className={`contentContainer ${showSecondContent ? "show" : ""
          } mt-[50px] ml-auto mr-auto w-[70%] myScreen8:w-[100%]`}
      >
        <div className="text-[#ccd6f6] text-myPensieveFont font-semibold leading-[1.1] font-calibri">
          Year in Review 2019
        </div>
        <div>
          <span className="text-[#64ffda] text-[13px] leading-[1.5] font-customMono font-normal">
            December 31, 2019
          </span>
          <span className="text-[#64ffda] text-[13px] leading-[1.5] font-customMono font-normal">
            {" "}
            —{" "}
          </span>
          <span className="relative">
            <Link
              to="/pensieve/tags/memories/"
              className="text-[#64ffda] text-[13px] leading-[1.5] font-customMono font-normal viewArchiveTwo cursor-pointer"
            >
              #Memories
            </Link>
          </span>
        </div>
      </div>
      {/* Blog */}
      <div className="w-[70%] mr-auto ml-auto mt-[40px] myScreen8:w-[100%]">
        <img
          className={`contentContainer ${showThirdContent ? "show" : ""}`}
          src={year2019}
          alt="PensieveCover"
        />
        {/* Description Header */}
        <div
          ref={refDescription}
          className={`contentContainer ${showFourthContent ? "show" : ""
            } mt-[25px] border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
        >
          <p className="pl-[1.5em] leading-[1.5] text-[#a8b2d1] italic">
            In 2019, I experienced remarkable achievements in my computer science journey, securing top
            positions among my peers and excelling in the 11th-grade board exam. Additionally, I embraced
            the world of programming with enthusiasm, discovering a passion that continues to drive me
            forward. Some of the things that happen with me in this year are as follows
          </p>
        </div>
        {/* Listing */}
        <ul
          className={`contentContainer ${listingVisible ? "show" : ""} pl-5`}
          ref={refListing}
        >
          <li className="mt-[2em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            A Standout in the Crowd
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            A Conversation That Changed Everything
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Thinking Outside the Box
          </li>
        </ul>
        {/* Description of Listings */}
        {/* First Listing */}
        <div>
          <h3
            ref={refFirstListingTitle}
            className={`contentContainer ${firstListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            A Standout in the Crowd
          </h3>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              In 2019, my journey took an exceptional turn when I received the results of my 11th grade. Despite being initially
              overshadowed by the academic performance of 150 students who had higher marks than me in the 10th grade, I surpassed
              expectations and secured the 6th position among a total of 250 students in my college. Moreover, I proudly achieved the
              1st position in the ICS (Intermediate in Computer Science) batch, setting a remarkable milestone for myself. A significant
              highlight of this accomplishment was scoring an astonishing 74 out of 75 marks in the computer science subject 11th-grade board exam, becoming the
              first student in the history of my college, under the guidance of Sir Ishaq, to achieve such an exceptional result. This
              unexpected achievement not only left me astounded but also instilled a newfound belief in my capabilities, as I embarked
              on my journey in computer science.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFirstListingImage}
              className={`contentContainer ${firstListingImageVisible ? "show" : ""}`}
              src={failure}
              alt="PensieveCover"
            />
          </div>
        </div>
        {/* Second Listing */}
        <div>
          <h3
            ref={refSecondListingTitle}
            className={`contentContainer ${secondListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            A Conversation That Changed Everything
          </h3>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              At the commencement of my second year (12th grade) in college, I was apprehensive about the inclusion of
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  programming
                </span>
              </span>{" "},
              particularly the C language, in our curriculum. This concern was further amplified by the remarks of other college
              students who claimed that programming was an arduous task. However, on the first day of my second year, I sought solace
              in a conversation with my cousin, Babar, who had completed his BCS (Bachelor of Computer Science). He reassured me, in
              Urdu, that
              {"  "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  "پروگرامنگ حلوہ ہے حلوہ,"
                </span>
              </span>{" "} which translates to "Programming is fun and very easy." This single sentence provided
              immense relief and ignited my curiosity and fascination with the world of programming, marking
              <span className="relative">
                {" "}<span className="text-[#64ffda] viewArchiveTwo ">
                  the beginning of my coding journey in 2019
                </span>
              </span>{" "}.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSecondListingImage}
              className={`contentContainer ${secondListingImageVisible ? "show" : ""
                }`}
              src={coding}
              alt="PensieveCover"
            />
          </div>
        </div>
        {/* Thrid Thing */}
        <div>
          <h3
            ref={refThirdListingTitle}
            className={`contentContainer ${thirdListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Thinking Outside the Box
          </h3>
          <div
            ref={refThirdDescription}
            className={`contentContainer ${thirdListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              While engrossed in my
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  programming studies
                </span>
              </span>{" "} for the past three months, a remarkable moment unfolded. I vividly
              remember encountering a problem-solving exercise in my C language book that focused on the If-else concept.
              Intrigued, I decided to approach the problem from a different angle and worked through it diligently, using
              pen and paper, as I did not possess a computer to test my solution. The following day, I excitedly approached
              my teacher and shared my alternative approach, eager to validate its correctness. With his guidance, I               <span className="relative">
                {" "}<span className="text-[#64ffda] viewArchiveTwo ">
                  ran the
                  code on a computer
                </span>
              </span>{" "}, and to my astonishment, it executed flawlessly.
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  The indescribable elation I experienced in
                  that moment was priceless
                </span>
              </span>{" "}, fueling my growing interest in coding. Subsequently, I began solving other problems
              in the book independently, immersing myself in its contents. Through meticulous study, I acquired a comprehensive
              understanding of the C language and the concepts of relational databases, laying a solid foundation upon which I
              continued to build.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refThirdListingImage}
              className={`contentContainer ${thirdListingImageVisible ? "show" : ""
                }`}
              src={thinkOutsideTheBox}
              alt="PensieveCover"
            />
          </div>
        </div>

        {/* Fifth Thing */}
        <div>
          <h3
            ref={refFifthListingTitle}
            className={`contentContainer ${fifthListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            End Remarks and Quotes
          </h3>
          <div
            ref={refFifthDescription}
            className={`contentContainer ${isFifthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Throughout my journey of 2019,  I experienced significant growth and accomplishments in academics and programming. These milestones fueled my passion and set the stage for a promising future in computer science.
            </p>
          </div>
          <div
            ref={refFifthDescription}
            className={`contentContainer ${isFifthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              "Truly willing to do something automatically embrace the new doors." -{" "}
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  Ahmad Jajja
                </span>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryTwo;