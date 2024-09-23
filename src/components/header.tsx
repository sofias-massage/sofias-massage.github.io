import React from "react"
import { BokaDirekt } from "./boka-direkt"
import Logo from "./logo"
import styles from './header.module.css'
import image from "../images/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg"

const Header = () => (
  <header className={styles.header} style={{ backgroundImage: `url('${image.src}')` }}>
    <article className={styles.container}>
      <Logo />
      <BokaDirekt.Green />
    </article>
    <div className={styles.divider} />
  </header>
)

export default Header
