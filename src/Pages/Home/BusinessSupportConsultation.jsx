import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "./Icons/font-awesome/css/font-awesome.min.css";

import "./Icons/css/ionicons.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
export default function BusinesSupportConsultation() {
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
                    <h2>Business Support and Consultation</h2>
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
                      IYKONS’ consulting services help focus on your most
                      significant opportunities and challenges, i.e.
                      operational, strategic, digital,, marketing, etc We
                      specialise in offering our business support services to
                      SMEs and help take their business to the next level.
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
            <h2> </h2>
          </header>
        </div>
      </section>
      {/*==========================
Services Section
    ============================*/}

      <section id="servicej">
        <div className="container">
          <header className="section-header wow fadeInUp">
            <h4></h4>
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
                <a href="">Creating a Business</a>
              </h4>
              <p className="descriptionj">
                IYKONS is an authorised Companies House formation agent. We
                ensure that our corporate documentation is of the highest
                quality, is always up to date, and is in accordance with current
                regulations and legislation. We will assist you throughout the
                entire company formation process. We also supply a company
                address for a modest cost; provide assistance in opening
                business bank accounts, start-up counselling, and legal or
                regulatory information.
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
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Preparation of a Business Plan</a>
              </h4>
              <p className="descriptionj">
                <p>
                  IYKONS can assist you in developing a successful business plan
                  for any purpose. A good business plan is much more than a tool
                  for raising capital. When utilized and updated on a regular
                  basis, it can provide:
                </p>
                <ul>
                  <li>A framework that allows you to make sound decisions.</li>
                  <li>A foundation for easily communicating ideas.</li>
                  <li>
                    A standard against which corporate performance can be
                    measured.
                  </li>
                </ul>
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
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Postal Service Applications</a>
              </h4>
              <p className="descriptionj">
                Are you interested in purchasing a post office, or do you want
                assistance with the Post Office application and evaluation
                process in order to operate the Post Office you wish to
                purchase? If so, our team of experts is here to help you out.
                This includes completing your online Post Office Financial
                Assessment application and developing a Business Plan within the
                deadlines. This could also include collaborating, communicating
                and coordinating with all involved parties. Disputes and
                Representations in Business The IYKONS dispute resolution team
                has extensive expertise in assisting business clients in
                resolving many forms of commercial conflicts. To resolve your
                business/partnership conflicts, we have long-standing
                relationships with London City legal companies. As a result, we
                have recovered millions of pounds for our clients over the
                years. We can also assist you with mediation and any other forms
                of alternative dispute resolution (ADR).
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
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Outsourced Business Support Services</a>
              </h4>
              <p className="descriptionj">
                IYKONS is ready and able to be your dependable outsourcing
                partner for SMEs’ HR, accounting, bookkeeping, payroll, and tax
                return services. Outsourcing your business needs to us will
                provide you more time to focus on building your company. With
                our years of experience we can develop bespoke outsourcing
                services to your specific requirements. Of course, we also
                handle your company’s administrative needs and guarantee a
                noticeable reduction in your operational costs due to
                outsourcing.
              </p>
            </div>
          </div>

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

      <section id="servicesj">
        <div className="container">
          <header className="section-header wow fadeInUp">
            <h4></h4>
            <br />
          </header>

          <div className="row"></div>
        </div>
      </section>
      <SendMessage />
      <Footer />
    </>
  );
}
