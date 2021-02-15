import './Card.css'
import React from 'react'

export default function Card({ radius, color, question, answer, showAnswer }) {
  const styleObject = { color: color, borderRadius: radius + 'px' }
  return (
    <section style={styleObject} className="Card">
      <h2>{question}</h2>
      {showAnswer && <p>{answer}</p>}
    </section>
  )
}
