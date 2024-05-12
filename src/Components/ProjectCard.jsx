import '../Styles/ProjectCard.css';
import Project from '../Data/projects.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const ProjectCard = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[95%] lg:max-w-[90%]"
      >
        {Project.projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="card mx-2">
              <div className="image-container">
                <img
                  src={project.imagePath}
                  alt="project-image"
                  loading="lazy"
                  className="project-image"
                />
              </div>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectCard;
