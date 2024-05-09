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
          <FaHtml5
            data-tooltip-id="my-tooltip"
            data-tooltip-content="HTML5"
            className="icon-hover focus:outline-none"
          />
          <FaCss3
            data-tooltip-id="my-tooltip"
            data-tooltip-content="CSS"
            className="icon-hover focus:outline-none"
          />
          <FaSquareJs
            data-tooltip-id="my-tooltip"
            data-tooltip-content="JavaScript"
            className="icon-hover focus:outline-none"
          />
          <FaReact
            data-tooltip-id="my-tooltip"
            data-tooltip-content="React"
            className="icon-hover focus:outline-none"
          />
          <FaNode
            data-tooltip-id="my-tooltip"
            data-tooltip-content="NodeJs"
            className="icon-hover focus:outline-none"
          />
          <FaBootstrap
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Bootstrap"
            className="icon-hover focus:outline-none"
          />
          <Icon
            icon="file-icons:tailwind"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Tailwind"
            className="icon-hover focus:outline-none"
          />
          <FaServer
            data-tooltip-id="my-tooltip"
            data-tooltip-content="REST API"
            className="icon-hover focus:outline-none"
          />
          <FaJava
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Java"
            className="icon-hover focus:outline-none"
          />
          <FaDatabase
            data-tooltip-id="my-tooltip"
            data-tooltip-content="SQL"
            className="icon-hover focus:outline-none"
          />
          <FaGitAlt
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Git"
            className="icon-hover focus:outline-none"
          />
          <FaGithub
            data-tooltip-id="my-tooltip"
            data-tooltip-content="GitHub"
            className="icon-hover focus:outline-none"
          />
          <FaLinux
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Linux"
            className="icon-hover focus:outline-none"
          />
          <FaPhp
            data-tooltip-id="my-tooltip"
            data-tooltip-content="PHP"
            className="icon-hover focus:outline-none"
          />
          <FaLaravel
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Laravel"
            className="icon-hover focus:outline-none"
          />
          <FaAws
            data-tooltip-id="my-tooltip"
            data-tooltip-content="AWS"
            className="icon-hover focus:outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
