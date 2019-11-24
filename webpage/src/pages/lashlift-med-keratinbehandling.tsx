import React from "react"
import TreatmentLayout from "../components/treatment-layout"
import SEO from "../components/seo"
import { lashLiftImg } from "../components/treatments"

const description =
  "Lash Lift är en franspermanent som lyfter och ger volym till dina fransar. By Bexter är ett utav de skonsammaste Lash Lift märkena på marknaden. Keratinbehandling ingår alltid i våra Lash Lift behandlingar."

const LashliftPage = () => (
  <TreatmentLayout
    title="Lashlift med keratinbehandling"
    image={lashLiftImg}
    imageAlt="Lashlift med keratinbehandling"
  >
    <SEO title="Lashlift med keratinbehandling" description={description} />
    <p>
      <strong>Vad är lashlift? Alla kanske inte vet det. </strong>
      Lash Lift är en franspermanent som lyfter och ger volym till dina fransar.
      <strong> By Bexter</strong> är ett utav de skonsammaste Lash Lift märkena
      på marknaden. Keratinbehandling ingår alltid i våra Lash Lift
      behandlingar.
    </p>
    <h4>Fördelarna med Lashlift med keratinbehandling:</h4>
    <ul>
      <li>Böjer dina fransar i en snygg naturlig böj</li>
      <li>Hållbart upp till 12 veckor</li>
      <li>Stärker och vårdar fransarna med vitaminer och mineraler</li>
      <li>
        Keratinet vårdar och stärker fransen med upp till 40% och gör fransen
        2-3% längre
      </li>
    </ul>
    <h4>Skötselråd vid lashlift</h4>
    <p>
      Använd inga starka ögonmakeup removers under <em>48 timmar</em>. Inga
      oljeprodukter får användas runt ögonen under det <em>första dygnet</em>.
      Man bör undvika att tvätta håret med schampo och balsam, bada bastu och
      utsätta fransarna för hög värme, samt gnugga fransarna under det första
      dygnet då det kan göra att franspermanenten släpper och fransarna återtar
      sin ursprungliga form. Skulle irritation uppstå, badda ögonen med kallt
      vatten.
    </p>
  </TreatmentLayout>
)

export default LashliftPage
