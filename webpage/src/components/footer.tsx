import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const FooterStyle = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  justify-content: space-between;
  background-color: #379683;
  color: white;
  position: relative;
  & > span {
    position: absolute;
    bottom: 0.4rem;
    left: 0;
    right: 0;
    text-align: center;
  }
  a {
    color: inherit;
  }
`

const ContactContainer = styled.div`
  flex: 1;
  min-width: 12rem;
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
    <a href="mailto:sofia@sofiasmassage.nu">sofia@sofiasmassage.nu</a>
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

const Footer = () => (
  <FooterStyle>
    <Email />
    <Phone />
    <Adress />
    <SocialMedia />
    <span>
      Copyright © {new Date().getFullYear()} Sofias Massage – Skapad av Anton
      Levholm
    </span>
  </FooterStyle>
)

export default Footer
