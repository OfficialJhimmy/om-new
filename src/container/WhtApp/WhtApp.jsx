import React from "react";
import "./WhtApp.css";
import { FcCheckmark } from "react-icons/fc";
import register from "../../assets/images/online-registration.png";
import prototype from "../../assets/images/prototype.png";
import upload from "../../assets/images/folder.png";
import approval from "../../assets/images/verified.png";
import Navbar from "../../component/Navigation/Navbar";
import Footer from "../../component/Footer/Footer";
import Accordion from "../../component/Accordion/Accordion";
import ButtonOthers from "../../component/Button/ButtonOthers";

const WhtApp = () => {
  return (
    <>
      <Navbar />
      <div className="whtapp__container">
        <div className="whtapp__top--content">
          <h2>A Step-by-Step Guide on how to use the OMA WHTAPP</h2>
            <a
              href="https://omappsng.com/jtbwht/wht/r/omapps/signin?"
              className="button__whtapp"
              target="_blank"
              rel="noreferrer"
            >
              Open OMA WHTAPP
            </a>
            </div>
        <div className="whtapp__wrapper">
          <div className="whatapp__first">
            <div className="whtapp__child--main">
              <div className="whtapp__icon">
                <img src={register} alt="icon" />
              </div>
              <div className="whtapp__content">
                <h3>STEP 1</h3>
                <h2>Registration</h2>
                <p>
                  <span>
                    1.
                    {/* <FcCheckmark className="whtapp__react--icon" /> */}
                  </span>
                  The WHTAPP is hosted on the Joint Tax Board (JTB) website. Go
                  to JTB Website (http://www.jtb.gov.ng)
                </p>
                <p>
                  <span>2.</span>
                  Click on WHT Portal on the Quick Links Menu. Click Register
                </p>
                <p>
                  <span>3.</span>
                  Fill in all registration requirements. NB: The first
                  registration you are making is that of your organization, so,
                  the details required will be that of the organization
                </p>
                <p>
                  <span>4.</span>
                  Click on Save.
                </p>
                <p>
                  <span>5.</span>
                  You can then log in as an administrator.
                </p>
                <p>
                  <span>6.</span>
                  The admin thereby creates the Business User.
                </p>
              </div>
            </div>
          </div>
          <div className="whatapp__first">
            <div className="whtapp__child--main">
              <div className="whtapp__icon">
                <img src={prototype} alt="icon" />
              </div>
              <div className="whtapp__content">
                <h3>STEP 2</h3>
                <h2>Creating Accounts</h2>
                <span>
                  There are two administrative accounts required to use the
                  WHTAPP:
                </span>
                <p>
                  <span>1.</span>
                  Business Admin: This is the person responsible for creating
                  the company's account on the app. So, at the point of
                  registration and adding up all details, the individual
                  responsible for initiating this is automatically accepted as
                  the Business Admin. He/she is also saddled with the
                  responsibility of creating other account users. The business
                  admin is also responsible for approving schedules uploaded and
                  making payments. He/she also stands as a check on schedules
                  uploaded. After vetting all that is uploaded, an instruction
                  can then be given for payment to be made using the payment
                  options available on the APP.
                </p>
                <p>
                  <span>2.</span>
                  Business User: This is the person responsible for uploading
                  schedules on the app. He ensures that all details are correct
                  and well placed on the template provided by the App for
                  uploads.
                </p>
              </div>
            </div>
          </div>
          <div className="whatapp__first">
            <div className="whtapp__child--main">
              <div className="whtapp__icon">
                <img src={upload} alt="icon" />
              </div>
              <div className="whtapp__content">
                <h3>STEP 3</h3>
                <h2>Upload a Schedule</h2>
                <p>
                  <span>1. </span>
                  Log in as a business user using the login details already
                  created.
                </p>
                <p>
                  <span>2. </span>
                  Click on upload remittances
                </p>
                <p>
                  <span>3. </span>
                  Click on download sample file
                </p>
                <p>
                  <span>4. </span>
                  An excel file will be downloaded showing the template
                  acceptable by the system.
                </p>
                <p>
                  <span>5. </span>
                  Fill in the schedule with your details and then save.
                </p>
                <p>
                  <span>6. </span>
                  Back to the upload remittances environment, click on upload a
                  file. Pick the file you prepared and follow the instructions,
                  Click on submit. Nb: The Business Admin immediately receives a
                  mail that a schedule has been uploaded awaiting approval
                </p>
              </div>
            </div>
          </div>
          <div className="whatapp__first">
            <div className="whtapp__child--main">
              <div className="whtapp__icon">
                <img src={approval} alt="icon" />
              </div>
              <div className="whtapp__content">
                <h3>STEP 4</h3>
                <h2>Approval</h2>
                <p>
                  <span>1. </span>
                  The Business Admin logs in and can then clicks on Approval.
                </p>
                <p>
                  <span>2. </span>
                  He review file uploaded.
                </p>
                <p>
                  <span>3. </span>
                  Then proceed to approve and generate RRR (Remita Retrieval
                  Reference) for the transaction He then makes payment based on
                  the payment option chosen.
                </p>
                <p>
                  <span>4. </span>
                  Go to the bank or online payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Accordion />
      <Footer />
    </>
  );
};

export default WhtApp;
