import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/TechnologyandInnovation.css";
import about1 from "../image/image/Tech1.png";
import about2 from "../image/image/Tech2.png";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
import { Link } from "react-router-dom";
//import video from "../image/Video/Tech.mp4";
export default function TechnologyandInnovation() {
  return (
    <>
      <Header />

      {/*<section className="imagerow">
        <div className="page-head2 header-text">
          <video autoPlay muted loop id="bg-video">
            <source src={video} type="video/mp4" />
            {/* Add additional source elements for other video formats }
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Technology & Innovation</h1>
              </div>
            </div>
          </div>
        </div>
  </section>*/}
      <div class="page-head2 header-text">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>Technology & Innovation</h1>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <section className="body">
        <div class="card1">
          <img src={about1} class="card1-img" alt="" />
          <div class="card1-body">
            <h3 class="card1-title">Bespoke Application Development</h3>
            <p class="card1-sub-title"></p>
            <p class="card1-info">
              We have a complete framework of IT services which can deliver Apps
              and solutions designed to drive efficiency and add value to your
              business. We manage projects through the mobile, web, embedded and
              cloud technologies, immaterial of their size; along with mobile
              solutions that enhance the user experience. Whether you have any
              existing mobile solutions or are looking to develop a completely
              new one, we can help you with our expert review. Our developers
              focus on all dimensions of the solution with user interface,
              cross-platform coverage, scalability & interoperability, security
              & compliance and accelerated delivery.
              <br />
            </p>
            <p class="card1-info">
              With our expertise in multiple domains, our team of analysts will
              guide you in analysing your application concept and assess it from
              the aspects of:
            </p>
            <ul class="card1-ultext">
              <li>Feasibility</li>
              <li>Technological complication</li>
              <li>Platform and device compatibility</li>
              <li>Market potential and competitiveness</li>
              <li>Budget</li>
              <li>Code reuse</li>
              <li>Backend functionality reuse</li>
              <li>UI/UX compatibility</li>
            </ul>
          </div>
        </div>

        <div class="card1">
          <img src={about2} class="card1-img" alt="" />
          <div class="card1-body">
            <h3 class="card1-title">Fintech Services And Solutions</h3>
            <p class="card1-sub-title"></p>
            <p class="card1-info">
              As one of the leading software development companies, IYKONS has
              earned the trust of fintech startups as well as other enterprises
              for their back-end Fintech needs by providing sturdy and secure
              digital fintech products powered by cutting-edge technology. We
              provide fintech app development services and dedicated teams to a
              wide range of enterprises, including fintech start-ups,
              traditional financial, banking operations and non-financial firms.
              Our deep expertise and breadth of experience assure on-time
              delivery of next-generation fintech products.
            </p>
            <Link to="/Fintech">
              <button class="card1-btn1">
                Learn More about IYKONS Fintech
              </button>
            </Link>
          </div>
        </div>
      </section>

      <SendMessage />
      <Footer />
    </>
  );
}
