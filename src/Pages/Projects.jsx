import ProjectCard from '../Components/ProjectCard';
import HomeButton from '../Components/HomeButton.jsx';

const Projects = () => {
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
      <div className="bg-malek-green flex flex-col items-center justify-center">
        <div className="flex items-center my-20">
          <h1 className="font-bungee-shade text-malek-yellow lg:text-9xl text-5xl md:text-6xl">
            Portfolio
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-center">
          <ProjectCard />
        </div>

        <div className="flex items-center my-20">
          <HomeButton />
        </div>
      </div>
    </>
  );
};

export default Projects;
