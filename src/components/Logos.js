import React, { useState, useEffect } from "react";
import "../Css_applied/logoStyles.css";

const Logos = () => {
  // Hover
  const [githubSvgHover, setGithubSvgHover] = useState(false);
  const [instagramSvgHover, setInstagramSvgHover] = useState(false);
  const [twitterSvgHover, setTwitterSvgHover] = useState(false);
  const [linkedInSvgHover, setLinkedInSvgHover] = useState(false);
  const [facebookSvgHover, setFacebookSvgHover] = useState(false);
  const [mailHover, setMailHover] = useState(false);
  // Clicked
  const [githubSvgClicked, setGithubSvgClicked] = useState(false);
  const [instagramSvgClicked, setInstagramSvgClicked] = useState(false);
  const [twitterSvgClicked, setTwitterSvgClicked] = useState(false);
  const [linkedInSvgClicked, setLinkedInSvgClicked] = useState(false);
  const [facebookSvgClicked, setFacebookSvgClicked] = useState(false);
  const [mailClicked, setMailClicked] = useState(false);

  // Showing Content in transition
  const [showFirstContent, setShowFirstContent] = useState(false);
  const [showSecondContent, setShowSecondContent] = useState(false);

  useEffect(() => {
    // For First
    setTimeout(() => {
      setShowFirstContent(true);
    }, 2300);
    // For Second
    setTimeout(() => {
      setShowSecondContent(true);
    }, 2400);
  }, []);

  return (
    <div className="logoScreen1:relative">
      {/*  Logos to show when Screen <= 768 */}
      <div className="ml-12 mr-12 logoScreen1:hidden">
        <div className="pt-7 flex justify-center items-center">
          <div className="w-[38%] flex justify-between mt-0 ml-auto mr-auto mb-[40px] logoScreen2:min-w-[155px]">
            {/* Github SVG */}
            <div className="w-[20px] h-[20px]">
              <a href="https://github.com/Ahmadjajja" target="_blank" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            {/* Instagram SVG */}
            <div className="w-[20px] h-[20px]">
              <a
                href=""
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            {/* Twitter SVG */}
            <div className="w-[20px] h-[20px]">
              <a
                href="https://twitter.com/AhmadJajja786"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
            {/* LinkedIn SVG */}
            <div className="w-[20px] h-[20px]">
              <a
                href="https://www.linkedin.com/in/ahmad-jajja-ba8b34210/"
                aria-label="Linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            {/* Facebook SVG */}
            <div className="w-[20px] h-[20px] mt-[1px]">
              <a
                href="https://www.facebook.com/ahmad.jajja.9081/"
                className="text-[#ccd6f6] text-[1.1rem]"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  class="iconHover"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Logos to show when Screen > 768 */}
      <div
        className={`contentContainer ${
          showFirstContent ? "show" : ""
        } hidden logoScreen1:block fixed bottom-0 left-[15px] bg-transparent`}
      >
        <div className="w-[2.5rem] flex flex-col justify-between items-center pt-[10px]">
          {/* Github SVG */}
          <div
            onClick={() => setGithubSvgClicked(true)}
            onMouseOver={() => setGithubSvgHover(true)}
            onMouseOut={() => setGithubSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a href="https://github.com/Ahmadjajja" target="_blank" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  githubSvgClicked
                    ? "#64ffda"
                    : githubSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          {/* Instagram SVG */}
          <div
            onClick={() => setInstagramSvgClicked(true)}
            onMouseOver={() => setInstagramSvgHover(true)}
            onMouseOut={() => setInstagramSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a href="" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  instagramSvgClicked
                    ? "#64ffda"
                    : instagramSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          {/* Twitter SVG */}
          <div
            onClick={() => setTwitterSvgClicked(true)}
            onMouseOver={() => setTwitterSvgHover(true)}
            onMouseOut={() => setTwitterSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a href="https://twitter.com/AhmadJajja786" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  twitterSvgClicked
                    ? "#64ffda"
                    : twitterSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-twitter ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          {/* LinkedIn SVG */}
          <div
            onClick={() => setLinkedInSvgClicked(true)}
            onMouseOver={() => setLinkedInSvgHover(true)}
            onMouseOut={() => setLinkedInSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a
              href="https://www.linkedin.com/in/ahmad-jajja-ba8b34210/"
              aria-label="Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  linkedInSvgClicked
                    ? "#64ffda"
                    : linkedInSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-linkedin ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          {/* Facebook SVG */}
          <div
            onClick={() => setFacebookSvgClicked(true)}
            onMouseOver={() => setFacebookSvgHover(true)}
            onMouseOut={() => setFacebookSvgHover(false)}
            className="w-[20px] h-[20px] mt-[1px] mb-[15px]"
          >
            <a
              href="https://web.facebook.com/profile.php?id=100090043866714"
              className="text-[#ccd6f6] text-[1.1rem]"
            >
              <svg
                stroke="currentColor"
                fill={
                  facebookSvgClicked
                    ? "#64ffda"
                    : facebookSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
                stroke-width="0"
                viewBox="0 0 320 512"
                class="iconHover ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
          </div>
          {/* Straight Line */}
          <div className="h-[7.187rem] border-[1px] border-[#a8b2d1]"></div>
        </div>
      </div>

      {/* Email Id */}
      <div
        className={`contentContainer ${
          showSecondContent ? "show" : ""
        } hidden logoScreen1:block fixed bottom-0 right-[15px]`}
      >
        <div
          onClick={() => setMailClicked(true)}
          onMouseOver={() => setMailHover(true)}
          onMouseOut={() => setMailHover(false)}
          className="w-[2.5rem] flex flex-col justify-between items-center"
        >
          <a
            className={
              mailClicked
                ? "straightLine mt-[20px] mb-[30px] mx-auto text-[12px] font-sans text-[#64ffda] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                : mailHover
                ? "straightLine mt-[20px] mb-[25px] mx-auto text-[12px] font-sans text-[#64ffda] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                : "straightLine my-[20px] mx-auto text-[12px] font-sans text-[#a8b2d1] transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
            }
            href="mailto:ahmadjajja86@gmail.com"
          >
            ahmadjajja86@gmail.com
          </a>
          {/* Straight Line */}
          <div className="h-[7.187rem] border-[1px] border-[#a8b2d1]"></div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
