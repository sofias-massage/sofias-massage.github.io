import React from "react"
import { ReactNode } from "react"
import "./layout.css"
import Footer from "./footer"
import styles from './layout.module.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
)

export default Layout
