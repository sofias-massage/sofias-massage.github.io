import React from "react"
import styled from "@emotion/styled"
import { Section, Title, SubTitle } from "./elements"
import GoogleMap from "./google-map"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

const Article = styled.article`
  width: 45%;

  @media (max-width: 800px) {
    width: 95%;
    max-width: 20rem;
  }
`

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
`

const AboutText = () => (
  <Article>
    <SubTitle>Startades 2018</SubTitle>
    <p>
      Du är varmt välkommen in till mig på Sofias Massage! Sofias Massage
      startade 2018. Via GGI (Göteborgs gymnastiska insitut) har jag gått min
      utbildning till certifierad massageterapeut. Jag är utbildad inom svensk
      klassisk massage och triggerpunktsbehandling. Mitt mål är att hjälpa dig
      till bättre hälsa och välbefinnande.
    </p>
    <p>
      Jag är även utbildad i fransförlängning, lash lift och färg av fransar och
      bryn. Hos mig är du som kund i fokus och jag anpassar alltid
      behandlingarna efter dina behov och önskemål. Massagen kan till exempel
      fokusera på avslappning eller ett specifikt område på kroppen. Du väljer!
      Jag är här för dig.
    </p>
  </Article>
)

const AboutMe = () => (
  <Section>
    <Title>Om mig</Title>
    <Container>
      <AboutText />
      <GoogleMap />
    </Container>
  </Section>
)

export default AboutMe
