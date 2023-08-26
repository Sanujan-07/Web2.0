import React from "react";

import "./BSC.css";
import about_1 from "../image/image/prepareacccount.jpg";
import about_2 from "../image/image/Bookkeeping.jpg";
import about_3 from "../image/image/financialproje.jpg";
import about_4 from "../image/image/selfevaluation.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
import video from "../image/Video/Tech.mp4";
export default function BusinesSupportConsultation() {
  return (
    <>
      <Header />

      <section className="imagerow">
        <div className="page-head4 header-text">
          <video autoPlay muted loop id="bg-video4">
            <source src={video} type="video/mp4" />
            {/* Add additional source elements for other video formats */}
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Busines Support & Consultation</h1>
                <span>
                  IYKONS’ consulting services help focus on your most
                  significant opportunities and challenges, i.e. operational,
                  strategic, digital marketing, etc We specialise in offering
                  our business support services to SMEs and help take their
                  business to the next level.
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
                <img src={about_1} alt="Image 1" />
              </div>
              <div class="content">
                <h2>Creating a Business</h2>
                <p>
                  IYKONS is an authorised Companies House formation agent. We
                  ensure that our corporate documentation is of the highest
                  quality, is always up to date, and is in accordance with
                  current regulations and legislation. We will assist you
                  throughout the entire company formation process. We also
                  supply a company address for a modest cost; provide assistance
                  in opening business bank accounts, start-up counselling, and
                  legal or regulatory information.IYKONS is an authorised
                  Companies House formation agent. We ensure that our corporate
                  documentation is of the highest quality, is always up to date,
                  and is in accordance with current regulations and legislation.
                  We will assist you throughout the entire company formation
                  process. We also supply a company address for a modest cost;
                  provide assistance in opening business bank accounts, start-up
                  counselling, and legal or regulatory information.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_2} alt="Image 2" />
              </div>
              <div class="content">
                <h2>Preparation of a Business Plan</h2>
                <p>
                  IYKONS can assist you in developing a successful business plan
                  for any purpose. A good business plan is much more than a tool
                  for raising capital. When utilized and updated on a regular
                  basis, it can provide:
                  <ul>
                    <li>
                      A framework that allows you to make sound decisions.
                    </li>
                    <li>A foundation for easily communicating ideas.</li>
                    <li>
                      A standard against which corporate performance can be
                      measured.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_3} alt="Image 3" />
              </div>
              <div class="content">
                <h2>Postal Service Applications</h2>
                <p>
                  Are you interested in purchasing a post office, or do you want
                  assistance with the Post Office application and evaluation
                  process in order to operate the Post Office you wish to
                  purchase? If so, our team of experts is here to help you out.
                  This includes completing your online Post Office Financial
                  Assessment application and developing a Business Plan within
                  the deadlines. This could also include collaborating,
                  communicating and coordinating with all involved parties.
                  Disputes and Representations in Business The IYKONS dispute
                  resolution team has extensive expertise in assisting business
                  clients in resolving many forms of commercial conflicts. To
                  resolve your business/partnership conflicts, we have
                  long-standing relationships with London City legal companies.
                  As a result, we have recovered millions of pounds for our
                  clients over the years. We can also assist you with mediation
                  and any other forms of alternative dispute resolution (ADR).
                </p>
              </div>
            </div>

            <div class="card">
              <div class="imgBx">
                <img src={about_4} alt="Image 4" />
              </div>
              <div class="content">
                <h2>Outsourced Business Support</h2>
                <p>
                  IYKONS is ready and able to be your dependable outsourcing
                  partner for SMEs’ HR, accounting, bookkeeping, payroll, and
                  tax return services. Outsourcing your business needs to us
                  will provide you more time to focus on building your company.
                  With our years of experience we can develop bespoke
                  outsourcing services to your specific requirements. Of course,
                  we also handle your company’s administrative needs and
                  guarantee a noticeable reduction in your operational costs due
                  to outsourcing.
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
