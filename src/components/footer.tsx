import compoundLogo from "@/assets/compound-logo.png";
import telegram from "@/assets/social-icons/telegram.png";
import reddit from "@/assets/social-icons/reddit.png";
import x from "@/assets/social-icons/x.png";
import { Link } from "react-router-dom";

const Footer = () => {

  // const features:

  return (
    <footer className="footer flex flex-wrap justify-around items-center">
      <div className="logo-container">
        <img src={compoundLogo} alt="logo" width={155} height={155} />
      </div>
      <div className="footer-menu-items flex flex-wrap gap-20 font-bold text-lg">
        <Link to={`/about-us`}>About Us</Link>
        <Link to={`/roadmap`}>Roadmap</Link>
        <Link to={`/faqs`}>FAQs</Link>
        <Link to={`/contact-us`}>Contact Us</Link>
      </div>
      <div className="footer-actions-container flex flex-wrap justify-center items-center flex-col gap-3">
        <h1 className="contact-heading text-center font-extrabold p-3">
          Contact <span className="special-colors">Us</span>
        </h1>
        <div className="social-links flex flex-wrap gap-3">
          <Link to="#">
            <img src={telegram} alt="telegram" width={31} height={31} />
          </Link>
          <Link to="#">
            <img src={reddit} alt="reddit" width={31} height={31} />
          </Link>
          <Link to="#">
            <img src={x} alt="x-twitter" width={31} height={31} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
