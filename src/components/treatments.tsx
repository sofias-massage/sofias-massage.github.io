import React from "react";
import { Title, Button, Section } from "./elements";
import lashLiftImg from "../images/lash_lift.jpg";
import lashColorImg from "../images/farga_fransar_och_bryn.jpg";
import massageImg from "../images/djupgaende_massage.jpg";
import lashExtensionImg from "../images/fransforlangning.jpg";
import medicinskLaserImg from "../images/medicinsk-laser.jpg";
import kakledsbehandlingImg from "../images/kakledsbehandling.jpg";
import guaShaImg from "../images/gua-sha.jpg";
import styles from "./treatments.module.css";

export {
  lashLiftImg,
  lashColorImg,
  massageImg,
  lashExtensionImg,
  medicinskLaserImg,
  kakledsbehandlingImg,
  guaShaImg,
};

interface TreatmentProps {
  name: string;
  shortText: string;
  image: string;
  link: string;
}

export const treatments: TreatmentProps[] = [
  {
    name: "Djupgående massage",
    shortText:
      "En djupgående och personligt anpassad massagebehandling efter dina behov och önskemål.",
    image: massageImg.src,
    link: "/djupgaende-massage/",
  },
  {
    name: "Medicinsk laser",
    shortText:
      "Medicinsk laser är en skonsam, smärtfri & effektiv behandling som hjälper kroppens egna läkningsförmåga.",
    image: medicinskLaserImg.src,
    link: "/medicinsk-laser/",
  },
  {
    name: "Käkledsbehandling",
    shortText: "Minska spänningar, öka rörligheten och lindra smärta i käken.",
    image: kakledsbehandlingImg.src,
    link: "/kakledsbehandling/",
  },
  {
    name: "Gua Sha",
    shortText:
      "Olika verktyg används till att skrapa upp stagnationer/knutor för att minska på spänningar och inflammation.",
    image: guaShaImg.src,
    link: "/gua-sha/",
  },
  /* {
    name: "Lashlift med keratinbehandling",
    shortText: "By Bexter är ett utav de skonsammaste Lash Lift märkena på marknaden. Keratinbehandling ingår alltid i våra Lash Lift behandlingar.",
    image: lashLiftImg.src,
    link: "/lashlift-med-keratinbehandling/"
  }, */
  /* {
    name: "Fransförlängning, singelfransar",
    shortText: "När man gör singelfransar så går det till så att man limmar fast en frans på varje egen frans. Första gången tar behandlingen ca två timmar. Fransens livslängd är ca 6 veckor.",
    image: lashExtensionImg.src,
    link: "/fransforlangning-singelfransar/"
  }, */
  /* {
    name: "Färgning av fransar och bryn",
    shortText: "För dig som vill framhäva dina fransar och bryn lite extra och slippa sminka dig.",
    image: lashColorImg.src,
    link: "/fargning-av-fransar-och-bryn/"
  } */
];

const Treatment = ({ name, shortText, image, link }: TreatmentProps) => (
  <div className={styles.card}>
    <img src={image} alt={name} />
    <h3 className={styles.cardTitle}>{name}</h3>
    <p>{shortText}</p>
    <Button href={link}>Läs mer</Button>
  </div>
);

const Treatments = () => (
  <Section>
    <Title>Behandlingar</Title>
    <div className={styles.cardContainer}>
      {treatments.map((treatment, index) => (
        <Treatment key={index} {...treatment} />
      ))}
    </div>
  </Section>
);

export default Treatments;
