import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Title = styled.h1`
  width: 100%;
  text-align: center;
`

export const SubTitle = styled.h3`
  margin-bottom: 0.8rem;
`

export const Button = styled(Link)`
  flex-grow: 0;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  outline: none;
  border-radius: 0.4rem;
  color: #379683;
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  border: 3px solid #379683;
  background: none;
  max-width: 10rem;
  text-decoration: none;
  text-align: center;
  &:hover, &:active {
    cursor: pointer;
    color: white;
    background-color: #379683;
  }
`

export const Section = styled.section`
  margin-bottom: 4rem;
`
