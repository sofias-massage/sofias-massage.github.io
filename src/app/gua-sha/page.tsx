import React from "react";
import TreatmentLayout from "@/components/treatment-layout";
import { guaShaImg } from "@/components/treatments";
import { getMetaData } from "@/util/getMetaData";

const description =
  'Gua Sha är en effektiv behandling för att minska på spänningar och inflammation. "Gua" betyder på kinesiska skrapa och "Sha" står för de märken som dyker upp under behandlingen.';

export const metadata = getMetaData({ title: "Gua Sha", description });

const GuaSha = () => (
  <TreatmentLayout title="Gua Sha" image={guaShaImg.src} imageAlt="Gua Sha">
    <p>
      Gua Sha är en effektiv behandling för att minska på spänningar och
      inflammation. I behandlingen används olika verktyg för att skrapa upp
      stagnationer/knutor och på så sätt hjälper man kroppen att rensa ut
      slaggprodukter och återläka området.
    </p>

    <p>
      "Gua" betyder på kinesiska skrapa och "Sha" står för de märken som dyker
      upp under behandlingen. Märkerna blir mörkare ju längre stagnationerna har
      suttit i just det området.
    </p>

    <p>
      För bästa resultat rekommenderas en kur på 4-6 behandlingar med 1-2
      veckors mellanrum.
    </p>

    <p>
      !Observera att det kan uppkomma märken på de behandlade området.
      Försvinner efter 2-4 dagar!
    </p>

    <p>
      Utför inte behandlingen vid graviditet, pacemaker, blodsjukdom, har eller
      nyligen haft blodpropp eller äter blodförtunnande medicin.
    </p>
  </TreatmentLayout>
);

export default GuaSha;
