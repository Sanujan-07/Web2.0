import React from "react";
import "../css/Aboutus.css";
import myImage1 from "../image/iykons.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
export default function Aboutus() {
  return (
    <>
      <Header />
      <section className="imagerow">
        <div class="page-head3 header-text">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1>About us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="imagerow">
        <div className="page-head4 header-text">
          <video autoPlay muted loop id="bg-video4">
            <source src={video} type="video/mp4" />
            {/* Add additional source elements for other video formats }
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>About us</h1>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    */}
      <main id="main">
        {/*set one */}

        <section id="about" class="about mt-5">
          <div class="container" data-aos="fade-up">
            <div class="row position-relative">
              <div class="col-lg-7 about-img"></div>

              <div class="col-lg-7">
                <div class="our-story">
                  <h4>ABOUT US</h4>
                  <h3>OUR STORY:</h3>
                  <p>
                    Our excellent team of specialists can help you and your
                    business with your financial, IT, and business support
                    needs. Our mission is to meet the needs of SMEs from under
                    one roof. We relish the challenges of finding the best
                    solutions for you and thrive on making our clients happy. To
                    find out more about our services, please do not hesitate to
                    contact us online or at your nearest local office. We are
                    based in
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check-circle"></i> Chessington, Greater
                      London, United Kingdom
                    </li>
                    <li>
                      <i class="bi bi-check-circle"></i> Chennai, Tamil Nadu,
                      India
                    </li>
                    <li>
                      <i class="bi bi-check-circle"></i> Sydney, Australia
                    </li>
                  </ul>
                  <p>
                    IYKONS is an ACCA-accredited chartered accountancy firm. We
                    undertake all aspects of Accountancy and Tax work. Contact
                    IYKONS to find out about other bespoke solutions we offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*set two */}

        <div class="row mt-5 hi">
          <div class="d-md-flex post-entry-2 half">
            <div class="me-4 thumbnail">
              <img src={myImage1} alt="" class="img-fluid" />
            </div>
            <div class="ps-md-5 mt-4 mt-md-0">
              <h2 class="pt-5 display-4">Company History</h2>
              <p>
                Jey Founded IYKONS in 2008 after observing a significant gap in
                the SME market for a one-stop solution for striving business
                people. IYKONS organization and the team were designed to
                address any challenge a business person throws. We will solve it
                or find a way to solve it within the customer’s timeframe.
                Hundreds of IYKONS customers are out there to prove our
                problem-solving history.
              </p>
              <p>
                IYKONS manages 500+ portfolios in various sectors, from
                not-for-profit to aeronautical industries.
              </p>
              <p>What Makes Us the Best Choice?</p>
              <ul class="list">
                <li>Cost-effective fixed fee services.</li>
                <li>Wide range of industry expertise.</li>
                <li>Fully accredited and regulated.</li>
                <li>
                  Follow strict regulatory standards to safeguard our clients
                  from possible legal actions.
                </li>
                <li>Focused on customer needs and on-time delivery.</li>
                <li>
                  Personalized services with laser-focused attention to every
                  client.
                </li>
                <li>IYKONS – Outsourcing to excellence.</li>
              </ul>
            </div>
          </div>
        </div>

        {/*set three */}

        <section id="testimonials" class="testimonials section-bg mt-5 mb-5">
          <div class="container" data-aos="fade-up">
            <div class="section-header pt-5">
              <h1>IYKONS – Give Back</h1>
              <h2>
                “We make a living by what we get, but we make a life by what we
                give.” Winston Churchill.
              </h2>
              <p>
                At IYKONS, we believe in giving back to the community; this
                makes our work truly meaningful. IYKONS colleagues volunteer
                their valuable time to empower local charities and encourage
                communities to set up charitable entities every year. In
                addition, IYKONS staff members dedicate a significant amount of
                weekly time to help empower community organisations by helping
                them with legal, compliance and financial aspects. At the same
                time, IYKONS group of companies contribute thousands of pounds a
                year to established charities here and around the developing
                world through our charitable arm, Atchaya Foundation.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SendMessage />
      <Footer />
    </>
  );
}
