import React, { useState } from "react";
import "./Accordion.css";
import question from '../../assets/icons/question.png'
import {MdExpandMore, MdExpandLess} from 'react-icons/md'
const dataCollection = [
  {
    question: "How do I register my company on the WHT Portal?",
    answer:
      "To start up with the process, you are required to go to the Joint Tax Board Portal and locate the WHT Portal menu on the site. Click on the register button to start up the registration process by inputting your company's details. ",
  },
  {
    question: "Who is a Business Admin?",
    answer:
      "The business admin oversees the whole activities, approves and makes payment for the schedules created. He/she (assigned person) approves uploads of files by the business user ensuring the accuracy and aptness of the file created.",
  },
  {
    question: "How many business admin can I have on the App?",
    answer:
      "You can have more than one business admin on the app depending on your organization, which makes the initial admin the Super Admin. ",
  },
  {
    question: " What does Business User do?",
    answer:
      " This category is created by the Business Admin to upload CSV files, that is excel files of payment to be made (indicating the details of taxpayers) and awaits the approval of the business admin. ",
  },
  {
    question: "Inability to log in?",
    answer:
      "The log in page at default shows the Business Admin. Kindly change to business user if you are not an admin to log in and log in with your right details. If issues persist, we will be glad to help out with the process, kindly contact us.",
  },
  {
    question: "Forgot password?",
    answer:
      "To reset your password, click on the Loss Password option on the page. A token will be sent to your mail showing the reset option. You can then enter a new password and continue with the process.  ",
  },
  {
    question: "Unable to download a sample file?",
    answer:
      "In order for you to create a schedule for your distributors, you will be required to download a sample file (CSV) from the portal which contains the template to follow in inputting your details. But in the case where you can't download this sample file, kindly reach out to us.",
  },
  {
    question: "I can’t upload the file I worked on?",
    answer:
      "Ensure you are uploading the right format file using the sample file given as any other file will not be accepted by the system.",
  },
  {
    question: "How do I change my email or phone number if need be?",
    answer:
      "Personal information is very sensitive and is treated with utmost care. For change of emails and phone number, kindly contact us. ",
  },
  {
    question: "Will I be able to print my receipt or invoice using this platform for withholding Tax (WHT)?",
    answer:
      "The platform provides you with two different ways to make payment for withholding tax. The online and bank payment. When using the online payment structure, you will get your printable receipt for money paid while using the bank payment structure, you can print your invoice which will be used for making payment in the bank. ",
  },
  {
    question: "What kind of browser is preferable when using the WHT Portal?",
    answer:
      "The WHT portal can work on any web browser but it is more advisable to use Google chrome or Firefox, because of its effectiveness and more modern internet experience that makes browsing easy.",
  },
  {
    question: "Can I use the App to pay other types of transaction on Withholding Tax?",
    answer:
      "Yes, you can use the app to pay for other types of transaction apart from commission",
  },
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      <div className="faq__container">
        <div className="faq__top--content">
          <img src={question} alt="Question mark" className="question__mark"/>
          <h2>Let's answer some of your questions about the O.M.Associates WHT App</h2>
        </div>
        <div className="accordion__faq">
          {dataCollection.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordion__faq-heading">
                <h3 className={accordion === index ? "active" : ""}>
                  {item.question}
                </h3>
                <div>
                  {accordion === index ? (
                    <MdExpandLess className="expand__icon"/>
                  ) : (
                    <MdExpandMore className="expand__icon"/>
                  )}
                </div>
              </div>
              <div>
                <p className={accordion === index ? "active" : "inactive"}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
