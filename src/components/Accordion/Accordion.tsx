import './Accordion.css'

import { useState } from 'react'

import { faqItems } from '../../utils/constants'
import { AccordionItem } from '../AccordionItem/AccordionItem'

export function Accordion() {
  const [openQuestion, setOpenQuestion] = useState(-1)

  return (
    <div className="accordion">
      {faqItems.map((faq) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          setOpenQuestion={setOpenQuestion}
          openQuestion={openQuestion}
        />
      ))}
    </div>
  )
}
