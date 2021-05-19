import styled from 'styled-components'

export const CourseContainer = styled.div`
  height: 1000px;
  display: grid;
  grid-template-columns: auto auto auto;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const VideoBg = styled.video`
  width: 555px;
  height: 100%;
  grid-column-start: 4;
  align-self:center;
  justify-self:center;
  padding-left:40px;
`
export const CourseH1 = styled.h1`
  font-size: 4rem;
  color: #01bf71;
  margin-top:64px;
  margin-right:64px;
  justify-self:end;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 2rem;
  justify-self:center;
  margin-bottom: 64px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`
