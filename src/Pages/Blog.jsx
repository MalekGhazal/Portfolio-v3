import '../Styles/Blog.css';
import HomeButton from '../Components/HomeButton.jsx';

const Blog = () => {
  document.documentElement.style.setProperty(
    '--default-animation-color',
    '#495E57'
  );
  document.documentElement.style.setProperty(
    '--default-text-stroke-color',
    'rgb(69, 71, 75, 0.6)'
  );
  return (
    <>
      <div className="bg-malek-yellow h-screen flex flex-col items-center justify-center gap-20">
        <div data-js="astro" className="astronaut">
          <div className="head"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="body">
            <div className="panel"></div>
          </div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
          <div className="schoolbag"></div>
        </div>
        <h1 className="font-bungee-shade text-malek-dark lg:text-6xl md:text-4xl text-center text-3xl md:ml-1">
          Coming Soon...
        </h1>
        <HomeButton />
      </div>
    </>
  );
};

export default Blog;
