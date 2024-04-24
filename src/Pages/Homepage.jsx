import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../Styles/Homepage.css";

const Homepage = () => {
  const name = useRef(null);

  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ["Malek", "Kazal."],
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
      <div className='bg-malek-yellow h-screen'>
        <div className='flex flex-col max-w-80 m-auto pt-48'>
          <h1 className='font-bungee-shade text-malek-green text-9xl ml-1'>
            <span ref={name} />
          </h1>
          <p className='text-5xl font-bungee-normal text-malek-dark mb-10 mt-5 ml-2'>
            Full Stack <br />
            <span className='text-4xl'>Developer</span>
          </p>
          <div className='flex items-center'>
            <a href='' target='_blank'>
              <p className='text-9xl text-malek-white font-bungee-normal'>
                Blog
              </p>
            </a>
            <div className='typewriter ml-12'>
              <div className='slide'>
                <i></i>
              </div>
              <div className='paper'></div>
              <div className='keyboard'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
