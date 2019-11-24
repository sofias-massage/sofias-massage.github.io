import React from "react"
import TreatmentLayout from "../components/treatment-layout"
import SEO from "../components/seo"
import { lashColorImg } from "../components/treatments"

const description =
  "För dig som vill framhäva dina fransar och bryn lite extra och slippa sminka dig. Färgen sitter i upp till 8 veckor."

const FargningAvFransarPage = () => (
  <TreatmentLayout
    title="Färgning av fransar och bryn"
    image={lashColorImg}
    imageAlt="Färgning av fransar och bryn"
  >
    <SEO title="Färgning av fransar och bryn" description={description} />
    <p>
      För dig som vill framhäva dina fransar och bryn lite extra och slippa
      sminka dig. Färgen sitter i upp till 8 veckor.
    </p>
  </TreatmentLayout>
)

export default FargningAvFransarPage
