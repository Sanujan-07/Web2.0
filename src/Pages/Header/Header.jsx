import React from "react";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../css/Header.css";
import headerLog from "../image/mainlogo.png";
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      {/* ======= Top Bar ======= */}
      <section id="topbar" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center ">
            <i className="bi bi-envelope d-flex align-items-center ms-4">
              <Link to="mailto:info@iykons.com" 
              style={{ padding: '10px', display: 'inline-block' }}
              >info@iykons.com</Link>
            </i>

            <i className="bi bi-phone d-flex align-items-center ms-4">
              <Link to="tel:+44 20 3598 2904"
              style={{ padding: '10px', display: 'inline-block' }}
              > +44 20 3598 2904</Link>
            </i>
          </div>

          <div className="social-links d-none d-md-flex" style={{ display: 'flex', gap: '10px' }}>
            <Link
              to="https://www.tiktok.com/@iykons.uk?lang=en"
              className="twitter"
              style={{ padding: '10px', display: 'inline-block' }}
            >
              <i className="bi bi-twitter" />
            </Link>
            <Link to="https://www.facebook.com/iykons/" className="facebook">
              <i className="bi bi-facebook" 
              style={{ padding: '10px', display: 'inline-block' }}/>
            </Link>
            <Link
              to="https://www.instagram.com/iykon.uk/"
              className="instagram"
              style={{ padding: '10px', display: 'inline-block' }}
            >
              <i className="bi bi-instagram" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/iykons-ltd/"
              className="linkedin"
              style={{ padding: '10px', display: 'inline-block' }}
            >
              <i className="bi bi-linkedin" />
            </Link>
          </div>
        </div>
      </section>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            {/*<h1>
            <a href="#">
              <span>IYKONS</span>
            </a>
  </h1>*/}
            <Link to="/">
              <img src={headerLog} alt="header logo" className="image" />
            </Link>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/" className="nav-link scrollto ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Aboutus" className="nav-link scrollto">
                  About
                </Link>
              </li>
              <li>{/*}
                <Link to="#" className="nav-link scrollto" href="#">
                  Blog
</Link>*/}
              </li>

              <li className="dropdown">
                <Link to="#">
                  <span>Services</span> <i className="bi bi-chevron-down" />
                </Link>
                <ul>
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
                <a href="#">
                  <span>Product</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <Link to="/FinTech">FinTech</Link>
                  </li>

                  <li>
                    <Link to="/IYConnect">IYCONNECT</Link>
                  </li>
                  <li>
                    <Link to="/Privacy">Privacy & Policy</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Contactus" className="nav-link scrollto">
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
}
