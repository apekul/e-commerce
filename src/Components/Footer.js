import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineGooglePlus,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
      <div id="Contact">
        <div className="Container">
          <div className="ContactContainer">
            {/* Help */}
            <div className="ContactGroup">
              <div>
                <BsQuestionCircleFill className="ContactIcon" />
                <p>Help and Contact</p>
              </div>
              <ul className="ContactListGroup ContactPadding">
                <li>
                  <a href="/">See all help topics</a>
                </li>
                <li>
                  <a href="/">Track you parcel</a>
                </li>
                <li>
                  <a href="/">Delivery information</a>
                </li>
                <li>
                  <a href="/">Report an order</a>
                </li>
                <li>
                  <a href="/">Report a damaged item</a>
                </li>
              </ul>
            </div>
            {/* Learn */}
            <div className="ContactGroup">
              <div>
                <p>Learn</p>
              </div>
              <ul className="ContactListGroup">
                <li>
                  <a href="/">News</a>
                </li>
                <li>
                  <a href="/">History</a>
                </li>
                <li>
                  <a href="/">Ecology</a>
                </li>
                <li>
                  <a href="/">Partners</a>
                </li>
              </ul>
            </div>

            {/* NewsLetter/Socials */}
            <div className="ContactGroup">
              <div>
                <p>NewsLetter</p>
              </div>
              <div>
                <input
                  type="email"
                  id="newsletter_input"
                  placeholder="you@email.com"
                />
                <button id="newsletter_button">Subscribe</button>
              </div>
              <div className="ContactGroup">
                <div>
                  <p>Socials</p>
                </div>
                <ul id="socialGroup">
                  <li>
                    <a href="/">
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiFillTwitterCircle />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiOutlineGooglePlus />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerInfo">
        <div className="Container">
          <div className="footerGroup">
            <p>Copyright © 2023. All rights are reserved</p>
            <p>
              Designed by{" "}
              <a
                target="_blank"
                href="https://github.com/apekul"
                rel="noreferrer"
              >
                apekul
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
