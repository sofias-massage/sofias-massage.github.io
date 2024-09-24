import React from "react"
import TreatmentLayout from "@/components/treatment-layout"
import { lashColorImg } from "@/components/treatments"
import { getMetaData } from "@/util/getMetaData";

const description =
  "För dig som vill framhäva dina fransar och bryn lite extra och slippa sminka dig. Färgen sitter i upp till 8 veckor."

export const metadata = getMetaData({ title: 'Färgning av fransar och bryn', description });

const FargningAvFransarPage = () => (
  <TreatmentLayout
    title="Färgning av fransar och bryn"
    image={lashColorImg.src}
    imageAlt="Färgning av fransar och bryn"
  >
    <p>
      För dig som vill framhäva dina fransar och bryn lite extra och slippa
      sminka dig. Färgen sitter i upp till 8 veckor.
    </p>
  </TreatmentLayout>
)

export default FargningAvFransarPage
