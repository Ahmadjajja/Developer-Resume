import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Css_applied/Pensieve/pensieveStyles.css";
import year2020 from "../../images/Year's In Review/2020/2020.jpg"
import exams from "../../images/Year's In Review/2020/exams.jpeg"
import coding from "../../images/Year's In Review/2020/coding.jpg";
import admission from "../../images/Year's In Review/2020/admissions.jpeg";
import mentor from "../../images/Year's In Review/2020/mentor.jpg"
import start from "../../images/Year's In Review/2020/start.jpeg"

const MemoryThree = () => {
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

  // Fifth Listing Image
  const [isFifthListingImage, setFifthListingImage] = useState(false);
  const [fifthListingImageVisible, setFifthListingImageVisible] =
    useState(false);
  const refFifthListingImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFifthListingImage(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFifthListingImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFifthListingImage) {
      setTimeout(() => {
        setFifthListingImageVisible(true);
      }, 200);
    }
  });

  // For Title of sixth Listing
  const [isSixthListingTitle, setSixthListingTitle] = useState(false);
  const [sixthListingTitleVisible, setSixthListingTitleVisible] =
    useState(false);
  const refSixthListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSixthListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSixthListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSixthListingTitle) {
      setTimeout(() => {
        setSixthListingTitleVisible(true);
      }, 200);
    }
  });

  // Sixth Listing Description
  const [isSixthListingDescription, setSixthListingDescription] =
    useState(false);
  const [sixthListingDescriptionVisible, setSixthListingDescriptionVisible] =
    useState(false);
  const refSixthDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSixthListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSixthDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSixthListingDescription) {
      setTimeout(() => {
        setSixthListingDescriptionVisible(true);
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
          Year in Review 2020
        </div>
        <div>
          <span className="text-[#64ffda] text-[13px] leading-[1.5] font-customMono font-normal">
            December 31, 2020
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
          src={year2020}
          alt="PensieveCover"
        />
        {/* Description Header */}
        <div
          ref={refDescription}
          className={`contentContainer ${showFourthContent ? "show" : ""
            } mt-[25px] border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
        >
          <p className="pl-[1.5em] leading-[1.5] text-[#a8b2d1] italic">
            The year 2020 brought about significant changes and important decisions in my life.
            From the outbreak of the Covid-19 pandemic to selecting a field of study for my bachelor's
            degree, navigating university admissions, and embarking on the journey of learning programming
            languages, this year was filled with transformative experiences. Some of the things that happen
            with me in this year are as follows
          </p>
        </div>
        {/* Listing */}
        <ul
          className={`contentContainer ${listingVisible ? "show" : ""} pl-5`}
          ref={refListing}
        >
          <li className="mt-[2em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Covid-19 and Disrupted Exams
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Choosing Coding as a Career
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            University Admission
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Meeting Faizan Amin
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Starting C++
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
            Covid-19 and Disrupted Exams
          </h3>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              As the year commenced, I dedicated myself to preparing for my 12th-grade exams, with aspirations of achieving
              high marks for university admissions. My days were packed with intense studying, attending college classes,
              and engaging in extracurricular activities such as playing cricket. However, the outbreak of the Covid-19
              pandemic disrupted the education system, and the board exams were canceled. Despite initial disappointment,
              I accepted the decision and turned my attention to contemplating my future university plans.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFirstListingImage}
              className={`contentContainer ${firstListingImageVisible ? "show" : ""}`}
              src={exams}
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
            Choosing Coding as a Career
          </h3>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              With the cancellation of exams, I was prompted to think creatively about my career path. After seeking advice
              from my teachers, cousins, and conducting extensive research, I made the decision to pursue coding as my career.
              Having acquired a solid foundation in computer science during my previous two years of study, I felt confident
              in this choice. I resolved to pursue a bachelor's degree in computer science, recognizing the tremendous potential
              and opportunities within the field.
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
            University Admission
          </h3>
          <div
            ref={refThirdDescription}
            className={`contentContainer ${thirdListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Once I had determined my career path, the next step was selecting a university. Extensive research led me to
              consider various options, and initially, I was shortlisted for admission to
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  the Islamia University Bahawalpur
                </span>
              </span>{" "}
              . However, due to personal reasons, I was unable to submit my documents in time and missed the opportunity. Nonetheless,
              I persevered and soon found another opportunity by being shortlisted and submitting my documents to
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  the University of Agriculture
                </span>
              </span>{" "}
              .
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refThirdListingImage}
              className={`contentContainer ${thirdListingImageVisible ? "show" : ""
                }`}
              src={admission}
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
            Meeting Faizan Amin
          </h3>
          <div
            ref={refFourthDescription}
            className={`contentContainer ${isFourthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Upon arriving in Faisalabad, a city far from my hometown, I experienced a sense of excitement and unfamiliarity.
              It felt like stepping into a different world. During my university's Orientation Day, I had a life-changing encounter
              with a remarkable individual named
              {" "}<span className="relative">
                <a href="https://github.com/faizan170" target="_blank" className="text-[#64ffda] viewArchiveTwo cursor-pointer">Faizan Amin</a>
              </span>{" "}
              . Despite being only two years older than me, Faizan was already a successful
              Machine Learning Engineer, earning a salary twice that of doctors. His expertise and success inspired me greatly, and our
              brief interaction left a lasting impact. From that moment, I felt assured that I had chosen the right path and embarked on my
              journey with renewed enthusiasm.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFourthListingImage}
              className={`contentContainer ${fourthListingImageVisible ? "show" : ""
                }`}
              src={mentor}
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
            Starting C++
          </h3>
          <div
            ref={refFifthDescription}
            className={`contentContainer ${isFifthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              As my university classes began, I was surprised to discover that the curriculum included only one computer
              science-related subject out of six, with the remaining subjects focusing on non-technical areas such as
              physics and mathematics. Recognizing the need to pursue coding independently, I
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  took the initiative to learn C++
                </span>
              </span>{" "}
              programming on my own. In just twelve days, I grasped the fundamental concepts of both procedural and
              object-oriented programming paradigms. While my university did not offer a dedicated coding course, my
              friends from other institutions shared their coding assignments with me, providing opportunities to enhance
              my
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  problem-solving and logic-building skills
                </span>
              </span>{" "}
              . Although there were challenges along the way, such as experiencing
              delayed payment for completing a client's C++ assignment, the satisfaction of solving complex problems outweighed
              any monetary reward.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFifthListingImage}
              className={`contentContainer ${fifthListingImageVisible ? "show" : ""
                }`}
              src={start}
              alt="PensieveCover"
            />
          </div>
        </div>
        {/* Sixth Thing */}
        <div>
          <h3
            ref={refSixthListingTitle}
            className={`contentContainer ${sixthListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            End Remarks and Quotes
          </h3>
          <div
            ref={refSixthDescription}
            className={`contentContainer ${isSixthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              The year 2020 was a transformative period marked by the onset of the Covid-19 pandemic, decision-making processes,
              university admissions, and the initiation of my coding journey. It challenged me to adapt, reflect, and make choices
              that would shape my future. As I look back on this year, a quote come to mind:
            </p>
          </div>
          <div
            ref={refSixthDescription}
            className={`contentContainer ${isSixthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              "The only way to do great work is to love what you do." - {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Steve Jobs
                </span>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryThree;