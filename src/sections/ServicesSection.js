import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ServiceItems from '../components/ServiceItems'
export default function ServicesSection() {
  return (
    <div className='servicesSection'>
        <SectionTitle title={'SERVICES'}/>
        <ServiceItems/>
    </div>
  )
}
