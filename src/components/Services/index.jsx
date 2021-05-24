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
                                        Certified Solidworks Associate Exam
                                        attempt that otherwise worth Rs.9427/- each.
                                    </li>
                                    <li>Students clearing CSWA, will get listed in Dassault Systemes directory as SolidWorks professionals(accepted across all industries)</li>
                                    <li>
                                        Get access to complete SW package including SW visualize,SW composer,SW electrical,
                                        E-drawings at minimal additional cost.
                                    </li>
                                    <li>
                                        <CSWALink href="https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design" target="_blank">
                                            Learn More
                                        </CSWALink>
                                    </li>
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
                                    <li>Industrial Projects Portfolio assistance</li>
                                    <li>Participation in Catia Designing Contest</li>
                                    <li>Interested Students to be awarded with free license of simulation softwares like ANSYS that otherwise worth more than ₹30,000.</li>
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
