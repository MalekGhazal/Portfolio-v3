import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import '../Styles/Homepage.css';

const Hero = () => {
  const name = useRef(null);

  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ['Malek', 'Kazal.'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-malek-yellow h-screen flex flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-80 mx-auto lg:w-1/2 h-1/2 mt-10 lg:my-auto">
          <h1 className="font-bungee-shade text-malek-green lg:text-9xl text-6xl lg:ml-1">
            <span ref={name} />
          </h1>
          <p className="lg:text-5xl text-3xl text-center lg:text-start font-bungee-normal text-malek-dark mb-10 mt-5 lg:ml-2">
            Full Stack <br />
            <span className="lg:text-4xl text-2xl">Developer</span>
          </p>
          <div className="flex lg:flex-row flex-col justify-center lg:justify-start items-center mt-10">
            <p className="lg:text-9xl text-5xl mb-5 lg:mb-0 text-malek-white font-bungee-normal overflow-y-clip">
              <Link to={'/blog'}>Blog</Link>
            </p>
            <div className="typewriter lg:ml-12">
              <div className="slide">
                <i></i>
              </div>
              <div className="paper"></div>
              <div className="keyboard"></div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 h-1/2 flex items-center justify-center my-auto">
          <ul className="flex flex-col items-center lg:items-start">
            <li className="lg:mb-10 mb-5">
              <a
                href="#about-page"
                className="text-malek-dark font-bungee-normal xl:text-5xl text-3xl homepage-link"
              >
                About
              </a>
            </li>
            <li className="lg:mb-10 mb-5">
              <a
                href="#skills-page"
                className="text-malek-dark font-bungee-normal xl:text-5xl text-3xl homepage-link"
              >
                Skills
              </a>
            </li>
            <li className="lg:mb-10 mb-5">
              <a
                href="#portfolio-page"
                className="text-malek-dark font-bungee-normal xl:text-5xl text-3xl homepage-link"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact-page"
                className="text-malek-dark font-bungee-normal xl:text-5xl text-3xl homepage-link"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute"
      >
        <path
          fill="#F4CE14"
          fillOpacity="1"
          d="M0,224L60,192C120,160,240,96,360,101.3C480,107,600,181,720,186.7C840,192,960,128,1080,106.7C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Hero;
