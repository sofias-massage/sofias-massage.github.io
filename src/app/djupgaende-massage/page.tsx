import React from "react";
import TreatmentLayout from "@/components/treatment-layout";
import { massageImg } from "@/components/treatments";
import { getMetaData } from "@/util/getMetaData";

const description =
  "En djupgående och personligt anpassad massagebehandling. Varje behandling anpassas efter dina behov, önskemål och hur just din kropp känns för dagen.";

export const metadata = getMetaData({
  title: "Djupgående massage",
  description,
});

const DjupgaendeMassagePage = () => (
  <TreatmentLayout
    title="Djupgående massage"
    image={massageImg.src}
    imageAlt="Djupgående massage"
  >
    <p>
      <strong>En behandling som gör skillnad - anpassad helt efter dig</strong>
    </p>

    <p>
      En djupgående och personligt anpassad massagebehandling. Varje behandling
      anpassas efter dina behov, önskemål och hur just din kropp känns för
      dagen.
    </p>

    <p>
      En behandling som verkar på djupet, ökar blodcirkulation och släpper på
      spänningar. Regelbundna behandlingar leder till mindre värk och bättre
      rörlighet.
    </p>

    <p>
      Massagen frigör också kroppens egna "må bra-hormon" <em>oxytocin</em>{" "}
      vilket hjälper kroppen att slappna av på djupet och ökar ditt allmäna
      välbefinnande.
    </p>

    <p>
      Vid behov använder jag mig av <em>triggerpunkts</em>behandling för att
      effektivt lösa upp muskelknutor & spänningar.
    </p>
  </TreatmentLayout>
);

export default DjupgaendeMassagePage;
