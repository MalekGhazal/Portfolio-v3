import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import '../Styles/Homepage.css';

const Homepage = () => {
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
        <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-80 mx-auto lg:w-1/2 h-1/2 my-auto">
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
        <div className="lg:w-1/2 h-1/2 flex lg:items-center justify-center my-auto">
          <ul className="flex flex-col items-center lg:items-start">
            <li className="mb-10">
              <Link
                to="/about"
                className="text-malek-dark font-bungee-normal xl:text-5xl text-3xl homepage-link"
              >
                About
              </Link>
            </li>
            <li className="mb-10">
              <Link
                to="/skills"
                className="text-malek-dark font-bungee-normal xl:text-5xl text-3xl homepage-link"
              >
                Skills
              </Link>
            </li>
            <li className="mb-10">
              <Link
                to="/portfolio"
                className="text-malek-dark font-bungee-normal xl:text-5xl text-3xl homepage-link"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-malek-dark font-bungee-normal xl:text-5xl text-3xl homepage-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homepage;
