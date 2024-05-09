import { useEffect, useRef } from 'react';
import '../Styles/About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from('.about-logo', {
      scrollTrigger: {
        trigger: '.about-logo',
      },
      duration: 1,
      opacity: 0.5,
      x: -150,
    });

    gsap.to('.about-logo', {
      scrollTrigger: {
        trigger: '.about-logo',
      },
      duration: 1,
      opacity: 1,
      x: 0,
    });

    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.about-text',
      },
      duration: 3,
      opacity: 0,
    });

    gsap.to('.about-text', {
      scrollTrigger: {
        trigger: '.about-text',
      },
      duration: 3,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <div
        id="about-page"
        className="bg-malek-white flex flex-col justify-center items-center z-50"
        ref={aboutRef}
      >
        <div className="flex items-center flex-col lg:flex-row justify-center">
          <h1 className="text-malek-dark text-center lg:w-2/4 font-bungee-shade about-logo xl:text-[30rem] lg:text-[28rem] md:text-[20rem] text-[15rem]">
            M
          </h1>
          <p className="font-source-code w-full px-4 lg:w-3/4 text-malek-dark z-50 text-center lg:text-start text-sm md:text-lg lg:text-xl xl:text-2xl xl:leading-relaxed about-text">
            Hey there! I&apos;m a{' '}
            <span className="underline decoration-malek-yellow font-bold">
              full-stack developer
            </span>{' '}
            who&apos;s all about the thrill of coding and the art of design.
            Creating something from scratch gets my heart racing, whether
            it&apos;s a slick new interface or a complex backend system.
            I&apos;ve dabbled in a bit of everything in the tech world, but
            where I really shine is in crafting solutions that are both
            effective and elegant. I&apos;m all about diving into new challenges
            with passion and determination, making sure every project I touch is
            not just good, but great. Let&apos;s team up and make some digital
            magic happen!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
