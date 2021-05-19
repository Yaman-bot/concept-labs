import React from 'react'
import Icon1 from '../../images/solidworks.jpg'
import Icon2 from '../../images/catia.jpg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServiceElements'

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>Our courses</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Solidworks</ServicesH2>
            <ServicesP>Learn Solidworks under expertise with practical applications.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Catia</ServicesH2>
            <ServicesP>Learn Catia under expertise with practical applications.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
