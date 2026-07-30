import React from "react";
import { Section, Title, SubTitle } from "./elements";
import GoogleMap from "./google-map";
import styles from "./about-me.module.css";
import omMigImg from "../images/om-mig.jpg";

const AboutText = () => (
  <article className={styles.article}>
    <p>
      <strong>Sofias Massage</strong> startades 2018 då jag utbildade mig till{" "}
      <em>Certifierad Massageterapeut</em>. Sedan dess har jag vidareutbilda mig
      och försöker hela tiden att utvecklas för att kunna hjälpa dig på bästa
      sätt. Bland annat har jag utbildat mig i <em>käkledsbehandling</em>,{" "}
      <em>medicinsk laser</em>, <em>Gua Sha</em> m.m.
    </p>

    <p>
      Jag tror på att kroppen berättar när något inte står rätt till.
      Spänningar, stelhet och värk är ofta kroppens sätt att signalera att den
      behöver återhämtning och omtanke. Därför ser jag alltid till hela dig och
      inte bara området som gör ont.
    </p>

    <p>
      Jag erbjuder djupgående och personligt anpassade behandlingar för att
      förbättra din hälsa och välbefinnande. Hos mig står du alltid i fokus och
      varje behandling anpassas efter dina behov, önskemål och hur just din
      kropp känns för dagen.
    </p>

    <p>
      Jag strävar alltid efter att du ska känna dig trygg och att du ska gå
      härifrån med en lättare känsla i både kropp och sinne.
    </p>
  </article>
);

const AboutMe = () => (
  <Section>
    <Title>Om mig</Title>
    <img
      className={styles.profileImage}
      src={omMigImg.src}
      alt="Sofia Levholm"
    />
    <div className={styles.container}>
      <AboutText />
      <GoogleMap />
    </div>
  </Section>
);

export default AboutMe;
