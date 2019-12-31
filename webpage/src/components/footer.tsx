import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import WellnessGrants from "./wellness-grants"

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 3rem 0.6rem 3rem;
  background-color: #379683;
  color: white;
  a {
    color: inherit;
  }
`

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  max-width: 80rem;
`

const ContactContainer = styled.div`
  flex-grow: 0;
  min-width: 12rem;
  max-width: 20rem;
  margin: 1rem 0;
  h4 {
    margin-bottom: 0.4rem;
  }
`

const IconList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 2.4rem;
  &,
  li {
    padding: 0;
    margin: 0;
    margin-right: 0.6rem;
  }
`

const Email = () => (
  <ContactContainer>
    <h4>Mailadress</h4>
    <a href="mailto:sofia@levholm.se">sofia@levholm.se</a>
  </ContactContainer>
)

const Phone = () => (
  <ContactContainer>
    <h4>Telefon</h4>
    <a href="tel:+46760658237">076 - 065 82 37</a>
  </ContactContainer>
)

const Adress = () => (
  <ContactContainer>
    <h4>Adress</h4>
    <span>Västra Gatan 72</span>
    <br />
    <span>442 31, Kungälv</span>
  </ContactContainer>
)

const SocialMedia = () => (
  <ContactContainer>
    <h4>Sociala medier</h4>
    <IconList>
      <li>
        <a href="https://www.facebook.com/sofiasmassage/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/sofiasmassage/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </IconList>
  </ContactContainer>
)

const CopyrightNote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.4rem;
  span {
    margin: 0 0.2rem;
  }
  .dot {
    background-color: white;
    height: 0.2rem;
    width: 0.2rem;
    border-radius: 50%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    .dot {
      display: none;
    }
  }
`

const Footer = () => (
  <>
    <WellnessGrants />
    <FooterStyle>
      <ContactWrapper>
        <Email />
        <Phone />
        <Adress />
        <SocialMedia />
      </ContactWrapper>
      <CopyrightNote>
        <span>Copyright © {new Date().getFullYear()} Sofias Massage</span>
        <span className="dot" />
        <span>
          Skapad av <a href="https://github.com/Levis92">Anton Levholm</a>
        </span>
      </CopyrightNote>
    </FooterStyle>
  </>
)

export default Footer
