import React, { useState, useEffect } from "react";
import "../Css_applied/logoStyles.css";
import leetcode from "../images/leetcode.svg";
const Logos = () => {
  // Hover
  const [githubSvgHover, setGithubSvgHover] = useState(false);
  const [leetcodeSvgHover, setLeetcodeSvgHover] = useState(false);
  const [twitterSvgHover, setTwitterSvgHover] = useState(false);
  const [linkedInSvgHover, setLinkedInSvgHover] = useState(false);
  // const [facebookSvgHover, setFacebookSvgHover] = useState(false);
  const [mailHover, setMailHover] = useState(false);
  // Clicked
  const [githubSvgClicked, setGithubSvgClicked] = useState(false);
  const [leetcodeSvgClicked, setLeetcodeSvgClicked] = useState(false);
  const [twitterSvgClicked, setTwitterSvgClicked] = useState(false);
  const [linkedInSvgClicked, setLinkedInSvgClicked] = useState(false);
  // const [facebookSvgClicked, setFacebookSvgClicked] = useState(false);
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
      <div className="ml-8 mr-8 logoScreen1:hidden">
        <div className="pt-7 flex justify-center items-center">
          <div className="w-[38%] flex justify-between mt-0 ml-auto mr-auto mb-[40px] logoScreen2:min-w-[155px]">
            {/* Github SVG */}
            <div className="w-[20px] h-[20px]">
              <a
                href="https://github.com/Ahmadjajja"
                target="_blank"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            {/* Leetcode SVG */}
            <div className="w-[20px] h-[20px]">
              <a
                href="https://leetcode.com/ahmadjajja86/"
                aria-label="leetcode"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="leetcode"
                  stroke={"#a8b2d1"}
                >
                  <path d="M20.303 16.047h-9.561c-.936 0-1.697-.803-1.697-1.79s.762-1.79 1.697-1.79h9.561c.936 0 1.697.803 1.697 1.79s-.762 1.79-1.697 1.79zm-9.561-2.58c-.385 0-.697.354-.697.79s.312.79.697.79h9.561c.385 0 .697-.354.697-.79s-.312-.79-.697-.79h-9.561z"></path>
                  <path d="M11.618 24c-1.604 0-2.977-.533-3.97-1.541L3.55 18.278C2.551 17.262 2 15.819 2 14.215c0-1.578.551-3.008 1.552-4.025L13.071.509c.66-.67 1.829-.652 2.506.036.694.706.71 1.839.034 2.524l-1.762 1.816a5.25 5.25 0 0 1 1.739 1.159l2.463 2.53c.672.684.655 1.815-.039 2.521a1.79 1.79 0 0 1-1.284.545c-.464 0-.896-.181-1.219-.509l-2.536-2.492c-.321-.327-.779-.49-1.367-.49-.606 0-1.069.157-1.375.469l-4.067 4.194c-.342.349-.521.831-.521 1.4 0 .577.189 1.101.519 1.436l4.083 4.182c.315.321.774.484 1.362.484s1.045-.163 1.36-.484l2.549-2.505a1.687 1.687 0 0 1 1.209-.503h.002c.483 0 .939.194 1.286.546.693.705.71 1.837.036 2.522l-2.457 2.525C14.586 23.438 13.176 24 11.618 24zM14.29 1a.703.703 0 0 0-.507.21l-9.519 9.681C3.449 11.72 3 12.9 3 14.215c0 1.341.449 2.535 1.265 3.363l.001.001 4.097 4.18C9.162 22.57 10.288 23 11.618 23c1.288 0 2.444-.455 3.258-1.282l2.457-2.525c.295-.301.279-.804-.034-1.122a.801.801 0 0 0-.573-.247h-.001a.703.703 0 0 0-.502.209l-2.549 2.505c-.497.507-1.214.778-2.068.778s-1.572-.271-2.076-.784L5.446 16.35c-.519-.527-.805-1.286-.805-2.136 0-.824.286-1.57.806-2.099l4.067-4.194c.503-.512 1.206-.771 2.091-.771.854 0 1.571.271 2.074.783l2.536 2.492a.705.705 0 0 0 .512.216.798.798 0 0 0 .571-.246c.313-.319.33-.822.037-1.121l-2.461-2.528a4.238 4.238 0 0 0-2.028-1.137c-.175-.041-.331-.176-.382-.349s-.021-.363.104-.492l2.325-2.398c.298-.302.282-.805-.031-1.124A.799.799 0 0 0 14.29 1z"></path>
                </svg>
              </a>
            </div>
            {/* Twitter SVG */}
            <div className="w-[20px] h-[20px]">
              <a
                href="https://twitter.com/AhmadJajja786"
                aria-label="Twitter"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter"
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
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8b2d1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            {/* Facebook SVG
            <div className="w-[20px] h-[20px] mt-[1px]">
              <a
                href="https://www.facebook.com/ahmad.jajja.9081/"
                className="text-[#ccd6f6] text-[1.1rem]"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="iconHover"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      {/* Logos to show when Screen > 768 */}
      <div
        className={`contentContainer ${
          showFirstContent ? "show" : ""
        } hidden logoScreen1:block fixed bottom-0 left-[15px] bg-transparent`}
      >
        <div className="w-[2.5rem] flex flex-col justify-between items-center px-[35px] pt-[10px]">
          {/* Github SVG */}
          <div
            onClick={() => {
              setGithubSvgClicked(true);
              setLeetcodeSvgClicked(false);
              setTwitterSvgClicked(false);
              setLinkedInSvgClicked(false);
              // setFacebookSvgClicked(false)
            }}
            onMouseOver={() => setGithubSvgHover(true)}
            onMouseOut={() => setGithubSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a
              href="https://github.com/Ahmadjajja"
              target="_blank"
              aria-label="GitHub"
            >
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          {/* LeetCode SVG */}
          <div
            onClick={() => {
              setGithubSvgClicked(false);
              setLeetcodeSvgClicked(true);
              setTwitterSvgClicked(false);
              setLinkedInSvgClicked(false);
              // setFacebookSvgClicked(false)
            }}
            onMouseOver={() => setLeetcodeSvgHover(true)}
            onMouseOut={() => setLeetcodeSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a
              href="https://leetcode.com/ahmadjajja86/"
              target="_blank"
              aria-label="leetcode"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="leetcode"
                stroke={
                  leetcodeSvgClicked
                    ? "#64ffda"
                    : leetcodeSvgHover
                    ? "#64ffda"
                    : "#a8b2d1"
                }
              >
                <path d="M20.303 16.047h-9.561c-.936 0-1.697-.803-1.697-1.79s.762-1.79 1.697-1.79h9.561c.936 0 1.697.803 1.697 1.79s-.762 1.79-1.697 1.79zm-9.561-2.58c-.385 0-.697.354-.697.79s.312.79.697.79h9.561c.385 0 .697-.354.697-.79s-.312-.79-.697-.79h-9.561z"></path>
                <path d="M11.618 24c-1.604 0-2.977-.533-3.97-1.541L3.55 18.278C2.551 17.262 2 15.819 2 14.215c0-1.578.551-3.008 1.552-4.025L13.071.509c.66-.67 1.829-.652 2.506.036.694.706.71 1.839.034 2.524l-1.762 1.816a5.25 5.25 0 0 1 1.739 1.159l2.463 2.53c.672.684.655 1.815-.039 2.521a1.79 1.79 0 0 1-1.284.545c-.464 0-.896-.181-1.219-.509l-2.536-2.492c-.321-.327-.779-.49-1.367-.49-.606 0-1.069.157-1.375.469l-4.067 4.194c-.342.349-.521.831-.521 1.4 0 .577.189 1.101.519 1.436l4.083 4.182c.315.321.774.484 1.362.484s1.045-.163 1.36-.484l2.549-2.505a1.687 1.687 0 0 1 1.209-.503h.002c.483 0 .939.194 1.286.546.693.705.71 1.837.036 2.522l-2.457 2.525C14.586 23.438 13.176 24 11.618 24zM14.29 1a.703.703 0 0 0-.507.21l-9.519 9.681C3.449 11.72 3 12.9 3 14.215c0 1.341.449 2.535 1.265 3.363l.001.001 4.097 4.18C9.162 22.57 10.288 23 11.618 23c1.288 0 2.444-.455 3.258-1.282l2.457-2.525c.295-.301.279-.804-.034-1.122a.801.801 0 0 0-.573-.247h-.001a.703.703 0 0 0-.502.209l-2.549 2.505c-.497.507-1.214.778-2.068.778s-1.572-.271-2.076-.784L5.446 16.35c-.519-.527-.805-1.286-.805-2.136 0-.824.286-1.57.806-2.099l4.067-4.194c.503-.512 1.206-.771 2.091-.771.854 0 1.571.271 2.074.783l2.536 2.492a.705.705 0 0 0 .512.216.798.798 0 0 0 .571-.246c.313-.319.33-.822.037-1.121l-2.461-2.528a4.238 4.238 0 0 0-2.028-1.137c-.175-.041-.331-.176-.382-.349s-.021-.363.104-.492l2.325-2.398c.298-.302.282-.805-.031-1.124A.799.799 0 0 0 14.29 1z"></path>
              </svg>
            </a>
          </div>
          {/* Twitter SVG */}
          <div
            onClick={() => {
              setGithubSvgClicked(false);
              setLeetcodeSvgClicked(false);
              setTwitterSvgClicked(true);
              setLinkedInSvgClicked(false);
              // setFacebookSvgClicked(false)
            }}
            onMouseOver={() => setTwitterSvgHover(true)}
            onMouseOut={() => setTwitterSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a
              href="https://twitter.com/AhmadJajja786"
              target="_blank"
              aria-label="Twitter"
            >
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          {/* LinkedIn SVG */}
          <div
            onClick={() => {
              setGithubSvgClicked(false);
              setLeetcodeSvgClicked(false);
              setTwitterSvgClicked(false);
              setLinkedInSvgClicked(true);
              // setFacebookSvgClicked(false)
            }}
            onMouseOver={() => setLinkedInSvgHover(true)}
            onMouseOut={() => setLinkedInSvgHover(false)}
            className="w-[20px] h-[20px] mb-[15px]"
          >
            <a
              href="https://www.linkedin.com/in/ahmad-jajja-ba8b34210/"
              aria-label="Linkedin"
              target="_blank"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          {/* Facebook SVG
          <div
            onClick={() => {
              setGithubSvgClicked(false)
              setLeetcodeSvgClicked(false)
              setTwitterSvgClicked(false)
              setLinkedInSvgClicked(false)
              setFacebookSvgClicked(true)
            }}
            onMouseOver={() => setFacebookSvgHover(true)}
            onMouseOut={() => setFacebookSvgHover(false)}
            className="w-[20px] h-[20px] mt-[1px] mb-[15px]"
          >
            <a
              href="https://www.facebook.com/ahmad.jajja.9081/"
              className="text-[#ccd6f6] text-[1.1rem]"
              target="_blank"
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
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="iconHover ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration transition-whereIWorkedTransitionProperty"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
          </div> */}
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
