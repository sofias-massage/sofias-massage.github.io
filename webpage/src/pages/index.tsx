import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Treatments from "../components/treatments"
import Companies from "../components/companies"

const IndexPage = () => (
  <Layout>
    <SEO title="Hem" />
    <Treatments />
    <Companies />
  </Layout>
)

export default IndexPage
