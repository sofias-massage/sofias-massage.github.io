import React from "react"
import { Section, Title, SubTitle } from "./elements"
import GoogleMap from "./google-map"
import styles from './about-me.module.css'

const AboutText = () => (
  <article className={styles.article}>
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
  </article>
)

const AboutMe = () => (
  <Section>
    <Title>Om mig</Title>
    <div className={styles.container}>
      <AboutText />
      <GoogleMap />
    </div>
  </Section>
)

export default AboutMe
