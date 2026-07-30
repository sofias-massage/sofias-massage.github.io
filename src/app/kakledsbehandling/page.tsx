import React from "react";
import TreatmentLayout from "@/components/treatment-layout";
import { kakledsbehandlingImg } from "@/components/treatments";
import { getMetaData } from "@/util/getMetaData";

const description =
  "Minska spänningar, öka rörligheten och lindra smärta i käken. När käkens muskeler blir överansträngda kan det leda till olika besvär.";

export const metadata = getMetaData({
  title: "Käkledsbehandling",
  description,
});

const KakledsbehandlingPage = () => (
  <TreatmentLayout
    title="Käkledsbehandling"
    image={kakledsbehandlingImg.src}
    imageAlt="Käkledsbehandling"
  >
    <p>
      <strong>
        Minska spänningar, öka rörligheten och lindra smärta i käken
      </strong>
    </p>
    <p>
      När käkens muskeler blir överansträngda kan det leda till olika besvär,
      som tillexempel:
    </p>
    <ul>
      <li>Smärta i käken</li>
      <li>Svårigeter att gapa eller tugga</li>
      <li>Knäppningar i käkleden</li>
      <li>Spänninshuvudvärk</li>
      <li>Sömnsvårigheter</li>
      <li>Smärta i nacken</li>
    </ul>
    <p>
      Vid en käkledsbehanling masseras och töjs käkens muskler, både utvändigt
      och inne i munnen.
    </p>
  </TreatmentLayout>
);

export default KakledsbehandlingPage;
