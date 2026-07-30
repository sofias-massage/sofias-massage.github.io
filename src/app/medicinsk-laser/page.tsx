import React from "react";
import TreatmentLayout from "@/components/treatment-layout";
import { medicinskLaserImg } from "@/components/treatments";
import { getMetaData } from "@/util/getMetaData";

const description =
  "Medicinsk laser är en skonsam, smärtfri & effektiv behandling som hjälper kroppens egna läkningsförmåga. Medicinsk laser används för att minska smärta, inflammation samt påskynda läkning.";

export const metadata = getMetaData({ title: "Medicinsk laser", description });

const MedicinskLaserPage = () => (
  <TreatmentLayout
    title="Medicinsk laser"
    image={medicinskLaserImg.src}
    imageAlt="Medicinsk laser"
  >
    <p>
      <strong>Minska smärta, inflammation och främja läkning</strong>
    </p>

    <p>
      Medicinsk laser är en skonsam, smärtfri & effektiv behandling som hjälper
      kroppens egna läkningsförmåga. Medicinsk laser används för att minska
      smärta, inflammation samt påskynda läkning.
    </p>

    <p>
      Kroppen är självläkande. Om du får ett sår så läker kroppen detta själv.
      På samma sätt så är kroppens celler förprogrammerade att läka till exempel
      inflammationer. Lasern tillför energi till cellen så att den kan hjälpa
      kroppen att läka på kortare tid.
    </p>

    <p>Exempel på vanliga besvär som kan behandlas med medicinsk laser:</p>

    <ul>
      <li>Muskel- & ledsmärta</li>
      <li>Inflammationer</li>
      <li>Rygg &-nackvärk</li>
      <li>Frozen shoulder</li>
      <li>Huvudvärk & migrän</li>
      <li>Sår & hudbesvär</li>
    </ul>

    <p>Antal behandlingar:</p>
    <p>
      <strong>Akuta besvär</strong>
    </p>
    <p>2-3 behandlingar med 5-6 dagars mellanrum.</p>

    <p>
      <strong>Långvariga besvär</strong>
    </p>
    <p>5-10 behandlingar med en veckas mellanrum</p>
  </TreatmentLayout>
);

export default MedicinskLaserPage;
