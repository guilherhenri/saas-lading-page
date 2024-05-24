import './Pricing.css'

import { useState } from 'react'

import { pricingData } from '../../utils/constants'
import { PricingTile } from '../PricingTile/PricingTile'

export function Pricing() {
  const [planPeriod, setPlanPeriod] = useState<'/ monthly' | '/ yearly'>(
    '/ monthly',
  )

  const planPeriodToggle = () => {
    planPeriod === '/ monthly'
      ? setPlanPeriod('/ yearly')
      : setPlanPeriod('/ monthly')
  }

  return (
    <section className="pricing">
      <div className="pricing__heading-section">
        <h3 className="h3 pricing__heading">Pricing & Plans</h3>
        <p className="text-reg pricing__subheading">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next lading page.
        </p>
      </div>
      <div className="pricing__billing-section">
        <p className="text-reg pricing__period-text">Monthly</p>
        <label htmlFor="toggle" className="toggle">
          <input type="checkbox" className="toggle__input" id="toggle" />
          <span className="toggle__circle" onClick={planPeriodToggle} />
        </label>
        <p className="text-med pricing__period-text">Yearly</p>
        <span className="text-small toggle__savings">Save 25%</span>
      </div>
      <div className="pricing__tile-section">
        {pricingData.map((tile, i) => (
          <PricingTile key={i} tile={tile} planPeriod={planPeriod} />
        ))}
      </div>
    </section>
  )
}
