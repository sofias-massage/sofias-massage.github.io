import React from "react"
import TreatmentLayout from "../components/treatment-layout"
import SEO from "../components/seo"
import { massageImg } from "../components/treatments"

const description =
  "Behandligen anpassas efter dig och dina önskemål. Den svenska klassiska massagen har många fördelar och är en behandling som verkar på djupet. Den ökar blodtillförseln till musklerna vilket hjälper musklerna att slappna av."

const KlassiskMassagePage = () => (
  <TreatmentLayout
    title="Klassisk massage"
    image={massageImg}
    imageAlt="Klassisk massage"
  >
    <SEO title="Klassisk massage" description={description} />
    <p>
      Behandligen anpassas efter dig och dina önskemål. Den svenska klassiska
      massagen har många fördelar och är en behandling som verkar på djupet. Den
      ökar blodtillförseln till musklerna vilket hjälper musklerna att slappna
      av. Regelbunden behandling kommer att resultera i mindre spänningar och
      värk. Massagen motverkar även stress, ger förbättrad rörelseförmåga och
      ger ett ökat allmänt välbefinnande. Under massagen frisätter kroppen sitt
      må bra hormon oxytocin.
      <br />
      Vid behov använder jag mig av triggerpunkts behandling för att lösa upp
      muskelknutor.
    </p>
    <br />
    <h4>Mina behandlingar med klassisk massage</h4>
    <ul>
      <li>30 min Halvkropp (rygg, axlar och nacke)</li>
      <li>60 min Helkropp</li>
      <li>
        80 min Helkropp (för dig som vill fokusera extra på något område eller
        bara vill ha en längre massage)
      </li>
    </ul>
  </TreatmentLayout>
)

export default KlassiskMassagePage
