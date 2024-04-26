import { Link } from "react-router-dom";
import "../Styles/About.css";

const About = () => {
  return (
    <>
      <div className='bg-malek-green h-screen flex flex-col justify-center items-center'>
        <h1 className='mx-auto font-bungee-shade text-5xl flex items-center h-2/4  md:h-1/3 text-malek-yellow md:text-7xl lg:text-9xl'>
          About Me
        </h1>
        <p className='font-source-code h-3/4 md:h-2/3 text-malek-white text-center md:text-start md:text-2xl lg:text-3xl xl:text-4xl px-6 md:px-24 xl:leading-relaxed'>
          Hey there! I&apos;m a software developer who&apos;s all about the
          thrill of coding and the art of design. Creating something from
          scratch gets my heart racing, whether it&apos;s a slick new interface
          or a complex backend system. I&apos;ve dabbled in a bit of everything
          in the tech world, but where I really shine is in crafting solutions
          that are both effective and elegant. I&apos;m all about diving into
          new challenges with passion and determination, making sure every
          project I touch is not just good, but great. Let&apos;s team up and
          make some digital magic happen!
        </p>
        <Link to='/' className='about-btn mb-12' data-text='Awesome'>
          <span className='actual-text'>&nbsp;Home&nbsp;</span>
          <span aria-hidden='true' className='hover-text'>
            &nbsp;Home&nbsp;
          </span>
        </Link>
      </div>
    </>
  );
};

export default About;
