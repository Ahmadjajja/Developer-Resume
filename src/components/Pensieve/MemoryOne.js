import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Css_applied/Pensieve/pensieveStyles.css";
import firstListingDescriptionImage from "../../images/FirstListingImage.jpg";
import secondListingDescriptionImage from "../../images/SecondListingImage.jpg";
import thirdListingDescriptionImage from "../../images/ThirdListingImage.jpg";
import fourthListingDescriptionImage from "../../images/FourthListingImage.jpg";
import fifthListingDescriptionImage from "../../images/FifthListingImage.jpg";
import sixthListingDescriptionImage from "../../images/SixthListingImage.jpg";
import seventhListingDescriptionImage from "../../images/SeventhListingImage.jpg";
import eighthListingDescriptionImage from "../../images/EighthListingImage.jpg";

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
  const [isVisibleDescription, setIsVisibleDescription] = useState(false);
  const refDescription = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleDescription(true);
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
  const [
    seventhListingDescriptionVisible,
    setSeventhListingDescriptionVisible,
  ] = useState(false);
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

  return (
    <div className="ml-12 mr-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem] antialiased myScreen8:ml-8 myScreen8:mr-8">
      {/* Back to All Memories */}
      <div
        className={`contentContainer ${
          showFirstContent ? "show" : ""
        } w-[70%] mr-auto ml-auto text-[#64ffda] pt-[70px] text-[14px] font-customMono myScreen8:w-[100%]`}
      >
        <span class="mr-[7px]">←</span>
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
        className={`contentContainer ${
          showSecondContent ? "show" : ""
        } mt-[50px] ml-auto mr-auto w-[70%] myScreen8:w-[100%]`}
      >
        <div className="text-[#ccd6f6] text-myPensieveFont font-semibold leading-[1.1] font-calibri">
          Year in Review 2021
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
          src="https://res.cloudinary.com/dyoczrvps/image/upload/v1676340591/newProfilePortfolio/Pensieve/2021_hkfpvq.jpg"
          alt="PensieveCover"
        />
        {/* Description Header */}
        <div
          ref={refDescription}
          className={`contentContainer ${
            showFourthContent ? "show" : ""
          } mt-[25px] border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
        >
          <p className="pl-[1.5em] leading-[1.5] text-[#a8b2d1] italic">
            2021 was a great year for me from both personal and professional
            perspectives. I learned a lot while working with both national and
            international clients. This year, I started freelancing and made it
            a source of passive income. I was fortunate to meet clients who
            provided me with a working environment that greatly impacted my
            learning. I achieved a lot of things this year, some of which are
            listed below:
          </p>
        </div>
        {/* Listing */}
        <div
          className={`contentContainer ${listingVisible ? "show" : ""}`}
          ref={refListing}
        >
          <li className="mt-[2em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Started as a Content Writer
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Became a Successful Freelancer
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Collaborated with Communities
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Taught over 500 students
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Explored Tech Fields
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Ethical Hacking
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Data Science and Big Data Analysis
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Web Development
          </li>
        </div>
        {/* Description of Listings */}
        {/* First Listing */}
        <div>
          <h3
            ref={refFirstListingTitle}
            className={`contentContainer ${
              firstListingTitleVisible ? "show" : ""
            } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Started as a Content Writer
          </h3>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${
              firstListingDescriptionVisible ? "show" : ""
            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              In 2017, I began pursuing content writing for improving my writing
              skills. A dear friend of mine provided invaluable assistance in
              helping me achieve this goal. I continued with this pursuit until
              I landed my first client in the tech field. Once I started earning
              from this source, it became my primary source of income. Over the
              years, I have written for various niches, including medical,
              digital marketing, finance, and travel. However, I found tech
              writing to be the most interesting. My passion for technology has
              always driven me to learn new things and explore this field more
              deeply.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
          <img
  ref={refFirstListingImage}
  className={`contentContainer ${firstListingImageVisible ? "show" : ""}`}
  src={firstListingDescriptionImage}
  alt="PensieveCover"
/>
          </div>
        </div>
        {/* Second Listing */}
        <div>
          <h3
            ref={refSecondListingTitle}
            className={`contentContainer ${
              secondListingTitleVisible ? "show" : ""
            } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Became a Successful Freelancer
          </h3>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${
              secondListingDescriptionVisible ? "show" : ""
            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Initially, when I started freelancing, I tried to secure work
              through platforms such as Fiverr and UpWork, but unfortunately, I
              didn't receive much interest. As a result, I decided to join
              Facebook groups and was able to find some clients through this
              alternative approach. I struggled with understanding and meeting
              the requirements. Since I was working alone, I decided to build a
              team and hired two members to assist with the writing work. As I
              took on more work from clients, I expanded my team to four
              members. This experience taught me how to handle a team and be a
              manager. We even wrote a thesis together based on our research on
              the subject of Aerodynamics, which I had little knowledge of.
              Freelancing has taught me that I have the power to accomplish
              things that I may not have been confident enough to attempt on my
              own.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSecondListingImage}
              className={`contentContainer ${
                secondListingImageVisible ? "show" : ""
              }`}
              src={secondListingDescriptionImage}
              alt="PensieveCover"
            />
          </div>
        </div>
        {/* Thrid Thing */}
        <div>
          <h3
            ref={refThirdListingTitle}
            className={`contentContainer ${
              thirdListingTitleVisible ? "show" : ""
            } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Collaborated with Communities
          </h3>
          <div
            ref={refThirdDescription}
            className={`contentContainer ${
              thirdListingDescriptionVisible ? "show" : ""
            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              I was always fond of learning new technologies but actually
              writing on the new technology pushed me a lot to improve my coding
              skills. Freelancing has taught me that being part of communities
              and surrounding myself with people successfully doing the work I
              desire can help me achieve unexpected levels. So, I joined
              multiple Discord communities and{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  coding communities
                </span>
              </span>{" "}
              at my university, enabling me to achieve in 4 to 5 months what
              might take others a year or more. This experience helped me to
              develop my logical thinking and problem-solving abilities to the
              point where I could tackle complex questions on platforms such as{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  LeetCode
                </span>
              </span>{" "}
              and{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  HackerRank
                </span>
              </span>{" "}
              . The community members were all supportive, and there I have come
              to appreciate the beauty that God has hidden inside acts of
              kindness. Helping others not only brings a sense of inner peace to
              the person who provides the assistance, but it also enables the
              help seeker to achieve their desired goals more quickly and
              easily.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refThirdListingImage}
              className={`contentContainer ${
                thirdListingImageVisible ? "show" : ""
              }`}
              src={thirdListingDescriptionImage}
              alt="PensieveCover"
            />
          </div>
        </div>
        {/* Fourth Thing */}
        <div>
          <h3
            ref={refFourthListingTitle}
            className={`contentContainer ${
              fourthListingTitleVisible ? "show" : ""
            } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Taught over 500 students
          </h3>
          <div
            ref={refFourthDescription}
            className={`contentContainer ${
              isFourthListingDescription ? "show" : ""
            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              I joined SEEHRAT and Saylani Software House to learn more about
              backend development, and it was there that I met my teacher,
              Umair. He taught us both frontend and backend development, and
              under his guidance, I learned new concepts and approaches to solve
              complex problems.
              <p>
                After completing my{" "}
                <span className="viewArchiveTwo text-[#64ffda] cursor-pointer relative">
                  <span>MERN stack</span>
                </span>{" "}
                course at the software house, I was offered a teaching position,
                which I accepted. I taught more than 500 students, and I found
                that teaching others made my own understanding of coding
                concepts even stronger. I loved being a teacher because of the
                recognition I received and the joy of helping others.
              </p>
              <p>
                Teaching coding wasn't about money for me; it was my passion for
                coding and the desire to help others that drove me to do it.
                Overall, it was a wonderful experience.
              </p>
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFourthListingImage}
              className={`contentContainer ${
                fourthListingImageVisible ? "show" : ""
              }`}
              src={fourthListingDescriptionImage}
              alt="PensieveCover"
            />
          </div>
        </div>
        {/* Fifth Thing */}
        <div>
          <h3
            ref={refFifthListingTitle}
            className={`contentContainer ${
              fifthListingTitleVisible ? "show" : ""
            } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Explored Tech Fields
          </h3>
          <div
            ref={refFifthDescription}
            className={`contentContainer ${
              fifthListingDescriptionVisible ? "show" : ""
            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              While I was teaching during the COVID-19 pandemic, I found myself
              with a lot of extra time on my hands.I decided to use this time to
              explore potential career paths in the tech industry.
              <p>
                Being fascinated by the power and responsibility that comes with{" "}
                <span className="relative">
                  <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                    Hacking
                  </span>
                </span>
                , as well as the creative freedom of{" "}
                <span className="relative">
                  <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                    Web Development
                  </span>
                </span>
                , I started to narrow down my options and focus on these two
                areas. Ultimately, I've decided to fully dedicate myself to
                pursuing these exciting and dynamic fields.
              </p>
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div
            ref={refFifthListingImage}
            className={`contentContainer ${
              fifthListingImageVisible ? "show" : ""
            } mr-auto ml-auto mt-[40px]`}
          >
            <img src={fifthListingDescriptionImage} alt="PensieveCover" />
          </div>
        </div>
        {/* Sixth Thing */}
        <div>
          <h3
            ref={refSixthListingTitle}
            className={`contentContainer ${
              sixthListingTitleVisible ? "show" : ""
            } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Ethical Hacking
          </h3>
          <div
            ref={refSixthDescription}
            className={`contentContainer ${
              sixthListingDescriptionVisible ? "show" : ""
            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              It's not the Year 2021 actually, I had started working on this
              when I was a kid. I started with a basic understanding of hacking
              and became more proficient by strengthening my networking skills
              and working with gadgets such as{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Raspberry Pi
                </span>
              </span>
              .
              <p className="mt-[15px]">
                I delved into various technologies like{" "}
                <span className="relative">
                  <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                    Metasploit
                  </span>
                </span>
                ,{" "}
                <span className="relative">
                  <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                    Nmap
                  </span>
                </span>
                , and{" "}
                <span className="relative">
                  <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                    Aircrack-Ng
                  </span>
                </span>
                , and participated in hackathons and hacking communities, which
                I found enjoyable. I made my SSL concepts even better and
                tackled challenges like{" "}
                <span className="relative">
                  <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                    HackTheBox
                  </span>
                </span>{" "}
                and{" "}
                <span className="relative">
                  <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                    FindTheBug
                  </span>
                </span>
                .
              </p>
              <p className="mt-[15px]">
                I also explored <span>Bug Bounty Hunting</span> and even hacked
                games for fun. However, I crossed the line when I exploited the
                ID of a close friend. This incident caused me to reevaluate my
                involvement in the field as it made me realize I had no interest
                in black hat hacking. I apologized and my friend forgave me, but
                the experience made me decide to leave the field altogether.
              </p>
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSixthListingImage}
              className={`contentContainer ${
                sixthListingImageVisible ? "show" : ""
              }`}
              src={sixthListingDescriptionImage}
              alt="PensieveCover"
            />
          </div>
        </div>
        {/* Seventh Listing */}
        <div>
          <h3
            ref={refSeventhListingTitle}
            className={`contentContainer ${
              seventhListingTitleVisible ? "show" : ""
            } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Data Science and Big Data Analysis
          </h3>
          <div
            ref={refSeventhDescription}
            className={`contentContainer ${
              seventhListingDescriptionVisible ? "show" : ""
            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Once I finished my stint in hacking, my fascination with machines
              and their inner workings drew me towards the field of{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  big data analysis
                </span>
              </span>{" "}
              and{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  data science
                </span>
              </span>{" "}
              . My interest in machine learning further drove me to enroll in a
              course that would help me achieve this goal. I studied a
              comprehensive module on big data analysis, delving into the
              intricacies of{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Python
                </span>
              </span>
              ,{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Hadoop
                </span>
              </span>{" "}
              and{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Apache Spark
                </span>
              </span>{" "}
              . I spent a considerable amount of time working with these tools,
              studying how large corporations handle data and extract meaningful
              insights from it.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div
            ref={refSeventhListingImage}
            className={`contentContainer ${
              seventhListingImageVisible ? "show" : ""
            } mr-auto ml-auto mt-[40px]`}
          >
            <img src={seventhListingDescriptionImage} alt="PensieveCover" />
          </div>
        </div>
        {/* Eighth Thing */}
        <div>
          <h3
            ref={refEighthListingTitle}
            className={`contentContainer ${
              eighthListingTitleVisible ? "show" : ""
            } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Web Development
          </h3>
          <div
            ref={refEighthDescription}
            className={`contentContainer ${
              eighthListingDescriptionVisible ? "show" : ""
            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              As a freelancer, I took on several small machine learning projects
              and worked on them remotely. Simultaneously, I also pursued web
              development and acquired proficiency in various technologies such
              as{" "}
              <span className="relative">
                <span className="text-[#64ffda] cursor-pointer viewArchiveTwo">
                  MongoDB
                </span>
              </span>
              ,{" "}
              <span className="relative">
                <span className="text-[#64ffda] cursor-pointer viewArchiveTwo">
                  ExpressJs
                </span>
              </span>
              ,{" "}
              <span className="relative">
                <span className="text-[#64ffda] cursor-pointer viewArchiveTwo">
                  ReactJs
                </span>
              </span>{" "}
              and{" "}
              <span className="relative">
                <span className="text-[#64ffda] cursor-pointer viewArchiveTwo">
                  NodeJs
                </span>
              </span>{" "}
              . I am skilled in both front-end and back-end development.{" "}
              <p className="mt-[15px]">
                As a software engineer, I strongly believe that engineers should
                explore various fields to gain a deeper understanding of how
                things are working. Collaborating with team members enhances the
                learning experience, leading to even greater personal and
                professional growth.{" "}
              </p>
              <p className="mt-[15px]">
                In the end I want to thank you for reading this blog. I hope you
                enjoy your time too.
              </p>
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div
            ref={refEighthListingImage}
            className={`contentContainer ${
              eighthListingImageVisible ? "show" : ""
            } mr-auto ml-auto mt-[40px]`}
          >
            <img src={eighthListingDescriptionImage} alt="PensieveCover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryOne;