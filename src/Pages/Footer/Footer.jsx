import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>IYKONS</h3>
                  <p>
                    14, Elm Road, Chessington, Surrey, <br />
                    KT9 1AW, United Kingdom.
                    <br />
                    <br />
                    <strong>Phone:</strong> +44 20 3598 2904
                    <br />
                    <strong>Email:</strong> info@iykons.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.tiktok.com/@iykons.uk?lang=en"
                      className="twitter"
                    >
                      <i className="bx bxl-twitter" />
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/iykons/"
                      className="facebook"
                    >
                      <i className="bx bxl-facebook" />
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/iykon.uk/"
                      className="instagram"
                    >
                      <i className="bx bxl-instagram" />
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/company/iykons-ltd/"
                      className="linkedin"
                    >
                      <i className="bx bxl-linkedin" />
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.tiktok.com/@iykons.uk?lang=en"
                      className="google-plus"
                    >
                      <i className="bx bxl-tiktok" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/Aboutus">About us</Link>
                  </li>
                  {/*  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/">Services</Link>
                  </li>*/}
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/Contactus">Contact us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/AccountandFinance">Accounting & Finance</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/DigitalMarketing">
                      Digital Marketing & Branding
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/BusinessSupport">
                      Business Support & Consultancy
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/TechnologyandInnovation">
                      Technology & Innovation
                    </Link>
                  </li>

                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/BusinessPersonalFinance">
                      Business & Personal Finance
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p></p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright {new Date().getFullYear()}
            <strong>
              <span>
                <Link to="https://www.iykons.com"> IYKONS</Link>
              </span>
            </strong>{" "}
            <div>
              {" "}
              <Link to="/Privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="credits">
            {/* Designed by <a href="#">Iykons</a>*/}
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}
