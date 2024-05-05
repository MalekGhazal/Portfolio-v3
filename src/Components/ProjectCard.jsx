import '../Styles/ProjectCard.css';
import Project from '../Data/projects.json';

const ProjectCard = () => {
  return (
    <>
      {Project.projects.map((project) => (
        <div key={project.id} className="card">
          <div className="main-content">
            <div className="header">
              <span>Project:</span>
              <span>{project.title}</span>
            </div>
            <p className="heading">{project.Description}</p>
            <div className="categories">
              {project.tags.split(',').map((tag, index) => (
                <span key={index}>{tag.trim()}</span>
              ))}
            </div>
          </div>
          <div className="footer-bg">
            <a href={project.Link} target="_blank" className="footer">
              Learn more...
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
