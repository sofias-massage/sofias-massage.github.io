import React from "react"
import { Title, Section, SubTitle } from "./elements"
import image from "../images/foretagsmassage.jpg"
import Image from "next/image"
import styles from './companies.module.css'

const Companies = () => (
  <Section>
    <Title>Företagsmassage</Title>
    <div className={styles.container}>
      <Image src={image} alt="Massagebehandling" />
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
          <a href="mailto:sofia@levholm.se">höra av dig</a> till mig för
          mer information.
        </p>
      </div>
    </div>
  </Section>
)

export default Companies
