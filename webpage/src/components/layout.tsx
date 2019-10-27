/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "@emotion/styled"
import { ReactNode } from "react"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
