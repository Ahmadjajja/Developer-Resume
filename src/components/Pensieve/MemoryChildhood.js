import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Css_applied/Pensieve/pensieveStyles.css";
import earlyLife from "../../images/Year's In Review/early Life/villageLife.jpg"
import kanchy from "../../images/Year's In Review/early Life/kanchy.jpg"
import cricket from "../../images/Year's In Review/early Life/cricket-match.webp";
import cricketMatch2 from "../../images/Year's In Review/early Life/cricket-match2.jpeg";
import sacrifice from "../../images/Year's In Review/2018/sacrifice.jpeg"

const MemoryChildhood = () => {
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
                    Early Life in a Small Village
                </div>
                <div>
                    <span className="text-[#64ffda] text-[13px] leading-[1.5] font-customMono font-normal">
                        December 31, 2017
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
                    src={earlyLife}
                    alt="PensieveCover"
                />
                {/* Description Header */}
                <div
                    ref={refDescription}
                    className={`contentContainer ${showFourthContent ? "show" : ""
                        } mt-[25px] border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
                >
                    <p className="pl-[1.5em] leading-[1.5] text-[#a8b2d1] italic">
                        My journey begins in a small village located in District Bahawalnagar, South Punjab, Pakistan, near the Indian border, on
                        August 25, 2000. As the first boy in my family, my arrival brought immense joy to my parents, prompting
                        my father to distribute sweets throughout the village. This blog post will delve into the early years of
                        my life, highlighting the typical experiences of a Punjabi child growing up in a rural setting. Join me
                        as I reminisce about the carefree days filled with village games, cricket, and cherished memories before
                        my college years.Some of the memories that i never forgot are as follows
                    </p>
                </div>
                {/* Listing */}
                <ul
                    className={`contentContainer ${listingVisible ? "show" : ""} pl-5`}
                    ref={refListing}
                >
                    <li className="mt-[2em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
                        Childhood Joy and Village Games:
                    </li>
                    <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
                        School Days and Cricket Matches
                    </li>
                    <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
                        Father's Fields and Cricket in the Evenings
                    </li>
                    <li className="mt-[1em] mb-[1em] text-[#ccd6f6] leading-[1.1] font-semibold text-[1.17em] font-calibri list-disc">
                        Evening Entertainment and Lukkan Chuppai
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
                        Childhood Joy and Village Games
                    </h3>
                    <div
                        ref={refFirstListingDescription}
                        className={`contentContainer ${firstListingDescriptionVisible ? "show" : ""
                            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
                    >
                        <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
                            Like many other Punjabi children in similar villages, my childhood was filled with the simple pleasures of
                            life. I immersed myself in traditional village games, such as Gulli Danda, Kanchy, Ludo, Kite Flying, Kabbadi,
                            Hide and Seek, Pitho Garam, and Chuppan Chupai. Among these, my passion for cricket burned the brightest. Playing
                            cricket became a daily routine, and my love for the sport was unmatched. However, my devotion to cricket sometimes
                            drew admonishment from my father, as I dedicated more time to playing than focusing on my studies.
                        </p>
                    </div>
                    {/* Image for First Listing Description */}
                    <div className="mr-auto ml-auto mt-[40px]">
                        <img
                            ref={refFirstListingImage}
                            className={`contentContainer ${firstListingImageVisible ? "show" : ""}`}
                            src={kanchy}
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
                        School Days and Cricket Matches
                    </h3>
                    <div
                        ref={refSecondDescription}
                        className={`contentContainer ${secondListingDescriptionVisible ? "show" : ""
                            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
                    >
                        <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
                            My early years of education followed the familiar pattern of most children in the village. I attended a private
                            school up until the eighth grade and later joined a government school for my matriculation studies. Academic
                            pursuits took a backseat to my cricket passion during this time. My friends especially
                            {" "}<span className="relative">
                                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
                                    sumair
                                </span>
                            </span>{" "} and I would occasionally skip
                            classes to watch Pakistan cricket team matches on a small Samsung mobile outside the school premises. We
                            found solace beneath the shade of trees, where we would sit and eagerly follow the games and also we often play cricket on brake time. These moments
                            created lasting memories that I still cherish to this day.
                        </p>
                    </div>

                    {/* Image for First Listing Description */}
                    <div className="mr-auto ml-auto mt-[40px]">
                        <img
                            ref={refSecondListingImage}
                            className={`contentContainer ${secondListingImageVisible ? "show" : ""
                                }`}
                            src={cricket}
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
                        Father's Fields and Cricket in the Evenings
                    </h3>
                    <div
                        ref={refThirdDescription}
                        className={`contentContainer ${thirdListingDescriptionVisible ? "show" : ""
                            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
                    >
                        <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
                            After school, I often accompanied my father to his fields. As a retired army personnel, he engaged in
                            agricultural activities, and I would join him in the evenings. These fields became the backdrop for
                            countless cricket matches with my friends. The joy of playing amidst the vast green expanse remains
                            etched in my memory. As the sun set, we would reluctantly leave the fields, content with the camaraderie
                            and competition we shared.
                        </p>
                    </div>
                    {/* Image for First Listing Description */}
                    <div className="mr-auto ml-auto mt-[40px]">
                        <img
                            ref={refThirdListingImage}
                            className={`contentContainer ${thirdListingImageVisible ? "show" : ""
                                }`}
                            src={cricketMatch2}
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
                        Evening Entertainment and Lukkan Chuppai
                    </h3>
                    <div
                        ref={refFourthDescription}
                        className={`contentContainer ${isFourthListingDescription ? "show" : ""
                            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
                    >
                        <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
                            Nights in my village were filled with entertainment for the entire family. We would gather around the
                            television to watch movies, drama serials on PTV, and spend quality time together. On occasion, I would
                            venture out with my village friends to play Lukkan Chuppai. This game of hide-and-seek took on a unique
                            twist, as we hid not only in houses but also in the vast fields, adding an extra element of thrill and
                            excitement to our nighttime adventures. These carefree evenings fostered a sense of belonging and happiness
                            within our close-knit community.
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
                            Reflecting upon my early life, I am grateful for the simple joys and experiences that shaped my journey.
                            Growing up in a small village in South Punjab, Pakistan, surrounded by the bordering beauty of nature,
                            I embraced the spirit of community, playfulness, and the pursuit of my passions. While my academic
                            dedication may have wavered at times, my fervor for cricket remained unwavering, serving as a source
                            of joy, camaraderie, and endless memories.

                            These formative years taught me the importance of finding balance between responsibility and the pursuit
                            of personal interests. They instilled in me a resilient spirit, encouraging me to forge my own path, even
                            in the face of societal expectations. Through the bonds of friendship, the serenity of nature, and the
                            thrill of competition, I discovered the power of dreams and the perseverance required to bring them to life.
                        </p>
                    </div>
                    <div
                        ref={refFifthDescription}
                        className={`contentContainer ${isFifthListingDescription ? "show" : ""
                            } border-t-0 border-b-0 border-r-0 border-l border-[#64ffda] border-[1px]`}
                    >
                        <p className="my-[1em] leading-[1.5] text-[#a8b2d1] italic text-[18px] font-calibri pl-[1.5em] antialiased">
                            "Childhood is a canvas upon which we paint memories that last a lifetime." -{" "}
                            <span className="relative">
                                <span className="text-[#64ffda] viewArchiveTwo cursor-pointer">
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

export default MemoryChildhood;