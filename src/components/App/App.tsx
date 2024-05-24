import './App.css'
import '../../fonts/fonts.css'

import doubleQuote from '../../assets/double-quote.svg'
import { Accordion } from '../Accordion/Accordion'
import { CTA } from '../CTA/CTA'
import { FAQ } from '../FAQ/FAQ'
import { Features } from '../Features/Features'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Hero } from '../Hero/Hero'
import { Logos } from '../Logos/Logos'
import { Navigation } from '../Navigation/Navigation'
import { Page } from '../Page/Page'
import { Pricing } from '../Pricing/Pricing'
import { Testimonial } from '../Testimonial/Testimonial'
import { Video } from '../Video/Video'

export function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Logos />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={doubleQuote}
          alt="double quote"
          className="testimonial__quotes"
        />
      </Testimonial>
      <Features />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={doubleQuote}
          alt="double quote"
          className="testimonial__quotes"
        />
      </Testimonial>
      <Video />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={doubleQuote}
          alt="double quote"
          className="testimonial__quotes"
        />
      </Testimonial>
      <Pricing />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={doubleQuote}
          alt="double quote"
          className="testimonial__quotes"
        />
      </Testimonial>
      <FAQ>
        <Accordion />
      </FAQ>
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={doubleQuote}
          alt="double quote"
          className="testimonial__quotes"
        />
      </Testimonial>
      <CTA />
      <Footer />
    </Page>
  )
}
