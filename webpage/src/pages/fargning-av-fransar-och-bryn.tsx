import React from "react"
import TreatmentLayout from "../components/treatment-layout"
import SEO from "../components/seo"
const lashColorImg = require("../images/sharon-mccutcheon-Y1TGc43qSQo-unsplash.jpg")

const FargningAvFransarPage = () => (
  <TreatmentLayout
    title="Färgning av fransar och bryn"
    image={lashColorImg}
    imageAlt="Färgning av fransar och bryn"
  >
    <SEO title="Färgning av fransar och bryn" />
    <p>
      För dig som vill framhäva dina fransar och bryn lite extra och slippa
      sminka dig. Färgen sitter i upp till 8 veckor.
    </p>
  </TreatmentLayout>
)

export default FargningAvFransarPage
