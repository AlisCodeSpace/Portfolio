import React from 'react'

const Section = ({ sectionTitle, children }) => {
  return (
    <section>
      <h3 className='h3 mb-4'>{sectionTitle}</h3>
      {children}
    </section>
  )
}

export default Section
