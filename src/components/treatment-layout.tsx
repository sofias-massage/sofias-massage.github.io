import React, { ReactNode } from "react"
import Layout from "./layout"
import { Section, Title } from "./elements"
import { BokaDirekt } from "./boka-direkt"
import Logo from "./logo"
import { treatments } from "./treatments"
import Link from "next/link"
import styles from './treatment-layout.module.css'

const TreatmentLinks = ({ currentTreatment }: { currentTreatment: string }) => {
  const links = treatments.filter(
    treatment => treatment.name !== currentTreatment
  )
  return (
    <article className={styles.linksContainer}>
      <nav>
        <h4>Andra behandlingar</h4>
        <ul className={styles.treatmentList}>
          {links.map(link => (
            <li key={link.link}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  )
}

interface TreatmentLayoutProps {
  children: ReactNode
  title: string
  image: string
  imageAlt: string
}

const TreatmentLayout = ({
  children,
  title,
  image,
  imageAlt,
}: TreatmentLayoutProps) => (
  <>
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
    </header>
    <Layout>
      <Section>
        <img className={styles.image} src={image} alt={imageAlt} />
        <Title>{title}</Title>
        {children}
        <BokaDirekt.Green />
        <TreatmentLinks currentTreatment={title} />
      </Section>
    </Layout>
  </>
)

export default TreatmentLayout
