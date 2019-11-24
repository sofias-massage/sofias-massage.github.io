import React from "react"
import styled from "@emotion/styled"
import { Title, Section, SubTitle } from "./elements"
const image = require("../images/foretagsmassage.jpg")

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  a {
    color: #379683;
  }

  div,
  img {
    width: 45%;
  }

  img {
    object-fit: cover;
    object-position: top;
    width: 45%;
    max-height: 24rem;
    height: auto;
    border-radius: 1.2rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    div,
    img {
      width: 95%;
      max-width: 20rem;
    }
  }
`

const Companies = () => (
  <Section>
    <Title>Företagsmassage</Title>
    <Container>
      <img src={image} alt="Massagebehandling" />
      <div>
        <SubTitle>
          Varför ska du och ditt företag investera i företagsmassage?
        </SubTitle>
        <p>
          Det är bevisat att massage minskar sjukskrivningar och förbättrar
          arbetsklimatet på din arbetsplats. Massage förebygger stress och värk
          i kroppen som man kan få till exempel av statiska arbetsställningar
          och tunga lyft.
        </p>
        <p>
          Jag kommer ut till ert företag med bänk, olja och allt som behövs. Det
          enda som ni behöver ordna är ett rum där vi kan vara. Massage är även
          en avdragsgill kostnads för företag.
        </p>
        <p>
          Varmt välkommen att{" "}
          <a href="mailto:sofia@sofiasmassage.nu">höra av dig</a> till mig för
          mer information.
        </p>
      </div>
    </Container>
  </Section>
)

export default Companies
