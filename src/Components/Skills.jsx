import '../Styles/Skills.css';
import {
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaSquareJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaPhp,
  FaLaravel,
  FaBootstrap,
  FaNode,
  FaAws,
  FaServer,
} from 'react-icons/fa6';
import { Icon } from '@iconify-icon/react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Skills = () => {
  return (
    <>
      <div
        id="skills-page"
        className="h-screen bg-gradient-to-t from-malek-yellow to-malek-white to-70% flex flex-col items-center justify-center"
      >
        <div className="h-1/3 flex items-center">
          <h1 className="font-bungee-shade text-malek-dark lg:text-[10rem] md:text-9xl text-6xl md:ml-1">
            Skills
          </h1>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-x-8 items-center text-5xl md:text-6xl h-1/3 text-malek-dark">
          <Tooltip id="my-tooltip" />
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 1 }}
            viewport={{
              once: true,
            }}
          >
            <FaHtml5
              data-tooltip-id="my-tooltip"
              data-tooltip-content="HTML5"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 2 }}
            viewport={{
              once: true,
            }}
          >
            <FaCss3
              data-tooltip-id="my-tooltip"
              data-tooltip-content="CSS"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 3 }}
            viewport={{
              once: true,
            }}
          >
            <FaSquareJs
              data-tooltip-id="my-tooltip"
              data-tooltip-content="JavaScript"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 4 }}
            viewport={{
              once: true,
            }}
          >
            <FaReact
              data-tooltip-id="my-tooltip"
              data-tooltip-content="React"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 5 }}
            viewport={{
              once: true,
            }}
          >
            <FaNode
              data-tooltip-id="my-tooltip"
              data-tooltip-content="NodeJs"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 6 }}
            viewport={{
              once: true,
            }}
          >
            <FaBootstrap
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Bootstrap"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 7 }}
            viewport={{
              once: true,
            }}
          >
            <Icon
              icon="file-icons:tailwind"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Tailwind"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 8 }}
            viewport={{
              once: true,
            }}
          >
            <FaServer
              data-tooltip-id="my-tooltip"
              data-tooltip-content="REST API"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 9 }}
            viewport={{
              once: true,
            }}
          >
            <FaJava
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Java"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 10 }}
            viewport={{
              once: true,
            }}
          >
            <FaDatabase
              data-tooltip-id="my-tooltip"
              data-tooltip-content="SQL"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 11 }}
            viewport={{
              once: true,
            }}
          >
            <FaGitAlt
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Git"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 12 }}
            viewport={{
              once: true,
            }}
          >
            <FaGithub
              data-tooltip-id="my-tooltip"
              data-tooltip-content="GitHub"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 13 }}
            viewport={{
              once: true,
            }}
          >
            <FaLinux
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Linux"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 14 }}
            viewport={{
              once: true,
            }}
          >
            <FaPhp
              data-tooltip-id="my-tooltip"
              data-tooltip-content="PHP"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 15 }}
            viewport={{
              once: true,
            }}
          >
            <FaLaravel
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Laravel"
              className="icon-hover focus:outline-none"
            />
          </motion.li>

          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="list-none"
            transition={{ delay: 0.05 * 16 }}
            viewport={{
              once: true,
            }}
          >
            <FaAws
              data-tooltip-id="my-tooltip"
              data-tooltip-content="AWS"
              className="icon-hover focus:outline-none"
            />
          </motion.li>
        </div>
      </div>
    </>
  );
};

export default Skills;
