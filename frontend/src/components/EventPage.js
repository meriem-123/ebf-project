import React from 'react'

import Header from './Header'
import Event from './Event'


function EventPage() {
  return (
    <div>
     <Header logo={"static/images/logoB.png"} class1="nav-item colorB" class2="nav-item colorB" />
     <section className="part2 colorPY">
    <Event />
     </section>
      
    </div>
  )
}

export default EventPage
