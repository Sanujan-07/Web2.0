import React from "react";
import "../css/DigitalMarketing.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import about_1 from "../image/image/SearchEngineOptimization.jpg";
import about_2 from "../image/image/SearchEngineMarketing.jpg";
import about_3 from "../image/image/SocialMediaMarketing.jpg";
import about_4 from "../image/image/ConversionRateOptimization.jpg";
import about_5 from "../image/image/OnlineReputationManagement.jpg";
import about_6 from "../image/image/PAYEandCIS.jpg";
import about_7 from "../image/image/WebDeisgn.jpg";
import about_8 from "../image/image/Webdevelopment.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SendMessage from "../SendMessaage/SendMessage";
import video from "../Video/DgitalMarket.mp4";
export default function DigitalMarketing() {
  return (
    <>
      <Header />
      <section className="imagerow">
        <div className="page-head header-text">
          <video autoPlay muted loop id="bg-video">
            <source src={video} type="video/mp4" />
            {/* Add additional source elements for other video formats */}
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Digital Marketing & Branding</h1>
                <span>
                  As a website development company, Iykons provides a full suite
                  of digital marketing and branding services that will tell your
                  brand story effectively in this digital world. We create
                  eye-catching designs and quantifiable campaigns that connect
                  your brand with your target customers, increase online sales
                  and promote business success. Do you need assistance with
                  amazing content, SEO, PPC campaigns, SMM services, video
                  marketing, a complete digital marketing strategy, campaign, or
                  something else? Whatever you require, our specialised team of
                  professionals can assist you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="perant">
        <div className="body">
          <div class="container1">
            <div class="card">
              <div class="imgBx">
                <img src={about_1} alt="image 1" />
              </div>
              <div class="content">
                <h2 className="h2">Search Engine Optimization</h2>
                <p>
                  We design SEO campaigns that produce organic search traffic by
                  creating high-quality content and using off-page methods that
                  increase your site’s exposure in search results.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_2} alt="image 2" />
              </div>
              <div class="content">
                <h2 className="h2">Search Engine Marketing</h2>
                <p>
                  We create and manage sponsored campaigns through Google
                  AdWords, including the placement of ads in search results and
                  across the display network.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_3} alt="image 3" />
              </div>
              <div class="content">
                <h2 className="h2">Social Media Marketing</h2>
                <p>
                  Our social media marketing services include strategic
                  consulting, graphic design and implementation on platforms
                  like Facebook, Instagram, LinkedIn, Twitter, and Pinterest.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="imgBx">
                <img src={about_4} alt="image 4" />
              </div>
              <div class="content">
                <h2 className="h2">Conversion Rate Optimization</h2>
                <p>
                  We uncover obstacles in the user experience that may be
                  hindering additional conversions through user research. Make
                  the most of your current website traffic with our services.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_5} alt="image 5" />
              </div>
              <div class="content">
                <h2 className="h2">Online Reputation Management</h2>
                <p>
                  Whether it is an Enterprise, Corporate, or SME, a poor
                  reputation has a negative impact on revenue and brand. We have
                  assisted businesses of various sizes in building, maintaining
                  and defending their reputations and responding to claims.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_6} alt="image 6" />
              </div>
              <div class="content">
                <h2 className="h2">Pay Per Click </h2>
                <p>
                  Whatever the size or sector of your business, we can advise
                  you on the activities and tasks you need to complete to help
                  you achieve your objectives.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_7} alt="image 7" />
              </div>
              <div class="content">
                <h2 className="h2">Website Design</h2>
                <p>
                  A website is one of your organisation’s most significant
                  digital channels, so it must function well, look attractive,
                  and, most importantly, be indexable. Your website requires an
                  on-brand design that is customised to support and enhance the
                  customer journey. We can help you maximise the return from
                  your website.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="imgBx">
                <img src={about_8} alt="image 8" />
              </div>
              <div class="content">
                <h2 className="h2">Web Development</h2>
                <p>
                  Our web experts have vast experience designing online
                  applications using a wide range of web frameworks, programming
                  languages, and protocols. We can provide a one-stop shop to
                  handle all of your web development needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      <Footer />
    </>
  );
}
