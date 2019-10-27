import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import Layout from "./layout"
import { Section, Title } from "./elements"
import { BokaDirekt } from "./boka-direkt"
import Logo from "./logo"
import { Link } from "gatsby"

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
`

interface TreatmentLayoutProps {
  children: ReactNode;
  title: string;
  image: string;
  imageAlt: string;
}

const TreatmentLayout = ({ children, title, image, imageAlt }: TreatmentLayoutProps) => (
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
      </Section>
    </Layout>
  </>
)

export default TreatmentLayout
