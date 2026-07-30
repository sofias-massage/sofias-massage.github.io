import React from "react"
import { Title, Section, SubTitle } from "./elements"
import image from "../images/foretagsmassage.jpg"
import styles from './companies.module.css'

const Companies = () => (
  <Section>
    <Title>Företagsmassage</Title>
    <div className={styles.container}>
      <img src={image.src} alt="Massagebehandling" />
      <div>
        <SubTitle>Investera i era anställdas välmånde!</SubTitle>
        <p>Regelbunden massage förebygger stress och överbelastningsskador tillexempel från tunga lyft eller statiska arbetsställningar. När era anställda mår bättre förbätttras även arbetsklimatet och den allmäna trivlsen på arbetsplatsen.</p> 

        <p>Jag erbjuder massage på plats hos er, upplägget anpassas helt efter era behov och hur verksamheten ser ut.</p>

        <p>Massage är en avdragsgill kostad för företag enligt Skatteverkets riktlinjer för friskvård.</p>

        <p>Vill ni veta mer eller boka in ett första tillfälle? Varmt välkommen att <a href="mailto:sofia@levholm.se">höra av er</a>!</p>
      </div>
    </div>
  </Section>
)

export default Companies
