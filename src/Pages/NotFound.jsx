import '../Styles/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="notfound-container">
        <div className="notfound-bg">
          <div className="main_wrapper">
            <div className="main">
              <div className="antenna">
                <div className="antenna_shadow"></div>
                <div className="a1"></div>
                <div className="a1d"></div>
                <div className="a2"></div>
                <div className="a2d"></div>
                <div className="a_base"></div>
              </div>
              <div className="tv">
                <div className="cruve">
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 189.929 189.929"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="curve_svg"
                  >
                    <path
                      d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                    ></path>
                  </svg>
                </div>
                <div className="display_div">
                  <div className="screen_out">
                    <div className="screen_out1">
                      <div className="screen">
                        <span className="notfound_text"> NOT FOUND</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lines">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
                <div className="buttons_div">
                  <div className="b1">
                    <div></div>
                  </div>
                  <div className="b2"></div>
                  <div className="speakers">
                    <div className="g1">
                      <div className="g11"></div>
                      <div className="g12"></div>
                      <div className="g13"></div>
                    </div>
                    <div className="g"></div>
                    <div className="g"></div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="base1"></div>
                <div className="base2"></div>
                <div className="base3"></div>
              </div>
            </div>
            <div className="text_404">
              <div className="text_4041">4</div>
              <div className="text_4042">0</div>
              <div className="text_4043">4</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link to="/" className="button">
            <div className="bgContainer">
              <span className="px-2">Back</span>
              <span className="px-2">Back</span>
            </div>
            <div className="arrowContainer">
              <svg
                width="25"
                height="25"
                viewBox="0 0 45 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
