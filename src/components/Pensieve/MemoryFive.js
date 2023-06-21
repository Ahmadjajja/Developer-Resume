import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Css_applied/Pensieve/pensieveStyles.css";
import year2022 from "../../images/Year's In Review/2022/2022.jpg"
import leaving from "../../images/Year's In Review/2022/goodby.jpg"
import seeraht from "../../images/Year's In Review/2022/MERN.jpeg";
import hackthon from "../../images/Year's In Review/2022/hackathon.jpg";
import likeMinded from "../../images/Year's In Review/2022/likeMinded.jpg"
import SMIT from "../../images/Year's In Review/2022/SMIT.jpg"
import WEB3 from "../../images/Year's In Review/2022/ME.jpg"
import students from "../../images/Year's In Review/2022/students.jpeg"
import MERN2 from "../../images/Year's In Review/2022/MERN2.jpeg"

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


  // For Title of Sixth Listing
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

  // Sixth Listing Image
  const [isSixthListingImage, setSixthListingImage] = useState(false);
  const [sixthListingImageVisible, setSixthListingImageVisible] =
    useState(false);
  const refSixthListingImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSixthListingImage(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSixthListingImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSixthListingImage) {
      setTimeout(() => {
        setSixthListingImageVisible(true);
      }, 200);
    }
  });


  // For Title of Seventh Listing
  const [isSeventhListingTitle, setSeventhListingTitle] = useState(false);
  const [seventhListingTitleVisible, setSeventhListingTitleVisible] =
    useState(false);
  const refSeventhListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSeventhListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSeventhListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSeventhListingTitle) {
      setTimeout(() => {
        setSeventhListingTitleVisible(true);
      }, 200);
    }
  });

  // Seventh Listing Description
  const [isSeventhListingDescription, setSeventhListingDescription] =
    useState(false);
  const [seventhListingDescriptionVisible, setSeventhListingDescriptionVisible] =
    useState(false);
  const refSeventhDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSeventhListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSeventhDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSeventhListingDescription) {
      setTimeout(() => {
        setSeventhListingDescriptionVisible(true);
      }, 200);
    }
  });

  // Seventh Listing Image
  const [isSeventhListingImage, setSeventhListingImage] = useState(false);
  const [seventhListingImageVisible, setSeventhListingImageVisible] =
    useState(false);
  const refSeventhListingImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSeventhListingImage(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSeventhListingImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSeventhListingImage) {
      setTimeout(() => {
        setSeventhListingImageVisible(true);
      }, 200);
    }
  });


  // For Title of Eighth Listing
  const [isEighthListingTitle, setEighthListingTitle] = useState(false);
  const [eighthListingTitleVisible, setEighthListingTitleVisible] =
    useState(false);
  const refEighthListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setEighthListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refEighthListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isEighthListingTitle) {
      setTimeout(() => {
        setEighthListingTitleVisible(true);
      }, 200);
    }
  });

  // Eighth Listing Description
  const [isEighthListingDescription, setEighthListingDescription] =
    useState(false);
  const [eighthListingDescriptionVisible, setEighthListingDescriptionVisible] =
    useState(false);
  const refEighthDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setEighthListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refEighthDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isEighthListingDescription) {
      setTimeout(() => {
        setEighthListingDescriptionVisible(true);
      }, 200);
    }
  });

  // Eighth Listing Image
  const [isEighthListingImage, setEighthListingImage] = useState(false);
  const [eighthListingImageVisible, setEighthListingImageVisible] =
    useState(false);
  const refEighthListingImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setEighthListingImage(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refEighthListingImage.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isEighthListingImage) {
      setTimeout(() => {
        setEighthListingImageVisible(true);
      }, 200);
    }
  });


  // For Title of Ninth Listing
  const [isNinthListingTitle, setNinthListingTitle] = useState(false);
  const [ninthListingTitleVisible, setNinthListingTitleVisible] =
    useState(false);
  const refNinthListingTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setNinthListingTitle(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refNinthListingTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isNinthListingTitle) {
      setTimeout(() => {
        setNinthListingTitleVisible(true);
      }, 200);
    }
  });

  // Ninth Listing Description
  const [isNinthListingDescription, setNinthListingDescription] =
    useState(false);
  const [ninthListingDescriptionVisible, setNinthListingDescriptionVisible] =
    useState(false);
  const refNinthDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setNinthListingDescription(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refNinthDescription.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isNinthListingDescription) {
      setTimeout(() => {
        setNinthListingDescriptionVisible(true);
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
          Year in Review 2022
        </div>
        <div>
          <span className="text-[#64ffda] text-[13px] leading-[1.5] font-customMono font-normal">
            December 31, 2022
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
          src={year2022}
          alt="PensieveCover"
        />
        {/* Description Header */}
        <div
          ref={refDescription}
          className={`contentContainer ${showFourthContent ? "show" : ""
            } mt-[25px] border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
        >
          <p className="pl-[1.5em] leading-[1.5] text-[#a8b2d1] italic">
            The year 2022 was filled with various accomplishments, challenges, moments of joy, and
            moments of sadness. It marked a significant transition in my life as I navigated through
            different experiences and made choices that shaped my journey towards becoming a software
            engineer. This review will highlight some of the key events and milestones that defined my year
            are given below:
          </p>
        </div>
        {/* Listing */}
        <ul
          className={`contentContainer ${listingVisible ? "show" : ""} pl-5`}
          ref={refListing}
        >
          <li className="mt-[2em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            University Friend Circle Affection and Goodbyes
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Internship as MERN Stack Developer at Seeraht
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            12-Hour Hackathon at SMIT
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Joining the Right Company
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Full Stack Web and Mobile Developer Certification
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Joining PIAIC for Web 3.0 and Metaverse
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Offer to Train Students at Saylani (SMIT)
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Joining a Software House as a MERN Stack Developer
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
            University Friend Circle Affection and Goodbyes
          </h3>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              As 2022 began, I found myself immersed in preparing for the final exams of my third semester, which were scheduled
              for the second week of January. The exams went well, and as the third and fourth semesters commenced, I started
              engaging more in activities unrelated to coding. I became involved with a circle of friends who were not interested
              in coding, and slowly but surely, I began to drift away from my passion. While the enjoyment I experienced with this
              new group was pleasant, I realized that compromising my dedication to coding was not beneficial for my long-term career goals.
              Unfortunately, none of my friends in this circle shared my enthusiasm for coding, which made it challenging to maintain my focus.
            </p>
          </div>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              As the days went by, I noticed my passion for coding diminishing, despite my awareness that I possessed excellent coding skills at the time.
              These were difficult days for me as I started experiencing
              {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  feelings of depression and constant overthinking
                </span>
              </span>{" "}. It became clear to me that I
              was not progressing towards my goals and dreams, which further exacerbated my state of mind. The journey to becoming a software engineer is
              not without its hardships, and during this period, I even missed grasping important concepts in some subjects.
            </p>
          </div>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Realizing that I needed to break free from this situation, I made the decision to distance myself from my friend circle.
              This meant separating from a close friend named
              {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  Awais
                </span>
              </span>{" "}
              , whom I considered a brother. It was a heartbreaking choice, but
              the circumstances surrounding our friendship had become toxic, and I understood that I needed to move forward without him.
              Letting go of the past, I embarked on a new chapter in my life. This
              {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  transition
                </span>
              </span>{" "}
              marked a significant turning point for me,
              as I was determined to leave behind all distractions and focus solely on my journey towards becoming a software engineer.
              Although it may sound simple as I write about it now, the process of letting go and making these changes was not easy.
            </p>
          </div>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              I stepped down from my position as the Class Representative (CR) of my class, a responsibility I had held for
              four semesters. Additionally, I decided to
              {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  deactivate my
                </span>
              </span>{" "}
              {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  WhatsApp account
                </span>
              </span>{" "}
              for the next three months, minimizing
              my use of mobile devices to avoid unnecessary distractions. These choices were not made lightly, but I recognized
              their importance in reshaping my path towards my desired career.
            </p>
          </div>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              With the end of the fourth semester and the arrival of the summer break, I dedicated myself to working tirelessly
              to regain my momentum. I committed to coding for extended periods, sometimes investing
              {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  12 to 14 hours a day
                </span>
              </span>{" "} to
              compensate for the time I had lost during the previous four months. It was crucial for me to cover the subjects
              and concepts I had missed, such as operating systems, data structures, and algorithms. During this period, my
              passion for coding burned brighter than ever before, fueling my determination and propelling me forward on my
              journey towards becoming a software engineer.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFirstListingImage}
              className={`contentContainer ${firstListingImageVisible ? "show" : ""}`}
              src={leaving}
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
            Internship as MERN Stack Developer at Seeraht
          </h3>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              During the summer break between my fourth and fifth semesters, I decided to pursue an internship as a MERN Stack
              developer at Seeraht. During that time i worked under the supervision of
              {" "}
              <span className="relative">
                <a href="https://umairahmad.net/" target="_blank" className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Sir Umair Ahmad
                </a>
              </span>{" "}
              . This internship proved to be a rigorous and transformative experience. I dedicated myself
              entirely to coding, even to the point where coding occupied my thoughts even during sleep. Throughout the internship,
              I worked on various projects, including a bank app and an e-commerce mobile app, while also gaining experience in maintaining
              existing projects. This period allowed me to sharpen my skills and gain practical industry experience.
            </p>
          </div>
          {/* Image for Second Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSecondListingImage}
              className={`contentContainer ${secondListingImageVisible ? "show" : ""
                }`}
              src={seeraht}
              alt="PensieveCover"
            />
          </div>
        </div>
        {/* Third Thing */}
        <div>
          <h3
            ref={refThirdListingTitle}
            className={`contentContainer ${thirdListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            12-Hour Hackathon at SMIT
          </h3>
          <div
            ref={refThirdDescription}
            className={`contentContainer ${thirdListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              In August 2022, a 12-hour hackathon was organized at Saylani Mass IT Training (SMIT), specifically for students
              who had enrolled in the web and mobile app development course the previous year. The hackathon presented the challenge
              of building a Real Estate Mobile App within the given timeframe. Out of the 70 students who participated, I was among the
              {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  top five
                </span>
              </span>{" "}
              , which was a significant achievement considering the initial pool of 800 students who had enrolled in the course.
              This experience not only showcased my abilities but also taught me valuable lessons in learning how to learn effectively.
            </p>
          </div>
          {/* Image for Third Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refThirdListingImage}
              className={`contentContainer ${thirdListingImageVisible ? "show" : ""
                }`}
              src={hackthon}
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
            Joining the Right Company
          </h3>
          <div
            ref={refFourthDescription}
            className={`contentContainer ${isFourthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Following my departure from my previous company, I had the fortune of meeting a friend named
              {" "}
              <span className="relative">
                <a href="https://github.com/AbuHurairah127" target="_blank" className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Abu Hurairah
                </a>
              </span>{" "}
              during my time at Saylani Mass IT Training. We shared a similar passion for coding and became great companions
              in our journey. Another person who significantly influenced my career path was my roommate,
              {" "}
              <span className="relative">
                <a href="https://github.com/Abdullah-9862873" target="_blank" className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Abdullah Sultan
                </a>
              </span>{" "}
              ,
              who was also a MERN developer and focused on data structures and algorithms. Their presence provided me with
              the necessary support and motivation to pursue my goals. Surrounding myself with like-minded individuals
              proved instrumental in my progress.
            </p>
          </div>
          {/* Image for Fourth Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFourthListingImage}
              className={`contentContainer ${fourthListingImageVisible ? "show" : ""
                }`}
              src={likeMinded}
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
            Full Stack Web and Mobile Developer Certification
          </h3>
          <div
            ref={refFifthDescription}
            className={`contentContainer ${isFifthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              After dedicating an entire year to SMIT, attending the hackathon, and achieving a commendable position, I was
              honored to receive the Full Stack Web and Mobile Developer Certification from
              {" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo ">
                  Hazrat Allama Maulana Muhammad Bashir Farooqi
                </span>
              </span>{" "}
              , the founder of Saylani Mass IT Training. This certification not only represented my technical
              skills but also symbolized the culmination of my year-long journey and the immense effort I had put into my studies.
            </p>
          </div>
          {/* Image for Fifth Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFifthListingImage}
              className={`contentContainer ${fifthListingImageVisible ? "show" : ""
                }`}
              src={SMIT}
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
            Joining PIAIC for Web 3.0 and Metaverse
          </h3>
          <div
            ref={refSixthDescription}
            className={`contentContainer ${isSixthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              With the announcement of the PIAIC (Pakistan's Institute of Artificial Intelligence and Computing) offering a
              course on Web 3.0 and Metaverse, my excitement knew no bounds. Joining PIAIC and gaining guidance from this
              prestigious platform became a key objective for me. Despite the initial disappointment of admissions not being
              opened in Faisalabad, I made a decision to travel to Lahore from Faisalabad every Sunday at the morning time with
              {" "}
              <span className="relative">
                <a href="https://github.com/AbuHurairah127" target="_blank" className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Abu Hurairah
                </a>
              </span>{" "}
              to attend classes and returning back Faisalabad on night time on the same day.
              This marked the beginning of a new chapter, focused on expanding my knowledge in cutting-edge technologies.
            </p>
          </div>
          {/* Image for Sixth Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSixthListingImage}
              className={`contentContainer ${sixthListingImageVisible ? "show" : ""
                }`}
              src={WEB3}
              alt="PensieveCover"
            />
          </div>
        </div>

        {/* Seventh Thing */}
        <div>
          <h3
            ref={refSeventhListingTitle}
            className={`contentContainer ${seventhListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Offer to Train Students at Saylani (SMIT)
          </h3>
          <div
            ref={refSeventhDescription}
            className={`contentContainer ${isSeventhListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Recognizing my performance throughout my time at Saylani Mass IT Training and my success in the hackathon, I
              was offered an opportunity to train students in the next batch starting in December 2022. Teaching became an
              enriching experience for me, allowing me to enhance my skills while guiding and inspiring these students on their own
              journeys.
            </p>
          </div>
          {/* Image for Seventh Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSeventhListingImage}
              className={`contentContainer ${seventhListingImageVisible ? "show" : ""
                }`}
              src={students}
              alt="PensieveCover"
            />
          </div>
        </div>

        {/* Eighth Thing */}
        <div>
          <h3
            ref={refEighthListingTitle}
            className={`contentContainer ${eighthListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Joining a Software House as a MERN Stack Developer
          </h3>
          <div
            ref={refEighthDescription}
            className={`contentContainer ${isEighthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              In the same year, I commenced my employment as a MERN Stack Developer at a reputable software company in Faisalabad.
              My role primarily involved working on a significant project for a client based in the UAE. This project focused on
              creating a platform akin to LinkedIn, specifically designed to streamline the employee hiring process. Throughout
              my tenure, I had the privilege of being mentored by
              {" "}
              <span className="relative">
                <a href="https://www.linkedin.com/in/waleedumer42/" target="_blank" className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Waleed Umar
                </a>
              </span>{" "}
              , whose invaluable guidance and insights greatly
              influenced my professional journey. Waleed provided me with constructive feedback, highlighting my strengths and
              weaknesses, contributing to my personal and technical development.
            </p>
          </div>
          {/* Image for Eighth Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refEighthListingImage}
              className={`contentContainer ${eighthListingImageVisible ? "show" : ""
                }`}
              src={MERN2}
              alt="PensieveCover"
            />
          </div>
        </div>

        {/* Ninth Thing */}
        <div>
          <h3
            ref={refNinthListingTitle}
            className={`contentContainer ${ninthListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            End Remarks and Quotes
          </h3>
          <div
            ref={refNinthDescription}
            className={`contentContainer ${isNinthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              In conclusion, the year 2022 was a period of immense growth, challenges, and accomplishments. It was a year
              of self-reflection, resilience, and determination as I navigated through various experiences and pursued my
              passion for software engineering. The journey was not without its obstacles, but each hurdle served as a
              stepping stone towards my goals. Through internships, hackathons, certifications, and valuable
              connections, I gained valuable skills and knowledge that propelled me forward. The support and guidance
              of mentors and the opportunity to contribute to meaningful projects have been instrumental in shaping my
              path. As I look back on this transformative year, the following quote resonates with me:
            </p>
          </div>
          <div
            ref={refNinthDescription}
            className={`contentContainer ${isNinthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              "Success is not final, failure is not fatal: It is the courage to continue that counts." -{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Winston Churchill
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