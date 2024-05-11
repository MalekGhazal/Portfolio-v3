import ProjectCard from './ProjectCard.jsx';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Projects = () => {
  return (
    <>
      <div
        id="portfolio-page"
        className="bg-gradient-to-b from-malek-yellow to-malek-white to-90% flex flex-col items-center justify-center pb-20"
      >
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1 }}
          viewport={{
            once: true,
          }}
          className="flex items-center my-20"
        >
          <h1 className="font-bungee-shade text-malek-dark lg:text-9xl text-5xl md:text-6xl">
            Portfolio
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-center">
          <ProjectCard />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute"
      >
        <path
          fill="#F5F7F8"
          fillOpacity="1"
          d="M0,224L60,192C120,160,240,96,360,101.3C480,107,600,181,720,186.7C840,192,960,128,1080,106.7C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Projects;
