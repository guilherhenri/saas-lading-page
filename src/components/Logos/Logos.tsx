import './Logos.css'

import { logos } from '../../utils/constants'

export function Logos() {
  return (
    <section className="logos">
      <div className="logos__slide">
        {logos.map((img, i) => (
          <img key={i} src={img} alt="logo" className="logo" />
        ))}
        {logos.map((img, i) => (
          <img key={i} src={img} alt="logo" className="logo" />
        ))}
      </div>
      <div className="logos__overlay logos__overlay-left" />
      <div className="logos__overlay logos__overlay-right" />
    </section>
  )
}
