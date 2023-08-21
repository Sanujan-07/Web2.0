import React from "react";
import "../css/AccountingandFinace.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import about_1 from "../image/image/prepareacccount.jpg";
import about_2 from "../image/image/Bookkeeping.jpg";
import about_3 from "../image/image/financialproje.jpg";
import about_4 from "../image/image/selfevaluation.jpg";
import about_5 from "../image/image/VAAT.jpg";
import about_6 from "../image/image/PAYEandCIS.jpg";
import about_7 from "../image/image/Pension.jpg";
import about_8 from "../image/image/CorporateIncomeTax.jpg";
import about_9 from "../image/image/MTD.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SendMessage from "../SendMessaage/SendMessage";
export default function AccountandFinance() {
  return (
    <>
      <Header />

      <div class="page-head1 header-text">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>Accounting & Finance</h1>
              <span>
                Account management gives an essential insight into the heart of
                the company, how it is operating, where it may be struggling,
                and even where the next big opportunity may lie. Management
                accounting is the activity of identifying, analysing,
                evaluating, and conveying essential financial information to
                decision-makers, in order to assist them in making the best
                strategic decisions for the business. We can prepare management
                accounts on a weekly, monthly, quarterly, bi-annual, or annual
                basis.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="perant">
        <div className="body">
          <div class="container1">
            <div class="card">
              <div class="imgBx">
                <img src={about_1} />
              </div>
              <div class="content">
                <h2>Preparation of Accounts</h2>
                <p>
                  Your company’s annual accounts, also known as statutory
                  accounts, are prepared at the conclusion of the fiscal year
                  using the company’s financial records. We can support you
                  through this whole process to ensure all procedures are
                  followed in line with HMRC guidelines.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_2} />
              </div>
              <div class="content">
                <h2>Bookkeeping</h2>
                <p>
                  Bookkeeping is the systematic recording and organisation of a
                  company’s financial activity. It is used to ensure the
                  accuracy of all transactions. Iykons’ specialised bookkeeping
                  team will assist you every step of the way.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_3} />
              </div>
              <div class="content">
                <h2>Financial Projection</h2>
                <p>
                  A financial forecast is an estimate of a company’s future
                  financial outcomes and is an essential aspect of the annual
                  budget process. Please contact our helpful team to obtain a
                  financial estimate for your company.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="imgBx">
                <img src={about_4} />
              </div>
              <div class="content">
                <h2>Self Evaluation</h2>
                <p>
                  HM Revenue and Customs (HMRC) employs Self Assessments to
                  collect Income Tax. Wages, pensions, and savings are typically
                  taxed automatically. Other income (including COVID-19 grants
                  and support payments) must however, be reported on a tax
                  return by individuals and businesses. But there is a simple
                  solution: By working with IYKONS you can sit back, relax, and
                  allow us to submit your self assessment and ensure that all
                  the correct procedures are followed.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_5} />
              </div>
              <div class="content">
                <h2>VAT</h2>
                <p>
                  The difference between your sales and purchase invoices is
                  usually the amount of VAT you pay to HM Revenue and Customs
                  (HMRC). Even if invoices have not been paid, you must record
                  this data and pay what you owe to HMRC. IYKONS handles all
                  aspects of VAT accounting.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_6} />
              </div>
              <div class="content">
                <h2>PAYE and CIS</h2>
                <p>
                  Pay As You Earn (PAYE) is the method by which most employees
                  in any industry pay their taxes and National Insurance. The
                  Construction Industry Scheme (CIS) is an HMRC attempt to
                  reduce tax fraud in the construction industry and protect
                  construction workers from bogus employment. It has been in
                  effect since 1971 and requires contractors to withhold 20% of
                  their subcontractors’ salary to cover tax and National
                  Insurance Contributions. Before beginning any work,
                  contractors and subcontractors must be CIS registered. Every
                  month, Iykons processes thousands of PAYE and CIS payments.
                  Hundreds of clients and thousands of their employees have
                  benefitted from our efficient and professional Iykons PAYE
                  processes.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_7} />
              </div>
              <div class="content">
                <h2>Pension</h2>
                <p>
                  Our team of experts will explain every detail of the pension
                  system to you. Furthermore, we also assist with establishing
                  NEST or other private pension accounts and saving for the
                  future in a tax-efficient manner.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_8} />
              </div>
              <div class="content">
                <h2>Corporate Income Tax</h2>
                <p>
                  Corporate tax is a tax on profits made by a limited company.
                  The HMRC does not send you an automatic bill for Corporation
                  Tax. You must instead pay and declare your tax. We help you
                  navigate this complex system smoothly and ensure that you are
                  always tax-ready.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="imgBx">
                <img src={about_9} />
              </div>
              <div class="content">
                <h2>MTD – Making Tax Digital</h2>
                <p>
                  Making Tax Digital is an important component of the
                  government’s goals to make it easier for people and businesses
                  to file their taxes and stay on top of their finances. IYKONS
                  is a leader in the digital accounting revolution. We have been
                  preparing our clients for the MTD changes for years. Don’t
                  hesitate to contact us if you want to be prepared for the MTD.
                  We are eager to assist.
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
