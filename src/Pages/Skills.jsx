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

import HomeButton from '../Components/HomeButton';

const Skills = () => {
  document.documentElement.style.setProperty(
    '--default-animation-color',
    '#F4CE14'
  );
  document.documentElement.style.setProperty(
    '--default-text-stroke-color',
    'rgb(245, 247, 248, 0.6)'
  );

  return (
    <>
      <div className="h-screen bg-malek-dark flex flex-col items-center justify-center">
        <div className="h-1/3 flex items-center">
          <h1 className="font-bungee-shade text-malek-white md:text-9xl text-6xl md:ml-1">
            Skills
          </h1>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-x-8 items-center text-5xl md:text-6xl h-1/3 text-malek-yellow">
          <Tooltip id="my-tooltip" />
          <FaHtml5
            data-tooltip-id="my-tooltip"
            data-tooltip-content="HTML5"
            className="icon-hover"
          />
          <FaCss3
            data-tooltip-id="my-tooltip"
            data-tooltip-content="CSS"
            className="icon-hover"
          />
          <FaSquareJs
            data-tooltip-id="my-tooltip"
            data-tooltip-content="JavaScript"
            className="icon-hover"
          />
          <FaReact
            data-tooltip-id="my-tooltip"
            data-tooltip-content="React"
            className="icon-hover"
          />
          <FaNode
            data-tooltip-id="my-tooltip"
            data-tooltip-content="NodeJs"
            className="icon-hover"
          />
          <FaBootstrap
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Bootstrap"
            className="icon-hover"
          />
          <Icon
            icon="file-icons:tailwind"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Tailwind"
            className="icon-hover"
          />
          <FaServer
            data-tooltip-id="my-tooltip"
            data-tooltip-content="REST API"
            className="icon-hover"
          />
          <FaJava
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Java"
            className="icon-hover"
          />
          <FaDatabase
            data-tooltip-id="my-tooltip"
            data-tooltip-content="SQL"
            className="icon-hover"
          />
          <FaGitAlt
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Git"
            className="icon-hover"
          />
          <FaGithub
            data-tooltip-id="my-tooltip"
            data-tooltip-content="GitHub"
            className="icon-hover"
          />
          <FaLinux
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Linux"
            className="icon-hover"
          />
          <FaPhp
            data-tooltip-id="my-tooltip"
            data-tooltip-content="PHP"
            className="icon-hover"
          />
          <FaLaravel
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Laravel"
            className="icon-hover"
          />
          <FaAws
            data-tooltip-id="my-tooltip"
            data-tooltip-content="AWS"
            className="icon-hover"
          />
        </div>
        <div className="h-1/3 flex items-center">
          <HomeButton />
        </div>
      </div>
    </>
  );
};

export default Skills;
