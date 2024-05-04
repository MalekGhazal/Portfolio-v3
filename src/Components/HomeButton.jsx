// HomeButton.jsx
import { Link } from 'react-router-dom';
import '../Styles/HomeButton.css';

const HomeButton = () => {
  return (
    <>
      <Link to="/" className="about-btn" data-text="Awesome">
        <span className="actual-text">&nbsp;Home&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Home&nbsp;
        </span>
      </Link>
    </>
  );
};

export default HomeButton;
