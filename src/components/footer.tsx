import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import WellnessGrants from "./wellness-grants"
import styles from './footer.module.css'

const Email = () => (
  <div className={styles.contactContainer}>
    <h4>Mailadress</h4>
    <a href="mailto:sofia@levholm.se">sofia@levholm.se</a>
  </div>
)

const Phone = () => (
  <div className={styles.contactContainer}>
    <h4>Telefon</h4>
    <a href="tel:+46760658237">076 - 065 82 37</a>
  </div>
)

const Adress = () => (
  <div className={styles.contactContainer}>
    <h4>Adress</h4>
    <span>Hantverkaregatan 4</span>
    <br />
    <span>463 30 Lilla Edet</span>
  </div>
)

const SocialMedia = () => (
  <div className={styles.contactContainer}>
    <h4>Sociala medier</h4>
    <ul className={styles.iconList}>
      <li>
        <a href="https://www.facebook.com/sofiasmassage/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/sofiasmassage/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </ul>
  </div>
)

const Footer = () => (
  <>
    <WellnessGrants />
    <footer className={styles.footer}>
      <div className={styles.contactWrapper}>
        <Email />
        <Phone />
        <Adress />
        <SocialMedia />
      </div>
      <div className={styles.copyrightNote}>
        <span>Copyright © {new Date().getFullYear()} Sofias Massage</span>
        <span className={styles.dot} />
        <span>
          Skapad av <a href="https://github.com/Levis92">Anton Levholm</a>
        </span>
      </div>
    </footer>
  </>
)

export default Footer
