import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "./Data"
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordionSection = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    height:100vh;
    background:#fff;
`
const Container = styled.div`
    position:absolute;
    background:#272727;
    top:30%;
    box-shadow:2px 10px 35px 1px rgba(153,153,153,0.3);


    h1{
        padding:2rem;
        font-size:1rem;
    }

    span{
        margin-right:1.5rem;
    }
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
   height:50px;
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   border-bottom:1px solid #00ffb9;
   border-top:1px solid #00ffb9;
`

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = () => {
        setClicked(!clicked);
    }

    return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            <AccordionSection>
                <Container onClick={() => toggle()} >
                    <h1>Course Contents</h1>
                    <span>{clicked ? <FiMinus /> : <FiPlus />}</span>
                    {Data.map((item, index) => {
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
    )
}

export default Accordion;