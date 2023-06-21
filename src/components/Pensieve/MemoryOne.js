import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Css_applied/Pensieve/pensieveStyles.css";
import year2018 from "../../images/Year's In Review/2018/2018.jpg"
import failure from "../../images/Year's In Review/2018/failure.jpeg"
import embracingComputerScience from "../../images/SecondListingImage.jpg";
import turningPoint from "../../images/ThirdListingImage.jpg";
import sacrifice from "../../images/Year's In Review/2018/sacrifice.jpeg"

const MemoryOne = () => {
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

  // For Title of Fourth Listing
  const [isFourthListingTitle, setFourthListingTitle] = useState(false);
  const [fourthListingTitleVisible, setFourthListingTitleVisible] =
    useState(false);
  const refFourthListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFourthListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFourthListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFourthListingTitle) {
      setTimeout(() => {
        setFourthListingTitleVisible(true);
      }, 200);
    }
  });

  // Fourth Listing Description
  const [isFourthListingDescription, setFourthListingDescription] =
    useState(false);
  const [fourthListingDescriptionVisible, setFourthListingDescriptionVisible] =
    useState(false);
  const refFourthDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFourthListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFourthDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFourthListingDescription) {
      setTimeout(() => {
        setFourthListingDescriptionVisible(true);
      }, 200);
    }
  });

  // Fourth Listing Image
  const [isFourthListingImage, setFourthListingImage] = useState(false);
  const [fourthListingImageVisible, setFourthListingImageVisible] =
    useState(false);
  const refFourthListingImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFourthListingImage(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFourthListingImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFourthListingImage) {
      setTimeout(() => {
        setFourthListingImageVisible(true);
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
          Year in Review 2018
        </div>
        <div>
          <span className="text-[#64ffda] text-[13px] leading-[1.5] font-customMono font-normal">
            December 31, 2018
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
          src={year2018}
          alt="PensieveCover"
        />
        {/* Description Header */}
        <div
          ref={refDescription}
          className={`contentContainer ${showFourthContent ? "show" : ""
            } mt-[25px] border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
        >
          <p className="pl-[1.5em] leading-[1.5] text-[#a8b2d1] italic">
            In the year 2018, my life took an unexpected turn as I faced a setback in my biology studies.
            This disappointment led me to make a significant decision for my future, choosing a tech
            journey in the field of computer science. Despite societal pressures and the allure of other
            career paths, I embarked on the path of computer science, and my journey began to unfold.
            This year marked the beginning of a transformative period in my life, where I discovered
            my passion for technology and made sacrifices to pursue it. Some of the things that happen with me in this year are as follows
          </p>
        </div>
        {/* Listing */}
        <ul
          className={`contentContainer ${listingVisible ? "show" : ""} pl-5`}
          ref={refListing}
        >
          <li className="mt-[2em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Failure in Biology
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Embracing Computer Science
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            A Turning Point in College
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Sacrifices Made along the Way
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
            Failure in Biology
          </h3>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              The journey towards computer science truly began when my 10th-grade biology results came in, leaving me
              dissatisfied with my performance. Although I had passed, I felt compelled to redirect my career aspirations
              away from the field of biology. It was a moment of self-reflection and realization that prompted me to explore
              other options that resonated more with my interests and skills.
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
            Embracing Computer Science
          </h3>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              The pivotal moment in my academic trajectory came when I faced the reality of my biology failure. This was a
              shocking revelation for me on that time, as most of my relatives were pursuing medical careers, and there was a prevailing
              belief that success could only be achieved through becoming a doctor. However, I chose to deviate from this
              conventional path and instead selected the field of computer science for my career.
            </p>
          </div>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              As I embarked on my educational journey after 10th grade, I had three options to
              choose from for my 12th grade (Intermediate) studies: ICS (Computer Science, Math, Physics),
              FSC Pre-Medical (Biology, Chemistry, Physics), and FSC Pre-Engineering (Chemistry, Physics, Math).
              Given my unsatisfactory performance in biology and lack of interest in chemistry, I opted for ICS,
              as it aligned with my passion for computer science. Although my relatives and family members encouraged
              me to pursue FSC, I firmly rejected their advice and followed my own aspirations, despite the uncertainty
              surrounding my future career path.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSecondListingImage}
              className={`contentContainer ${secondListingImageVisible ? "show" : ""
                }`}
              src={embracingComputerScience}
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
            A Turning Point in College
          </h3>
          <div
            ref={refThirdDescription}
            className={`contentContainer ${thirdListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              As I stepped into college, I encountered an environment that differed greatly from what I had anticipated.
              The relaxed atmosphere, lack of attendance requirements, and less-than-stellar teachers initially left me
              disheartened. However, a fortuitous encounter with a computer science teacher named{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Sir Ishaq
                </span>
              </span>{" "}
              proved to be a turning point. His exceptional teaching skills and passion for the subject sparked a
              newfound interest within me. Regular attendance became a priority as I delved deeper into the world of
              computer science and began to understand its intricacies.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refThirdListingImage}
              className={`contentContainer ${thirdListingImageVisible ? "show" : ""
                }`}
              src={turningPoint}
              alt="PensieveCover"
            />
          </div>
        </div>

        {/* Fourth Thing */}
        <div>
          <h3
            ref={refFourthListingTitle}
            className={`contentContainer ${fourthListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Sacrifices Made along the Way
          </h3>
          <div
            ref={refFourthDescription}
            className={`contentContainer ${isFourthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              In 2018, my passion for cricket was at its peak. I enthusiastically organized cricket tournaments in my village
              and actively participated in matches held in various neighboring communities. My dream of joining the national
              cricket team as a batsman burned brightly within me. However, the realization dawned upon me that I lacked the
              necessary support from my family to pursue a career in cricket. It was during this period that my uncle, my father's brother,
              provided me with invaluable guidance. He reminded me of my role as the elder brother within our family and emphasized
              the importance of supporting and making them proud. It became evident that pursuing cricket would not lead me to the
              international stage or enable me to join a cricket academy. Determined to honor my responsibilities, I made the difficult
              decision to relinquish my dreams of cricket stardom and focus wholeheartedly on my studies. It was then that I crossed
              paths with computer science, which ignited a new sense of purpose and set me on the course towards my true passion.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFourthListingImage}
              className={`contentContainer ${fourthListingImageVisible ? "show" : ""
                }`}
              src={sacrifice}
              alt="PensieveCover"
            />
          </div>
        </div>

        {/* Fourth Thing */}
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
              Throughout my journey, I encountered setbacks and sacrifices. Giving up my dreams of becoming a cricketer was
              particularly difficult, but it allowed me to prioritize my family's well-being and take on the role of a responsible
              elder sibling. By redirecting my focus towards my studies, I discovered a newfound love for computer science and began
              to nurture my interest in this fascinating field.
            </p>
          </div>
          <div
            ref={refFifthDescription}
            className={`contentContainer ${isFifthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              "Follow your passion, stay true to yourself, never follow someone else's path unless you're in the woods and
              you're lost, and you see a path, then, by all means, you should follow that." -{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Ellen DeGeneres
                </span>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryOne;