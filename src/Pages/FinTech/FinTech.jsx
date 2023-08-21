import React from "react";
import "./FinTech.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
import image3 from "../image/imj.jpg";
const Fintech = () => {
  return (
    <>
      <Header />
      <div className="section">
        <h1>Fintech Services And Solutions</h1>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/glightbox.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/flatpickr.min.css" />

        <br></br>
        <hr></hr>
        <br></br>

        <div className="container">
          <p>
            As one of the leading software development companies, IYKONS has
            earned the trust of fintech startups as well as other enterprises
            for their back-end Fintech needs by providing sturdy and secure
            digital fintech products powered by cutting-edge technology. We
            provide fintech app development services and dedicated teams to a
            wide range of enterprises, including fintech start-ups, traditional
            financial, banking operations and non-financial firms. Our deep
            expertise and breadth of experience assure on-time delivery of
            next-generation fintech products.
          </p>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="row">
            <div className="col-lg-7 order-lg-2 mb-4 mb-lg-0">
              <img src={image3} alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-5 pe-lg-5">
              <div className="mb-5">
                <h1 className="text-black h1">
                  Straight-forward way of financing
                </h1>
              </div>
              <div className="d-flex mb-3 service-alt">
                <div>
                  <span className="bi-wallet-fill me-4"></span>
                </div>
                <div>
                  <h3>list of the fintech end-to-end solutions</h3>
                  <p>
                    <ul>
                      <li>Fintech Customization</li>
                      <li>Development of Fintech Mobile Apps</li>
                      <li>Web Design and Fintech UI/UX</li>
                      <li>Services for Digital Banking</li>
                      <li>Fintech Payment Methods</li>
                      <li>Fintech Data Analytics</li>
                      <li>Regulatory Compliance</li>
                      <li>Platform Development</li>
                      <li>Wallet Services</li>
                      <li>Business-specific wallets</li>
                      <li>Bill Payments Services</li>
                      <li>End-to-end Solution for Cross Border Remittances</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          {/*-----------------------------------*/}

          <div className="d-flex mb-3 service-alt">
            <div></div>
            <h1>Fintech and services</h1>
          </div>

          <div className="d-flex mb-3 service-alt">
            <div>
              <div></div>
              <span className="bi-pie-chart-fill me-4"></span>
            </div>
            <div>
              <p>
                From basic mobile payment apps to huge enterprise-grade
                financial platforms, we offer our in-depth fintech expertise,
                first-class specialists, and effective customer-oriented
                strategy to assist our clients on their journey to digital
                transformation. We create new or improve existing financial
                solutions for our customers based on our nearly 20 years of
                experience in banking and financial software development. We are
                prepared to do market research and provide an effective fintech
                solution for your company for the right financial management.
                <p></p>
                Fintech Payment Solution: We develop a variety of fintech
                payment solutions, including B2B payments, fintech digital
                payments, mobile payments, and P2P transfers for personal
                finance management, retail, and e-commerce, among others.
              </p>
            </div>
          </div>
          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-pie-chart-fill me-4"></span>
            </div>
            <div>
              <h3>Staff Augmentation</h3>
              <p>
                We have experienced fintech engineers who deal with a full stack
                of financial services technology. Our professional team can help
                with a range of tasks, including designing a full system from
                scratch, modifying an existing one, and performing integration
                work. Whatever you decide, we are always ready to get started
                right away.
              </p>
            </div>
          </div>

          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-pie-chart-fill me-4"></span>
            </div>
            <div>
              <h3>Financial Planning and Management</h3>
              <p>
                At IYKONS, we offer simple-to-implement and low-cost solutions
                for managing finances and working with any financial data
                including vendor payment management, customer management and so
                much more.
              </p>
            </div>
          </div>

          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-pie-chart-fill me-4"></span>
            </div>
            <div>
              <h3>End-to-end IT Solutions</h3>
              <p>
                We offer Enterprise IT Solutions to meet your business’s IT
                needs. We enable clients and partners worldwide with smarter
                technology that offers multichannel enterprise data and logic
                access. Our years of experience, strong connections with global
                IT leaders, and millions of global installations help clients
                adapt to new IT technology and capitalise on business
                opportunities. Our IT solutions cover all enterprise needs.
              </p>
            </div>
          </div>

          <div className="d-flex mb-3 service-alt">
            <div>
              <span className="bi-pie-chart-fill me-4"></span>
            </div>
            <div>
              <h3>ECommerce development</h3>
              <p>
                As an Ecommerce Solution Provider, our firm helps retail
                companies, distributors, manufacturers, and wholesalers promote
                customer happiness, increase sales, and grow their audiences by
                combining our knowledge in information technology and eCommerce
                development. With our eCommerce solutions and services.We strive
                to create technically flawless and appealing eCommerce solutions
                that will help your company stand out in the eCommerce market.
                Our eCommerce services have created several B2B and D2C
                platforms as well.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      <Footer />
    </>
  );
};

export default Fintech;
