// Contact.jsx
import '../Styles/Contact.css';
import HomeButton from '../Components/HomeButton.jsx';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_varnm28',
        'template_pr4tud2',
        '#contactForm',
        'uBdLjeM1Nv0eEvaK-'
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    e.target.reset();
  };

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
      <div className="h-screen bg-malek-yellow flex flex-col items-center justify-center gap-10 lg:gap-20">
        <h1 className="font-bungee-shade text-malek-dark md:text-9xl text-center text-6xl md:ml-1">
          Reach out!
        </h1>

        <div className="form-container w-11/12 md:w-auto">
          <form id="contactForm" className="form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input required="" name="email" id="email" type="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                required=""
                cols="50"
                rows="10"
                id="message"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Send
            </button>
          </form>
        </div>
        <HomeButton />
      </div>
    </>
  );
};

export default Contact;
