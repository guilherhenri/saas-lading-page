import './Footer.css'

import arrow from '../../assets/colored-arrow.svg'
import logo from '../../assets/logo.svg'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content-left">
          <div className="footer__company-container">
            <img src={logo} alt="icon" className="footer__logo" />
            <h2 className="footer__company">SmartNotes</h2>
          </div>
          <div className="footer__input-container">
            <input
              type="email"
              className="footer__input"
              placeholder="Enter your email"
            />
            <img src={arrow} alt="arrow" className="footer__input-icon" />
          </div>
        </div>
        <div className="footer__content-right">
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Product</p>
            <a href="#" className="text-small footer__link">
              About
            </a>
            <a href="#" className="text-small footer__link">
              Features
            </a>
            <a href="#" className="text-small footer__link">
              Pricing
            </a>
            <a href="#" className="text-small footer__link">
              Integrations
            </a>
            <a href="#" className="text-small footer__link">
              FAQs
            </a>
          </div>
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Company</p>
            <a href="#" className="text-small footer__link">
              Our Story
            </a>
            <a href="#" className="text-small footer__link">
              Team
            </a>
            <a href="#" className="text-small footer__link">
              Careers
            </a>
            <a href="#" className="text-small footer__link">
              Press
            </a>
            <a href="#" className="text-small footer__link">
              Contact Us
            </a>
          </div>
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Resources</p>
            <a href="#" className="text-small footer__link">
              Blog
            </a>
            <a href="#" className="text-small footer__link">
              Webinars
            </a>
            <a href="#" className="text-small footer__link">
              Case Studies
            </a>
            <a href="#" className="text-small footer__link">
              Templates
            </a>
            <a href="#" className="text-small footer__link">
              Help Center
            </a>
          </div>
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Legal</p>
            <a href="#" className="text-small footer__link">
              Terms of Service
            </a>
            <a href="#" className="text-small footer__link">
              Privacy Policy
            </a>
            <a href="#" className="text-small footer__link">
              Cookie Policy
            </a>
            <a href="#" className="text-small footer__link">
              Acceptable Uses
            </a>
            <a href="#" className="text-small footer__link">
              Refund Policy
            </a>
          </div>
        </div>
      </div>

      <div className="footer__banner">
        <p className="text-small footer__copyright">
          ©2024 SmartNotes. All Rights Reserved.
          <a href="#" className="underline">
            @guilherhenri
          </a>
        </p>

        <div className="footer__external-links">
          <button className="footer__external-link facebook"></button>
          <button className="footer__external-link linkedin"></button>
          <button className="footer__external-link twitter"></button>
          <button className="footer__external-link youtube"></button>
        </div>
      </div>
    </footer>
  )
}
