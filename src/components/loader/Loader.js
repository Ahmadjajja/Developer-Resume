import React, { useEffect } from "react";
import "../../Css_applied/loader/loaderStyles.css";

function MyLoader() {
  useEffect(() => {
    const text = document.getElementById("text");
    const mainSvg = document.getElementById("logo");

    function delayCss() {
      text.classList.add("textInsideLoader");
      text.classList.remove("text");
    }

    function zoomOut() {
      mainSvg.style.animationName = "zoom";
      mainSvg.style.animationDuration = "0.2s";
      mainSvg.style.animationTimingFunction = "linear";
    }

    mainSvg.style.transform = "scale(2)";

    setTimeout(delayCss, 1500);
    setTimeout(zoomOut, 2000);
  }, []);
  const x = window.innerWidth >= 768 ? "29" : "25";
  const y = window.innerWidth >= 768 ? "56" : "57";

  return (
    <div className="my-loader">
      <div className="body">
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <g>
                <text
                  id="text"
                  className="text"
                  x={x}
                  y={y}
                  fill="currentColor"
                  fontSize="40px"
                  fontFamily="Consolas, serif"
                >
                  A
                </text>

                <polygon
                  className="main"
                  id="Shape"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default MyLoader;
