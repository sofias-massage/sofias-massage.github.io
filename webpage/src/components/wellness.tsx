import React from "react"
import { Section } from "./elements"
import styled from "@emotion/styled"
const actiway = require("../images/actiway.jpg")
const minFriskvard = require("../images/mf-banner-inv-250x100.jpg")

interface Item {
  image: string
  link: string
  alt: string
}

const items: Item[] = [
  {
    image: minFriskvard,
    link: "https://minfriskvard.se/",
    alt: "Friskvård genom Min Friskvård",
  },
  {
    image: actiway,
    link: "https://www.actiway.se",
    alt: "Friskvård genom ActiWay",
  },
]

const Image = styled.img`
  width: 250px;
  margin: 0;
`

const Link = styled.a`
  margin: 0 1rem;
  @media (max-width: 571px) {
    &:first-child {
      margin-bottom: 1rem;
    }
  }
`

const FlexSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Wellness = () => (
  <FlexSection>
    {items.map(item => (
      <Link href={item.link}>
        <Image key={item.link} src={item.image} alt={item.alt} />
      </Link>
    ))}
  </FlexSection>
)

export default Wellness
