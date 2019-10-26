import React from "react"
import styled from "@emotion/styled"
import { BokaDirekt } from "./boka-direkt"
const image = require("../images/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg")

const HeaderStyle = styled.header`
    background: url('${image}');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    box-sizing: border-box;
    height: 99.2rem;
    max-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    margin-bottom: 4rem;
    div {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `

const Container = styled.article`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10rem;
  svg {
    height: 1em;
    width: auto;
    font-size: inherit;
    margin-bottom: 2rem;
  }

  @media (max-width: 1024px) {
    max-width: 75%;    
  }

  @media (max-width: 680px) {
    max-width: 100%;
    font-size: 7rem;
  }
`

const Divider = styled.div`
  height: 6px;
  background-color: #379683;
`

const Logo = () => (
  <svg width="271px" height="104px" viewBox="0 0 271 104">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <text
        fontFamily="Georgia"
        fontSize="52"
        fontWeight="normal"
        letterSpacing="1.8"
        fill="#323232"
      >
        <tspan x="38.4271484" y="48">
          SOFIAS
        </tspan>
      </text>
      <text
        fontFamily="Georgia"
        fontSize="21"
        fontWeight="normal"
        letterSpacing="14.8"
        fill="#323232"
      >
        <tspan x="38.1199219" y="99">
          MASSAGE
        </tspan>
      </text>
      <rect fill="#379683" x="0" y="63" width="271" height="5"></rect>
    </g>
  </svg>
)

const Header = () => (
  <HeaderStyle>
    <Container>
      <Logo />
      <BokaDirekt.Green />
    </Container>
    <Divider />
  </HeaderStyle>
)

export default Header
