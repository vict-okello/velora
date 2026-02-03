import React from 'react'
import Hero from "./Hero"
import About from "./About"
import Service from "./Service"
import Testimonial from "./Testimonial"
import Blog from "./Blog"
import MapSection from "./MapSection"

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <MapSection />
      <Blog />
    </div>
  )
}

export default Home

