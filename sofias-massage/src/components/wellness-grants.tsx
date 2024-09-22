import React from "react"
import { Section } from "./elements"
import styled from "@emotion/styled"
const epassi = require("../images/Epassi-Logo-Primary-Color-RGB-3.png")
const swish = require("../images/Swish-Logo-Primary-PNG.png")

interface Item {
  image: string
  link: string
  alt: string
  text?: string
}

const items: Item[] = [
  {
    image: epassi,
    link: "https://www.epassi.se/sv/",
    alt: "Friskvård genom Epassi",
  },
  {
    image: epassi,
    link: "https://www.swish.nu",
    alt: "Betala med Swish",
    text: "Endast betalning via Swish",
  },
]

const Image = styled.img`
  width: 250px;
  margin: 0;
`

const Link = styled.a`
  padding: 0 1rem;
  &:first-child {
    border-right: 1px solid rgba(0,0,0,.8);
  }
  @media (max-width: 571px) {
    &:first-child {
      padding-bottom: 0.5rem;
      border-right: none;
      border-bottom: 1px solid rgba(0,0,0,.8);
    }
    &:not(:first-child) {
      padding-top: 0.5rem;
    }
  }
`

const FlexSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const WellnessGrants = () => (
  <FlexSection>
    {items.map(item => (
      <Link href={item.link}>
        <Image key={item.link} src={item.image} alt={item.alt} />
        {item.text && <p>{item.text}</p>}
      </Link>
    ))}
  </FlexSection>
)

export default WellnessGrants
