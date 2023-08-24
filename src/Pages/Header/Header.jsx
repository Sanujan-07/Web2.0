import React, { useState, useEffect } from "react";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../css/Header.css";
import headerLog from "../image/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [servicesMenuVisible, setServicesMenuVisible] = useState(false);
  const [productMenuVisible, setProductMenuVisible] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const toggleServicesMenu = () => {
    setServicesMenuVisible(!servicesMenuVisible);
  };

  const toggleProductMenu = () => {
    setProductMenuVisible(!productMenuVisible);
  };

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        const navbar = document.getElementById("navbar");
        const logo = document.getElementById("logo");
        if (navbar && logo) {
          navbar.style.padding = "30px 10px";
          logo.style.fontSize = "25px";
        }
      } else {
        const navbar = document.getElementById("navbar");
        const logo = document.getElementById("logo");
        if (navbar && logo) {
          navbar.style.padding = "80px 10px";
          logo.style.fontSize = "35px";
        }
      }
    };

    window.addEventListener("scroll", scrollFunction);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* ======= Top Bar ======= */}
      <section id="topbar" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center ">
            <i className="bi bi-envelope d-flex align-items-center ms-4">
              <Link to="mailto:info@iykons.com">info@iykons.com</Link>
            </i>

            <i className="bi bi-phone d-flex align-items-center ms-4">
              <Link to="tel:+44 20 3598 2904">+44 20 3598 2904</Link>
            </i>
          </div>

          <div className="social-links d-none d-md-flex">
            <a
              href="https://twitter.com/jey_raj"
              target="_blank"
              className="twitter"
            >
              <i className="bi bi-twitter" />
            </a>
            <a
              href="https://www.facebook.com/iykons/"
              target="_blank"
              className="facebook"
            >
              <i className="bi bi-facebook" />
            </a>
            <a
              href="https://www.instagram.com/iykon.uk/"
              className="instagram"
              target="_blank"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/iykons-ltd/"
              target="_blank"
              className="linkedin"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a
              href="https://www.tiktok.com/@iykons.uk?lang=en"
              target="_blank"
              className="tiktok"
            >
              <i className="bi bi-tiktok" />
            </a>
          </div>
        </div>
      </section>
      {/* ======= Header ======= */}
      <header
        id="header"
        className={`fixed-top d-flex align-items-center ${
          isResponsive ? "responsive" : ""
        }`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={headerLog} alt="header logo" className="image" />
            </Link>
          </div>
          <nav
            id="navbar"
            className={`navbar ${isResponsive ? "navbar-mobile" : ""}`}
          >
            <ul>
              <li>
                <Link to="/" className="nav-link scrollto ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Aboutus" className="nav-link scrollto">
                  About us
                </Link>
              </li>
              <li>
                {/*}
                <Link to="#" className="nav-link scrollto" href="#">
                  Blog
</Link>*/}
              </li>

              <li className="dropdown">
                <Link to="#" onClick={toggleServicesMenu}>
                  <span>Services</span> <i className="bi bi-chevron-down" />
                </Link>
                <ul className={servicesMenuVisible ? "active" : ""}>
                  <li>
                    <Link to="/AccountandFinance">Accounting & Finance</Link>
                  </li>

                  <li>
                    <Link to="/DigitalMarketing">
                      Digital Marketing & Branding
                    </Link>
                  </li>
                  <li>
                    <Link to="/BusinessSupport">
                      Business Support & Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link to="/TechnologyandInnovation">
                      Technology & Innovation
                    </Link>
                  </li>

                  <li>
                    <Link to="/BusinessPersonalFinance">
                      Business & Personal Finance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" onClick={toggleProductMenu}>
                  <span>Product</span> <i className="bi bi-chevron-down" />
                </Link>
                <ul className={productMenuVisible ? "active" : ""}>
                  <li>
                    <Link to="/IYConnect">IYCONNECT</Link>
                  </li>
                  <li>
                    <Link to="/Fintech">IYKONS Fintech</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Contactus" className="nav-link scrollto">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="mobile-nav-toggle" onClick={toggleResponsive}>
              <i className={`bi ${isResponsive ? "bi-x" : "bi-list"}`}></i>
            </button>
          </nav>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
