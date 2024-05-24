import './PricingTile.css'

import arrowDark from '../../assets/arrow.svg'
import check from '../../assets/check.png'
import arrowLight from '../../assets/colored-arrow.svg'

interface PricingTileProps {
  planPeriod: '/ monthly' | '/ yearly'
  tile: {
    darkMode: boolean
    plan: string
    planIcon: string
    planPrice?: number
    bullets: string[]
    callToAction: string
  }
}

export function PricingTile({ planPeriod, tile }: PricingTileProps) {
  const dark = tile.darkMode ? 'dark' : ''
  const price =
    planPeriod === '/ monthly'
      ? `$ ${tile.planPrice}`
      : tile.planPrice
        ? `$ ${tile.planPrice * 12 * 0.75}`
        : ''

  return (
    <div className={`pricing-tile ${dark}`}>
      <div className="plan-section">
        <img src={tile.planIcon} alt="plan" className="plan-section__icon" />
        <p className="text-small plan-section__plan">{tile.plan}</p>
      </div>

      <div className="pricing-section">
        <h2 className={`h2 pricing-section__price ${dark}`}>
          {tile.planPrice ? price : 'Custom'}
        </h2>
        <p className={`text-reg pricing-section__period ${dark}`}>
          {tile.planPrice && planPeriod}
        </p>
      </div>

      <div className="bullets-section">
        {tile.bullets.map((bullet, i) => (
          <div key={i} className="pricing-bullet">
            <img src={check} alt="check" className="pricing-bullet__check" />
            <p className={`text-reg pricing-bullet__text ${dark}`}>{bullet}</p>
          </div>
        ))}
      </div>

      <button className={`pricing-cta ${dark}`}>
        <span className="text-med pricing-cta__text">{tile.callToAction}</span>
        <img
          src={tile.darkMode ? arrowDark : arrowLight}
          alt="arrow"
          className={`pricing-cta__icon ${dark}`}
        />
      </button>

      {tile.planPrice && (
        <p className="text-tiny pricing-tile__no-card">
          No credit card required
        </p>
      )}
    </div>
  )
}
