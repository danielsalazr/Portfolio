import React from 'react'
import Presentation from './Presentation'
import Skills from './Skills'

const Container = ( children ) => {
  return (
    <main className="main-"> 
    {/* "container" */}
      <Presentation />
      <Skills />
    </main>
  )
}

export default Container
