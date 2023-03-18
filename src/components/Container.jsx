import React from 'react'
import Presentation from './Presentation'
import Skills from './Skills'

const Container = ( children ) => {
  return (
    <section className="container">
      <Presentation />
      <Skills />
    </section>
  )
}

export default Container
