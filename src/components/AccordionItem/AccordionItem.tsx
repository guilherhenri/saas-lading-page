import './AccordionItem.css'

import arrow from '../../assets/colored-arrow.svg'
import arrowRight from '../../assets/colored-arrow-right.svg'

interface AccordionItemProps {
  faq: {
    id: number
    question: string
    answerHeading: string
    answer: string
  }
  openQuestion: number
  setOpenQuestion: React.Dispatch<React.SetStateAction<number>>
}

export function AccordionItem({
  faq,
  openQuestion,
  setOpenQuestion,
}: AccordionItemProps) {
  const open = openQuestion === faq.id

  const handleQuestionClick = () => {
    openQuestion === faq.id ? setOpenQuestion(-1) : setOpenQuestion(faq.id)
  }

  return (
    <div className="accordion-item">
      <button
        className="accordion-item__bar"
        type="button"
        onClick={handleQuestionClick}
      >
        <p className="text-med accordion-item__question">{faq.question}</p>
        <img
          src={arrow}
          alt="arrow"
          className="accordion-icon accordion-item__icon"
        />
      </button>

      <div className={`accordion-item__answer ${open ? 'visible' : ''}`}>
        <div className="accordion-item__heading-container">
          <p className="text-med accordion-item__answer-heading">
            {faq.answerHeading}
          </p>
          <img
            src={arrowRight}
            alt="arrow"
            className="accordion-icon accordion-item__answer-icon"
          />
        </div>
        <p className="text-reg accordion-item__answer-description">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}
