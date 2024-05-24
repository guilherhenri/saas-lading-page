import './Navigation.css'

import arrow from '../../assets/arrow.svg'
import logo from '../../assets/logo.svg'

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__logo-section">
        <img src={logo} alt="logo" className="navigation__logo" />
        <h3 className="navigation__name">SmartNotes</h3>
      </div>
      <ul className="navigation__link-section">
        <a href="#" className="text-reg navigation__link">
          Features
        </a>
        <a href="#" className="text-reg navigation__link">
          Pricing
        </a>
        <a href="#" className="text-reg navigation__link">
          Support
        </a>
      </ul>
      <button className="text-reg navigation__cta">
        Get Started
        <img src={arrow} alt="arrow" className="navigation__arrow" />
      </button>
    </nav>
  )
}
