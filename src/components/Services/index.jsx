import React from 'react'
import Video1 from '../../videos/Final assembly_Trim.mp4'
import Video2 from '../../videos/Assembly3.mp4'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, Heading1, Heading2, Subtitle, SubHeading, VideoBg, AccContainer, CSWALink } from './ServiceElements'
import Accordion from '../Accordion'

const Services = () => {
    return (
        <>
            <InfoContainer id="services">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <Heading1>SolidWorks</Heading1>
                            <Subtitle>Learn SolidWorks under expert guidance</Subtitle>
                            <SubHeading>Perks</SubHeading>
                            <Subtitle>
                                <ul>
                                    <li>Certificate to each student</li>
                                    <li>
                                        Top 5 students to be awarded with
                                        <CSWALink to=''>
                                            Certified Solidworks Associate Exam
                                        </CSWALink>
                                        attempt that otherwise worth Rs.9427/- each.
                                    </li>
                                    <li>Students clearing CSWA, will get internship opportunity with fixed stipend</li>
                                </ul>
                            </Subtitle>
                            <AccContainer>
                                <Accordion first={true} />
                            </AccContainer>
                        </Column1>
                        <Column2>
                            <VideoBg autoPlay loop muted src={Video1} type='video/mp4' />
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

            <InfoContainer id="services">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <Heading2>Catia</Heading2>
                            <Subtitle>Learn Catia under expert guidance</Subtitle>
                            <SubHeading>Perks</SubHeading>
                            <Subtitle>
                                <ul>
                                    <li>Certificate to each student</li>
                                    <li>
                                        Top 5 students to be awarded with
                                        <CSWALink to=''>
                                            Certified Solidworks Associate Exam
                                        </CSWALink>
                                        attempt that otherwise worth Rs.9427/- each.
                                    </li>
                                    <li>Students clearing CSWA, will get internship opportunity with fixed stipend</li>
                                </ul>
                            </Subtitle>
                            <AccContainer>
                                <Accordion first={false} />
                            </AccContainer>
                        </Column1>
                        <Column2>
                            <VideoBg autoPlay loop muted src={Video2} type='video/mp4' />
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Services
