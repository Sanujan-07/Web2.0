import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "./Icons/font-awesome/css/font-awesome.min.css";

import "./Icons/css/ionicons.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
export default function Home() {
  return (
    <>
      <Header />
      <section id="intro">
        <div className="intro-container">
          <div
            id="introCarousel"
            className="carousel  slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators" />
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{ backgroundImage: {} }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Business And Personal Finance</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facts" className="wow fadeIn">
        <div className="container">
          <header className="section-header">
            <div className="content-wrapper">
              <div className="text-content">
                <h2>
                  <p>
                    <h4>
                      IYCONNECT is a collaborative practice management platform
                      to manage the workflow, communicate with the team, and
                      deliver exceptional client work. IYCONNECT brings a total
                      transformation across the entire practice, allowing any
                      firm to maximize efficiencies, streamline processes and
                      optimize the scale.
                    </h4>
                  </p>
                </h2>
              </div>
            </div>
            <div className="facts-img"></div>
          </header>
        </div>
      </section>

      {/* #call-to-action */}

      <section id="skills">
        <div className="container">
          <header className="section-header">
            <h2>IYCONNECT – A FLEXIBLE SOLUTION FOR YOUR BUSINESS NEEDS</h2>
          </header>
        </div>
      </section>
      {/*==========================
Services Section
    ============================*/}

      <section id="servicesj">
        <div className="container">
          <header className="section-header wow fadeInUp">
            <h4></h4>
            <br />
          </header>

          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href=""></a>
              </h4>
              <p className="descriptionJ">
                <p>
                  <strong>
                    <br></br>
                  </strong>
                </p>
                <p>
                  Onswin is an independent business broker that offers a
                  comprehensive range of financial solutions to both individuals
                  and businesses. We take satisfaction in identifying the best
                  funding choices for every requirement, thanks to our
                  specialised knowledge and skills across the finance sector.
                </p>
                <ul>
                  <li>
                    We can assist you in locating the cheapest mortgage rates
                    for any type of buyer, whether it is a Buy to Let, a first
                    time buyer, or a re-mortgage. Onswin works with well-known
                    FCA-approved mortgage lenders and intermediaries. For
                    clarification, we do not offer mortgage advice or mortgage
                    brokerage however, we can handle all of the administrative
                    details prior to and during the mortgage application.
                  </li>
                  <li>
                    Our ability to lend commercially is boosted by our
                    membership of the National Association of Commercial Finance
                    Brokers (NACFB). Bridging loans, start-up loans, VAT loans,
                    commercial loans, commercial mortgages, asset finance, and
                    other services are available.
                  </li>
                  <li>
                    Being an NACFB Member broker ensures that consumers and
                    lenders are working with a professional expert who knows the
                    market and works to the highest standards.
                  </li>
                  <li>
                    In addition to this, we can also help you with income tax e
                    payment and income tax payment Services.
                  </li>
                  <li>
                    Onswin is an extension of the Iykons team that is dedicated
                    to providing administrative support for personal and
                    business mortgages.
                  </li>
                </ul>
                <p>
                  For more information about Onswin’s services and products,
                  please visit <a href="www.onswin.com">www.onswin.com</a>.
                </p>
                <p>
                  Onswin is authorised and regulated by the Financial Conduct
                  Authority (FCA) and accredited by the National Association of
                  Commercial Finance Brokers (NACFB). We are registered with the
                  Information Commissioners Office (ZB342147).
                </p>
              </p>
            </div>
          </div>

          {/*oneset */}

          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="" />
                <p>
                  <h6>RISE ABOVE WITH IYCONNECT!</h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SendMessage />
      <Footer />
    </>
  );
}
