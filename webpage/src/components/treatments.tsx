import React from "react"
import styled from "@emotion/styled"

import { Title, Button, Section } from "./elements"

const lashLiftImg = require("../images/aleksandra-rupar-Wude2F3CMss-unsplash.jpg")
const lashColorImg = require("../images/sharon-mccutcheon-Y1TGc43qSQo-unsplash.jpg")
const massageImg = require("../images/toa-heftiba-a9pFSC8dTlo-unsplash.jpg")
const lashExtensionImg = require("../images/sharon-mccutcheon-y_VhmHCZ8FY-unsplash.jpg")

interface TreatmentProps {
  name: string;
  shortText: string;
  image: string;
  link: string;
}

const treatments: TreatmentProps[] = [
  {
    name: "Klassisk massage",
    shortText: "Den svenska klassiska massagen har många fördelar och är en behandling som verkar på djupet. Den ökar blodtillförseln till musklerna vilket hjälper musklerna att slappna av.",
    image: massageImg,
    link: "/klassisk-massage/"
  },
  {
    name: "Lashlift med keratinbehandling",
    shortText: "By Bexter är ett utav de skonsammaste Lash Lift märkena på marknaden. Keratinbehandling ingår alltid i våra Lash Lift behandlingar.",
    image: lashLiftImg,
    link: "/lashlift-med-keratinbehandling/"
  },
  {
    name: "Fransförlängning, singelfransar",
    shortText: "När man gör singelfransar så går det till så att man limmar fast en frans på varje egen frans. Första gången tar behandlingen ca två timmar. Fransens livslängd är ca 6 veckor.",
    image: lashExtensionImg,
    link: "/fransforlangning-singelfransar/"
  },
  {
    name: "Färgning av fransar och bryn",
    shortText: "För dig som vill framhäva dina fransar och bryn lite extra och slippa sminka dig.",
    image: lashColorImg,
    link: "/fargning-av-fransar-och-bryn/"
  }
]

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  width: 95%;
  max-width: 20rem;
  flex-shrink: 0;
  margin: 1rem;
  img {
    border-radius: 1.2rem;
    height: 14rem;
    object-fit: cover;
  }
`

const CardTitle = styled.h3`
  margin-bottom: 0.4rem;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -1rem 0 -1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

const Treatment = ({ name, shortText, image, link }: TreatmentProps) => (
  <Card>
    <img src={image} alt={name} />
    <CardTitle>{name}</CardTitle>
    <p>{shortText}</p>
    <Button to={link}>Läs mer</Button>
  </Card>
)

const Treatments = () => (
  <Section>
    <Title>Behandlingar</Title>
    <CardContainer>
      {treatments.map((treatment, index) => <Treatment key={index} {...treatment} />)}
    </CardContainer>
  </Section>
)

export default Treatments
