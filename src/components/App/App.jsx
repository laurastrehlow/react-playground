import AppHeader from '../AppHeader'
import Card from '../Card'
import React from 'react'

export default function App() {
  return (
    <>
      <AppHeader title="...another HP App" />
      <Card
        radius="20"
        color="black"
        question="Whats the name of Hagrids dog?"
        answer="Fang"
        showAnswer={true}
      />
      <Card
        radius="20"
        color="white"
        question="What was Harrys Patronus?"
        answer="A stag"
        showAnswer={true}
      />
      <Card
        radius="20"
        color="lightblue"
        question="Which actor played the character Cedric Diggory?"
        answer="Robert Pattinson (Batman, woohoo!)"
        showAnswer={false}
      />
    </>
  )
}
