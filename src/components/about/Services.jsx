import React from 'react'

import { services } from '../../data/services'
import Container from '../ui/Container'
import Section from '../ui/Section'

const Services = () => {

  return (
    <Section sectionTitle="What I Do">
      <ul className='grid grid-cols-2 grid-rows-2 gap-5'>
        {services.map((item, index) => (
          <Container key={index} className=''>
            <div className='flex items-start gap-4 p-7'>
              <img src={item.icon} alt='Service Image' className='mt-2'/>
              <div>
                <h4 className='h4 mb-1'>{item.service}</h4>
                <p className='text-light-gray text-sm'>{item.description}</p>
              </div>
            </div>
          </Container>
        ))}
      </ul>
    </Section>
  )
}

export default Services
