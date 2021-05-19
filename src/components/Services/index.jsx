import React from 'react'
import Icon1 from '../../images/solidworks.jpg'
import Icon2 from '../../images/catia.jpg'
import Video1 from '../../videos/Final assembly_Trim.mp4'
import Video2 from '../../videos/Assembly3.mp4'
import { CourseContainer, VideoBg, CourseH1, Subtitle } from './ServiceElements'

const Services = () => {
    return (
        <>
            <CourseContainer id="services">
                <CourseH1>SolidWorks</CourseH1>
                <VideoBg autoPlay loop muted src={Video1} type='video/mp4' />
            </CourseContainer>
            <CourseContainer id="services">
                <CourseH1>Catia</CourseH1>
                <VideoBg autoPlay loop muted src={Video2} type='video/mp4' />
            </CourseContainer>
        </>
    )
}

export default Services
