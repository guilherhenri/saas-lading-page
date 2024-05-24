import './Video.css'

import BRgradient from '../../assets/vid-bottom-right-gradient.png'
import TLgradient from '../../assets/vid-top-left-gradient.png'
import videoImg from '../../assets/video.png'

export function Video() {
  return (
    <section className="video">
      <div className="video__container">
        <img src={videoImg} alt="video" className="video__image" />
        <button className="video__play"></button>
        <div className="video__overlay" />
      </div>

      <img
        src={TLgradient}
        alt="gradient"
        className="video__gradient video__tl-gradient"
      />
      <img
        src={BRgradient}
        alt="gradient"
        className="video__gradient video__br-gradient"
      />
    </section>
  )
}
