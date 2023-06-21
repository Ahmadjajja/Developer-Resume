import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Css_applied/Pensieve/pensieveStyles.css";
import year2021 from "../../images/Year's In Review/2021/2021.jpg"
import AI from "../../images/Year's In Review/2021/AI.webp"
import DSA from "../../images/Year's In Review/2021/DSA.png"
import leavingHome from "../../images/Year's In Review/2021/leavingHome.jpg";
import softwareHouse from "../../images/Year's In Review/2021/softwareHouse.webp"
import webDev from "../../images/Year's In Review/2021/webDev.jpeg"
import SMIT from "../../images/Year's In Review/2021/SMIT.jpg"
import CSDept from "../../images/Year's In Review/2021/Uni.jpeg"
import localJob from "../../images/Year's In Review/2021/orderTaker.jpg"

const MemoryFour = () => {
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

  // Fifth Listing Description
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
          Year in Review 2021
        </div>
        <div>
          <span className="text-[#64ffda] text-[13px] leading-[1.5] font-customMono font-normal">
            December 31, 2021
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
          src={year2021}
          alt="PensieveCover"
        />
        {/* Description Header */}
        <div
          ref={refDescription}
          className={`contentContainer ${showFourthContent ? "show" : ""
            } mt-[25px] border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
        >
          <p className="pl-[1.5em] leading-[1.5] text-[#a8b2d1] italic">
            The year 2021 was a transformative period for me as I delved into various fields of technology,
            faced challenges, made significant decisions, and took steps towards achieving my career goals.
            In this year in review, I will highlight the key events and experiences that shaped my journey
            in artificial intelligence (AI), machine learning, data science, and web development, as well as
            my exploration of data structures and algorithms (DSA). Some of the things that happen with me in
            this year are as follows
          </p>
        </div>
        {/* Listing */}
        <ul
          className={`contentContainer ${listingVisible ? "show" : ""} pl-5`}
          ref={refListing}
        >
          <li className="mt-[2em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            <p>Exploration of Artificial Intelligence, Machine Learning, and Data Science</p>
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Exploring Data Structures and Algorithms (DSA)
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Leaving Home, Embracing Opportunity
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Local Job Experience
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Exploring the Realm of Software Houses
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Embarking on Web Development
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Joining Saylani Mass IT Training Program (SMIT)
          </li>
          <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
            Sleepless Nights and Determination
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
            Exploration of Artificial Intelligence, Machine Learning, and Data Science
          </h3>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              As 2021 began, I possessed strong coding, problem-solving, and logic-building skills. However, I felt the need
              to move beyond learning a specific coding language and explore new areas in technology. Unsure of the next steps
              to take, I conducted extensive research and sought guidance from various individuals. One person who stood out
              was
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  Faizan
                </span>
              </span>{" "}
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  Amin  
                </span>
              </span>{" "}
              , a machine learning engineer, whom I connected with on Facebook. With his guidance, I decided to
              venture into the field of AI.
            </p>
          </div>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              To gain a better understanding of AI, I reached out to numerous experts in the field of data science, machine
              learning, and AI. Through interactions with over a hundred individuals, I gained valuable insights and knowledge.
              Starting as a beginner in computer science and AI, I faced the challenge of grasping these complex technologies.
              I enrolled in Andrew Ng's
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  "AI for Everyone"
                </span>
              </span>{" "}
              course on Coursera, which provided me with a solid theoretical foundation in AI.
              However, I felt the need for further guidance and decided to wait until I could physically attend university to fully
              immerse myself in the AI field.
            </p>
          </div>
          <div
            ref={refFirstListingDescription}
            className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              During this time, I dedicated myself to learning about AI, data science, machine learning, big data analytics,statistics and mathematices necesary for this. It was a period of intense self-study and exploration, as I sought to expand my knowledge and
              skills in these domains.
            </p>
          </div>
          {/* Image for First Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFirstListingImage}
              className={`contentContainer ${firstListingImageVisible ? "show" : ""}`}
              src={AI}
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
            Exploring Data Structures and Algorithms (DSA)
          </h3>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              My journey into data structures and algorithms (DSA) began when I met a person named
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  Ali
                </span>
              </span>{" "}
              from Jhang via social
              media. He emphasized the importance of DSA in cracking interviews with major tech companies like FAANG. Intrigued
              by his insights, I decided to embark on learning DSA. With a solid foundation in coding, particularly in C and C++,
              I eagerly delved into the world of DSA.
            </p>
          </div>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Ali, who recorded lectures on DSA, generously shared his knowledge with our group of six individuals. I took
              a keen interest in the lectures, especially the topic of linked lists. Through dedicated effort, I became
              proficient in linked lists and proceeded to explore other concepts, such as stacks, queues, graphs, and trees.
              A significant milestone in my DSA journey was when I wrote
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  204 lines of code
                </span>
              </span>{" "}
              in just two days. However, when
              I attempted to run the code on my mobile using a C++ coding app, it failed to execute. This setback initially
              disheartened me, but I persevered and discovered a bug in the code the next day. When the code ran successfully,
              I experienced a sense of triumph and realized my potential as a coder. From that moment on, I never looked back.
            </p>
          </div>
          <div
            ref={refSecondDescription}
            className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Despite not having a laptop due to the COVID-19 pandemic, I continued to code using a mobile device to test
              and run my programs. This period of exploration and learning in the field of DSA laid a strong foundation
              for my future endeavors.
            </p>
          </div>
          {/* Image for Second Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSecondListingImage}
              className={`contentContainer ${secondListingImageVisible ? "show" : ""
                }`}
              src={DSA}
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
            Leaving Home, Embracing Opportunity
          </h3>
          <div
            ref={refThirdDescription}
            className={`contentContainer ${thirdListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Driven by a deep passion for learning and technology, I felt limited by the lack of guidance and a coding culture
              in my hometown. Understanding the importance of being in an environment conducive to growth as a software engineer,
              I made a life-changing decision. I decided to leave my home and relocate to Faisalabad, a city known for its tech
              industry, with the intention of pursuing my career aspirations. This decision was based on the belief that i read somewhere written on wall
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  "کہیں پہنچنے کے لئے، کہیں سے نکلنا ضروری ہے"
                </span>
              </span>{" "} means that
              to reach a new destination, one must leave their current surroundings behind.
            </p>
          </div>
          <div
            ref={refThirdDescription}
            className={`contentContainer ${thirdListingDescriptionVisible ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              With no prior arrangements for accommodation, I reached out to
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  Jawad Ahmad
                </span>
              </span>{" "}, a senior in the field of computer science whom
              I had connected with. He graciously allowed me to stay in his flat in Faisalabad. In May 2021, I arrived in Faisalabad,
              feeling grateful for Ahmad's support, which helped me settle into this new city.
            </p>
          </div>
          {/* Image for Third Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refThirdListingImage}
              className={`contentContainer ${thirdListingImageVisible ? "show" : ""
                }`}
              src={leavingHome}
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
            Local Job Experience
          </h3>
          <div
            ref={refFourthDescription}
            className={`contentContainer ${isFourthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Upon my arrival in Faisalabad, I spent approximately 20 days acquainting myself with the city and its technological
              landscape, while also working odd jobs to sustain myself. One such job involved working as an order taker at a restaurant.
              During my time there, I had the serendipitous opportunity to interact with developers who would pass by me on their way
              to a software company located on the building's second floor. These encounters filled me with excitement and a burning
              curiosity to learn more about the world of technology. Consequently, I often engaged these developers in conversations,
              seeking to understand their roles, experiences, and paths to success. It was during these interactions that a profound
              realization dawned on me -
              {/* I was not meant to be an order taker; my true calling lay in becoming a software engineer. */}
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  "I was not meant to be and
                </span>
              </span>{" "}
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  order taker; my true calling lay in becoming a software engineer "
                </span>
              </span>{" "}
              Motivated by this epiphany, I made the difficult decision to resign from my position after only eight days. This brief
              stint, although modest, played a pivotal role in helping me recognize my true identity and reignite my passion for technology.
              I will always cherish this experience as a significant milestone in my early career trajectory.
            </p>
          </div>
          {/* Image for Fourth Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFourthListingImage}
              className={`contentContainer ${fourthListingImageVisible ? "show" : ""
                }`}
              src={localJob}
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
            Exploring the Realm of Software Houses
          </h3>
          <div
            ref={refFifthDescription}
            className={`contentContainer ${isFifthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              After quitting my job, I decided to visit various software companies in Faisalabad to gain exposure and insights
              into the industry. During these visits, I had the opportunity to meet a full-stack software engineer who provided
              valuable advice. He emphasized that C++ was just one language to learn and encouraged me to explore other technologies. While his words were initially harsh, they served as a wake-up call, prompting me to take a new direction.
            </p>
          </div>
          {/* Image for Fifth Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refFifthListingImage}
              className={`contentContainer ${fifthListingImageVisible ? "show" : ""
                }`}
              src={softwareHouse}
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
            Embarking on Web Development
          </h3>
          <div
            ref={refSixthDescription}
            className={`contentContainer ${isSixthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              Despite not having my own laptop, I borrowed a friend's device and began learning web development. I started
              by exploring
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  HTML and CSS
                </span>
              </span>{" "}
              , gradually expanding my knowledge in these areas. Around the same time, I joined
              an online bootcamp on mobile application development led by Naved Sarwar. Eager to enhance my skills, I
              immersed myself in learning
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  JavaScript
                </span>
              </span>{" "}
              through the bootcamp. Among the students, I was the only one to
              complete all the JavaScript assignments, solving over
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  150 coding problems
                </span>
              </span>{" "}
              in a month. With a relentless
              drive to excel, I dedicated over eight hours a day to coding and honing my skills. The summer break
              between my second and third semesters in 2021 provided the ideal opportunity to fully immerse myself
              in coding, resulting in substantial growth in my frontend development skills.
            </p>
          </div>
          {/* Image for Sixth Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSixthListingImage}
              className={`contentContainer ${sixthListingImageVisible ? "show" : ""
                }`}
              src={webDev}
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
            Joining Saylani Mass IT Training Program (SMIT)
          </h3>
          <div
            ref={refSeventhDescription}
            className={`contentContainer ${isSeventhListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              During the summer break between my second and third semester, I received life-changing news. My roommate
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  Sufyan (Who was doing work as react developer)
                </span>
              </span>{" "}
              informed
              me about the
              {" "}<span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo">
                  Saylani Mass IT Training Program (SMIT)
                </span>
              </span>{" "}
              , which offered a web and mobile development course.
              With only two days remaining to apply, I seized the opportunity and applied for the program. After successfully
              passing the admission test, I became one of the 800 students selected from a pool of 4,000 applicants. Joining SMIT
              was a pivotal moment for me, as I discovered a vibrant coding culture and a supportive learning environment. At SMIT,
              I delved into HTML, CSS, Bootstrap 5, JavaScript (ES6), TypeScript, React JS, Firebase, Firestore, Node JS, MongoDB
              , Express JS, Git, and GitHub. I eagerly awaited each class, driven by the desire to learn and grow alongside like-minded individuals.
            </p>
          </div>
          {/* Image for Seventh Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refSeventhListingImage}
              className={`contentContainer ${seventhListingImageVisible ? "show" : ""
                }`}
              src={SMIT}
              alt="PensieveCover"
            />
          </div>
        </div>

        {/* Eight Thing */}
        <div>
          <h3
            ref={refEighthListingTitle}
            className={`contentContainer ${eighthListingTitleVisible ? "show" : ""
              } mt-[2em] mb-[1em] font-semibold text-[#ccd6f6] leading-[1.1] text-[2em]`}
          >
            Sleepless Nights and Determination
          </h3>
          <div
            ref={refEighthDescription}
            className={`contentContainer ${isEighthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              In September 2021, I started university onsite classes after pandemic situation in third semester, excited
              to meet peers who shared my passion for coding and technology. However, I soon realized that the university
              lacked a coding culture, with minimal interest among students in discussing coding-related topics.
              Although I sought guidance from seniors, I found limited resources and individuals truly excelling
              in the field. This realization led me to understand that I had to forge my own path and take charge
              of my learning journey.
            </p>
          </div>
          <div
            ref={refEighthDescription}
            className={`contentContainer ${isEighthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              During my third semester at university, I faced numerous challenges. Balancing my university studies and
              maintaining a satisfactory CGPA while simultaneously pursuing web development proved to be demanding.
              Determined to succeed, I adopted a rigorous schedule that involved waking up before dawn, typically
              around 4 or 5 am. After the Fajr prayer, I would leave the hostel and devote my entire day to intensive
              learning and coding. I would return to the hostel late at night, around 1 AM, and allocate only a few
              hours for sleep, typically four to five hours a night, with minimal rest during the day.
              Balancing my university studies with web development became a challenging task
            </p>
          </div>
          {/* Image for Eighth Listing Description */}
          <div className="mr-auto ml-auto mt-[40px]">
            <img
              ref={refEighthListingImage}
              className={`contentContainer ${eighthListingImageVisible ? "show" : ""
                }`}
              src={CSDept}
              alt="PensieveCover"
            />
          </div>
        </div>


        {/* End Remarks and Quotes Ninth Thing */}
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

              In 2021, I embarked on a transformative journey in coding and web development. Despite challenges and a lack
              of guidance, I remained determined, taking charge of my own learning. Joining Saylani Mass IT Training Program
              provided a supportive community where I honed my skills. Balancing university studies and coding, I persevered
              with unwavering dedication. I am proud of the progress I have made and the resilience I have developed. As I move
              forward, I carry with me a strong belief in my abilities and a commitment to continuous growth. The future holds
              boundless opportunities for me in the world of technology.
            </p>
          </div>
          <div
            ref={refNinthDescription}
            className={`contentContainer ${isNinthListingDescription ? "show" : ""
              } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
          >
            <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
              "The journey of a thousand miles begins with a single step." -{" "}
              <span className="relative">
                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                  Lao Tzu
                </span>
              </span>{" "}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MemoryFour;