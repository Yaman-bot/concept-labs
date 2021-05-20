import React, { useState } from "react";
import styled from "styled-components";
import { Data1, Data2 } from "./Data"
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordionSection = styled.div`
    display:block;
    position:relative;
    height:100vh;
`
const Container = styled.div`
    background:#272727;
    top:30%;
    box-shadow:2px 10px 35px 1px rgba(153,153,153,0.3);
    width:100%;
    h1{
        padding:2rem;
        font-size:1.2rem;
    }

    span{
        margin-right:1.5rem;
    }
`
const UpperWrap = styled.div`
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    text-align:center;
    cursor:pointer;
`
const Wrap = styled.div`
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    text-align:center;
    cursor:pointer;
`
const DropDown = styled.div`
   background:#1c1c1c;
   color:#00ffb9;
   width: 100%;
   height:40px;
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   border-bottom:1px solid #00ffb9;
   border-top:1px solid #00ffb9;
`

const Accordion = (props) => {
    const [clicked, setClicked] = useState(false);

    const toggle = () => {
        setClicked(!clicked);
    }

    return (
        <>
            { props.first === true ?
                (
                    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
                        <AccordionSection>
                            <Container onClick={() => toggle()} >
                                <UpperWrap>
                                    <h1>Course Contents</h1>
                                    <span>{clicked ? <FiMinus /> : <FiPlus />}</span>
                                </UpperWrap>
                                {Data1.map((item, index) => {
                                    return (
                                        <>
                                            <Wrap key={index}>
                                                {clicked ? (
                                                    <DropDown>
                                                        <p>{item.answer}</p>
                                                    </DropDown>
                                                ) : null}
                                            </Wrap>
                                        </>
                                    )
                                })}
                            </Container>
                        </AccordionSection>
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
                        <AccordionSection>
                            <Container onClick={() => toggle()} >
                                <UpperWrap>
                                    <h1>Course Contents</h1>
                                    <span>{clicked ? <FiMinus /> : <FiPlus />}</span>
                                </UpperWrap>
                                {Data2.map((item, index) => {
                                    return (
                                        <>
                                            <Wrap key={index}>
                                                {clicked ? (
                                                    <DropDown>
                                                        <p>{item.answer}</p>
                                                    </DropDown>
                                                ) : null}
                                            </Wrap>
                                        </>
                                    )
                                })}
                            </Container>
                        </AccordionSection>
                    </IconContext.Provider>
                )}
        </>
    )

}

export default Accordion;