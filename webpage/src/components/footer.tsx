import React from "react"
import styled from "@emotion/styled"

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
  h4 {
    margin-bottom: 0.4rem;
  }
  a {
    color: inherit;
  }
  div {
    flex: 1;
    min-width: 12rem;
    margin: 1rem 0;
  }
`

const Footer = () => (
  <FooterStyle>
    <div>
      <h4>Mailadress</h4>
      <a href="mailto:sofia@sofiasmassage.nu">sofia@sofiasmassage.nu</a>
    </div>
    <div>
      <h4>Telefon</h4>
      <a href="tel:+46760658237">076 - 065 82 37</a>
    </div>
    <div>
      <h4>Adress</h4>
      <span>Västra Gatan 72</span>
      <br />
      <span>442 31, Kungälv</span>
    </div>
    <div>
      <h4>Sociala medier</h4>
    </div>
    <span>
      Copyright © {new Date().getFullYear()} Sofias Massage – Skapad av Anton
      Levholm
    </span>
  </FooterStyle>
)

export default Footer
