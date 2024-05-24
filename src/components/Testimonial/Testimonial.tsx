import './Testimonial.css'

export function Testimonial({ children }: { children: JSX.Element[] }) {
  return (
    <section className="testimonial">
      <div className="testimonial__container">{children}</div>
    </section>
  )
}
