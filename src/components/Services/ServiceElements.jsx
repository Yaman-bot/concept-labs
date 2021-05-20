import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #fff;
  background: #010606;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1220px;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const Heading1 = styled.h1`
  margin-top: 160px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #01bf71;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Heading2 = styled.h1`
  margin-top:160px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #01bf71;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const VideoBg = styled.video`
  width: 555px;
  height: 100%;
  grid-area: col2;
  align-self:start;
  justify-self:center;
  padding-left:40px;

   @media screen and (max-width: 480px) {
    display:none;
  }
`

export const AccContainer = styled.div`
  
`

export const SubHeading = styled.h1`
  margin-bottom:10px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #01bf71;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const CSWALink = styled.a`
  color: #fff;
  text-decoration: underline;
  font-size: 18px;
  color: purple;
  margin-left:4px;
  margin-right:4px;
  &:hover {
    transition: 0.3s ease-in-out;
  }
`