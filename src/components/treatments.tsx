import React from "react"
import { Title, Button, Section } from "./elements"
import lashLiftImg from "../images/lash_lift.jpg"
import lashColorImg from "../images/farga_fransar_och_bryn.jpg"
import massageImg from "../images/klassisk_massage.jpg"
import lashExtensionImg from "../images/fransforlangning.jpg"
import Image, { StaticImageData } from "next/image"
import styles from './treatments.module.css'

export { lashLiftImg, lashColorImg, massageImg, lashExtensionImg }

interface TreatmentProps {
  name: string;
  shortText: string;
  image: StaticImageData;
  link: string;
}

export const treatments: TreatmentProps[] = [
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

const Treatment = ({ name, shortText, image, link }: TreatmentProps) => (
  <div className={styles.card}>
    <Image src={image} alt={name} />
    <h3 className={styles.cardTitle}>{name}</h3>
    <p>{shortText}</p>
    <Button href={link}>Läs mer</Button>
  </div>
)

const Treatments = () => (
  <Section>
    <Title>Behandlingar</Title>
    <div className={styles.cardContainer}>
      {treatments.map((treatment, index) => <Treatment key={index} {...treatment} />)}
    </div>
  </Section>
)

export default Treatments
