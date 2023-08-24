import React from "react";

import "../css/Contactpage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Contactus() {
  return (
    <>
      <Header />
      <section id="contact" className="contact">
        <div className="container3" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 mt-3">
            <div className="col-lg-6">
              {/*London */}
              <iframe
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=14,%20Elm%20Road,%20Chessington,%20Surrey,%20KT9%201AW,%20United%20Kingdom.+(IYKONS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "384px" }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-lg-6">
              {/*India */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.702577427123!2d80.2500644!3d13.0545941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526747401de1a5%3A0x836a8cd352fbd5c2!2sIykons%20Business%20Services%20India%20Private%20Limited!5e0!3m2!1sen!2slk!4v1692883023834!5m2!1sen!2slk"
                style={{ border: 0, width: "100%", height: "384px" }}
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="row gy-4 mt-1">
            <div className="col-lg-6">
              {/*Australia */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.519052599945!2d151.10937877443604!3d-33.87628366024956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb526a150069%3A0x32a3bbe2655fc652!2sIykons%20Australia!5e0!3m2!1sen!2slk!4v1692883452597!5m2!1sen!2slk"
                style={{ border: 0, width: "100%", height: "384px" }}
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-lg-6">
              {/*Sri Lanka */}
              <iframe
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=14,%20Elm%20Road,%20Chessington,%20Surrey,%20KT9%201AW,%20United%20Kingdom.+(IYKONS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "384px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="row gt-4 mt-3">
            <h3>Contact us</h3>
            <div className="col-lg-12">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row gy-4">
                  <div className="col-lg-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
