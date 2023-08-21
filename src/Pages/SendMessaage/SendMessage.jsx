import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SendMessage.css";
export default function SendMessage() {
  return (
    <>
      <div class="callback-form callback-services">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Request a Free Quote</h2>
                <span>LET'S TALK</span>
              </div>
            </div>
            <div class="col-md-12">
              <div class="contact-form">
                <form id="contact" action="" method="post">
                  <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          class="form-control"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="border-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <p className="formtext">
                        Submitting your details indicates your acceptance that
                        IYKONS will process your personal data in line with
                        UK-GDPR. Normally you could expect a reply from IYKONS
                        within two business days.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
