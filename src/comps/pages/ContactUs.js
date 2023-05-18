import React from "react";
import "../../css/contact.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="container-contact">
        <ul className="box-contact">
          <li>
            <div className="contact-show">
              <i className="fa fa-phone-alt icon-contact" />
              <h4 className="contact-name">Phone</h4>
            </div>
            <div className="contact-info">
              <h5>0912-4616534</h5>
            </div>
          </li>
          <li>
            <div className="contact-show">
              <i className="fab fa-whatsapp icon-contact" />
              <h4 className="contact-name">Whatsapp</h4>
            </div>
            <div className="contact-info whats-info">
              <h5>0912-4616534</h5>
              <h5>+1(760)8580318</h5>
            </div>
          </li>
          <li>
            <div className="contact-show">
              <i className="fab fa-telegram icon-contact" />
              <h4 className="contact-name">Telegram</h4>
            </div>
            <div className="contact-info">
              <h5>Beh</h5>
            </div>
          </li>
          <li>
            <div className="contact-show">
              <i className="fab fa-instagram icon-contact" />
              <h4 className="contact-name">instagram</h4>
            </div>
            <div className="contact-info">
              <h5>Beh.Star</h5>
            </div>
          </li>
          <li>
            <div className="contact-show">
              <i className="fa fa-envelope-open icon-contact" />
              <h4 className="contact-name">Email</h4>
            </div>
            <div className="contact-info">
              <h5>rezaa1986@gmail.com</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
