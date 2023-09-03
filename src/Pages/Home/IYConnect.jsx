import React from "react";
import "./Iyconnect.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessaage/SendMessage";
import ClientManage from "../image/BSC.png";
import about1 from "../image/image/Tech1.png";

import Automation from "../image/Automation.png";
import Team from "../image/Team.png";
export default function Iyconnect() {
  return (
    <>
      <Header />
      <section className="imagerow1">
        <div class="page-head6 header-text">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1>IYCONNECT</h1>
                <span>
                  IYCONNECT is a collaborative practice management platform to
                  manage the workflow, communicate with the team, and deliver
                  exceptional client work. IYCONNECT brings a total
                  transformation across the entire practice, allowing any firm
                  to maximize efficiencies, streamline processes and optimize
                  the scale.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="body1">
        <div class="cardC">
          <img src={about1} class="cardC-img" alt="" />
          <h4 class="cardC-img-title ">
            IYCONNECT – A FLEXIBLE SOLUTION FOR YOUR BUSINESS NEEDS
          </h4>
          <div class="cardC-body">
            <h4 class="cardC-title">
              IYCONNECT – A FLEXIBLE SOLUTION FOR YOUR BUSINESS NEEDS
            </h4>
            <p class="cardC-sub-title"></p>

            <ul class="cardC-ultext">
              <li>
                <b>Visibility and Management</b> – Track wherever every job
                stands
              </li>
              <li>
                <b>Workflow Automation</b> – Standardize and automate common
                processes
              </li>
              <li>
                <b>Collaboration & Connectivity</b>– Unite the team together
              </li>

              <li>
                <b>Deliver Exceptional Standards </b>– Work delivered on target
              </li>
              <li>
                <b>Improve Satisfaction</b> – Build enduring client
                relationships by providing a first-class service
              </li>
              <li>Stay on top with IYCONNECT!</li>
            </ul>
          </div>
        </div>

        <div class="cardC">
          <img src={Team} class="cardC-img" alt="" />
          <h4 class="cardC-img-title ">TEAM MANAGEMENT</h4>
          <div class="cardC-body">
            <h4 class="cardC-title">TEAM MANAGEMENT</h4>
            <p class="cardC-sub-title"></p>
            <ul class="cardC-ultext">
              <li>View and optimize all the jobs going on across your team.</li>
              <li>
                Delegate work tasks and sub-tasks to the team so everyone knows
                their own responsibility.
              </li>
              <li>
                Real-time work-in-progress tracking – Track job progression,
                identify setbacks and ensure targets are met on time.
              </li>
              <li>
                A system-triggered notification through the dashboard and via
                email when new tasks are assigned to team members and remind the
                member about a missing and upcoming deadline.
              </li>
              <li>TSheets to track time against clients or jobs.</li>
              <li>
                Allocate resources, manage team efficiency, and achieve
                productivity.
              </li>
            </ul>
          </div>
        </div>
        <div class="cardC">
          <img src={Automation} class="cardC-img" alt="" />
          <h4 class="cardC-img-title ">AUTOMATION</h4>
          <div class="cardC-body">
            <h3 class="cardC-title">AUTOMATION</h3>
            <p class="cardC-sub-title"></p>
            <ul class="cardC-ultext">
              <li>
                Simplified client onboarding solution that creates automated
                engagement letters to clients with a unified e-signing option.
              </li>
              <li>
                Automated requests and reminders to chase clients for the
                information required, a painless data collection process.
              </li>
              <li>
                The system generates automated workflow based on the statutory
                deadlines; for different service categories such as Accounting,
                VAT, PAYE, CT and etc. It also enables users to set recurring
                work to repeat on automatic schedules.
              </li>
              <li>
                Files and documents are automatically stored and organized
                against clients and jobs.
              </li>
            </ul>
          </div>
        </div>
        <div class="cardC">
          <img src={ClientManage} class="cardC-img" alt="" />
          <h4 class="cardC-img-title ">CLIENT MANAGEMENT</h4>
          <div class="cardC-body">
            <h4 class="cardC-title">CLIENT MANAGEMENT</h4>
            <p class="cardC-sub-title"></p>

            <ul class="cardC-ultext">
              <li>
                Organize and manage growing Clients’ Profiles under one platform
              </li>
              <li>
                A stress-free client record management that stores the
                information gathered from the clients
              </li>
              <li>
                Easy to track customized categories of clients, prospects,
                one-offs, and onboarding in progress
              </li>
              <li>
                Communicate with clients in one streamlined workflow with tasks
                and document sharing.
              </li>
              <li>
                Store client communication in one place; shared history of
                emails, notes, tasks, and activity relating to any job or client
                in this central platform that everyone can access.{" "}
              </li>
              <li>
                Provide an overview of the client including services assigned,
                workflow history, stages of job update displays showing
                upcoming, completed, and outstanding services and invoices dues,
                and many more.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <SendMessage />
      <Footer />
    </>
  );
}
