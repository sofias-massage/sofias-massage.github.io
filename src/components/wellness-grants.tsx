import React from "react"
import { Section } from "./elements"
import epassi from "../images/Epassi-Logo-Primary-Color-RGB-3.png"
import swish from "../images/Swish-Logo-Primary-PNG.png"
import styles from './wellness-grants.module.css'

interface Item {
  image: string
  link: string
  alt: string
  text?: string
}

const items: Item[] = [
  {
    image: epassi.src,
    link: "https://www.epassi.se/sv/",
    alt: "Friskvård genom Epassi",
  },
  {
    image: swish.src,
    link: "https://www.swish.nu",
    alt: "Betala med Swish",
    text: "Endast betalning via Swish",
  },
]

const WellnessGrants = () => (
  <Section className={styles.section}>
    {items.map(item => (
      <a key={item.link} className={styles.link} href={item.link}>
        <img className={styles.image} key={item.link} src={item.image} alt={item.alt} />
        {item.text && <p>{item.text}</p>}
      </a>
    ))}
  </Section>
)

export default WellnessGrants
