import React from 'react'
import Head from './header'
import array from './array'
import Section from './section'

export default function App() {
  const arr = array.map((detail) => {
    return (
      <Section
        key={detail.id}
        image={detail.image}
        loca={detail.location}
        center={detail.place}
        day={detail.date}
        text={detail.content}
      />
    )
  })
  return (
    <div>
      <Head />
      {arr}
    </div>
  )
}