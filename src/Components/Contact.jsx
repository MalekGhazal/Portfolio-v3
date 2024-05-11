// Contact.jsx
import '../Styles/Contact.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialMedia from '../Components/SocialMedia';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

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
        toast.success('Message Has Been Sent Successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.warning(
          'Error sending your message, please try again or send me an email.'
        );
      });

    e.target.reset();
  };

  return (
    <>
      <div
        id="contact-page"
        className="bg-malek-yellow min-h-screen lg:h-screen flex flex-col items-center justify-center gap-10 lg:gap-20 "
      >
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1 }}
          viewport={{
            once: true,
          }}
          className="font-bungee-shade text-malek-dark md:text-9xl text-center text-6xl z-50"
        >
          Reach out!
        </motion.div>

        <div className="form-container w-11/12 mb-4 lg:mb-0 md:w-auto z-50">
          <form id="contactForm" className="form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Your Full Name</label>
              <input required="" name="name" id="name" type="text" />
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

        <SocialMedia />
      </div>
    </>
  );
};

export default Contact;
