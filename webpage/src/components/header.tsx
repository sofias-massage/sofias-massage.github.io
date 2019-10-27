import React from "react"
import styled from "@emotion/styled"
import { BokaDirekt } from "./boka-direkt"
import Logo from "./logo"
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
