import './Features.css'

import { features } from '../../utils/constants'

export function Features() {
  return (
    <section className="features">
      <div className="features__heading-container">
        <h2 className="h2 features__heading">
          Discover the power of{' '}
          <span className="h2 features__text-gradient">SmartNotes</span>
        </h2>
        <p className="text-reg features__subheading">
          SmartNotes is packed with innovative features designed to
          revolutionize the way you take notes, collaborate with others, and
          stay organized.
        </p>
      </div>

      <div className="features__feature-container">
        {features.map((feature, i) => (
          <div key={i} className={`feature ${feature.gridArea}`}>
            <img
              src={feature.image}
              alt={feature.heading}
              className="feature__icon"
            />
            <p className="text-large feature__heading">{feature.heading}</p>
            <p className="text-reg feature__description">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="features__overlay-gradient" />
    </section>
  )
}
