import React from 'react'
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, GrMail } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink id='intern'>Careers</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>+91 77079 41187</FooterLink>
              <FooterLink to='/'>operations@conceptlab.co.in </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          {/* <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink href='https://instagram.com/_conceptlabs?utm_medium=copy_link'>Instagram</FooterLink>
              <FooterLink href='/'>Linkedin</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper> */}
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Concept Lab
            </SocialLogo>
            <WebsiteRights>Concept Lab © 2019 All rights reserved.</WebsiteRights>
            {/* <SocialIcons>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://instagram.com/_conceptlabs?utm_medium=copy_link' target='_blank' arial-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
