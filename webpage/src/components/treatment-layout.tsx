import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import Layout from "./layout"
import { Section, Title } from "./elements"
import { BokaDirekt } from "./boka-direkt"
import Logo from "./logo"
import { Link } from "gatsby"
import { treatments } from "./treatments"

const Image = styled.img`
  width: 100%;
  height: 22rem;
  max-height: 38vh;
  border-radius: 0.4rem;
  object-fit: cover;
  margin-top: 1rem;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  a {
    text-decoration: none;
  }
`

const LinksContainer = styled.article`
  h4 {
    margin-bottom: 0.8rem;
  }
`

const TreatmentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  &,
  li {
    padding: 0;
    margin: 0;
  }
  li:not(:last-child) {
    margin-right: 0.4rem;
    &::after {
      content: ",";
    }
  }
  a {
    color: #379683;
  }
`

const TreatmentLinks = ({ currentTreatment }: { currentTreatment: string }) => {
  const links = treatments.filter(
    treatment => treatment.name !== currentTreatment
  )
  return (
    <LinksContainer>
      <nav>
        <h4>Andra behandlingar</h4>
        <TreatmentList>
          {links.map(link => (
            <li>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </TreatmentList>
      </nav>
    </LinksContainer>
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
    <Header>
      <Link to="/">
        <Logo />
      </Link>
    </Header>
    <Layout>
      <Section>
        <Image src={image} alt={imageAlt} />
        <Title>{title}</Title>
        {children}
        <BokaDirekt.Green />
        <TreatmentLinks currentTreatment={title} />
      </Section>
    </Layout>
  </>
)

export default TreatmentLayout
