import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Treatments from "../components/treatments"
import Companies from "../components/companies"
import Header from "../components/header"
import AboutMe from "../components/about-me"

const IndexPage = () => (
  <>
    <Header />
    <Layout>
      <SEO title="Hem" />
      <Treatments />
      <Companies />
      <AboutMe />
    </Layout>
  </>
)

export default IndexPage
