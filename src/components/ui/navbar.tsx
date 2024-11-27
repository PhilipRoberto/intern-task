import { Link } from "react-router-dom";

import logoIcon from "@/assets/logo/icon.png";
import logoText from "@/assets/logo/text.png";
import { useState } from "react";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const toggle = () => {
    return setToggleDropdown((prev) => !prev);
  };
  return (
    <nav className="nav flex flex-wrap justify-around items-start sm:items-center py-5">
      <div className="logo flex justify-center items-center gap-3">
        <img src={logoIcon} alt="logo" width={75} height={75} />
        <img src={logoText} alt="logo" width={106} height={28} />
      </div>
      {/* Desktop Navigation */}
      <div className="nav-items md:flex hidden justify-center items-center gap-20 font-normal text-lg">
        <Link to={`/`} className="active">
          Home
        </Link>
        <Link to={`/about-us`}>About Us</Link>
        <Link to={`/roadmap`}>Roadmap</Link>
        <Link to={`/faqs`}>FAQs</Link>
        <Link to={`/contact-us`}>Contact Us</Link>
      </div>
      <div className="connect-wallet md:flex hidden font-semibold">
        <Link
          to={`/connect-wallet`}
          className="gradient-a text-black transition-all"
        >
          Connect Wallet
        </Link>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden mobile-nav">
        <button className="nav-btn block" onClick={toggle} />
        {toggleDropdown ? (
          <div className="dropdown flex flex-wrap flex-1 flex-col justify-center align-middle items-center gap-10">
            <div className="mobile-nav-items flex flex-wrap flex-col justify-center items-center gap-3">
              <Link to={`/`} className="active">
                Home
              </Link>
              <Link to={`/about-us`}>About Us</Link>
              <Link to={`/roadmap`}>Roadmap</Link>
              <Link to={`/faqs`}>FAQs</Link>
              <Link to={`/contact-us`}>Contact Us</Link>
            </div>
            <div className="connect-wallet">
              <Link
                to={`/connect-wallet`}
                className="gradient-a text-black transition-all"
              >
                Connect Wallet
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
