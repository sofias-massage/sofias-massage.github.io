import React from "react"
import TreatmentLayout from "@/components/treatment-layout"
import { lashExtensionImg } from "@/components/treatments"
import { getMetaData } from "@/util/getMetaData"

const description =
  "När man gör singelfransar så går det till så att man limmar fast en frans på varje egen frans. Du kan själv välja längd på fransarna. Och jag hjälper såklart till om du känner dig osäker och vill ha hjälp med att välja."

export const metadata = getMetaData({ title: 'Fransförlängning, singelfransar', description });

const FransforlangningPage = () => (
  <TreatmentLayout
    title="Fransförlängning, singelfransar"
    image={lashExtensionImg}
    imageAlt="Fransförlängning, singelfransar"
  >
    <p>
      När man gör singelfransar så går det till så att man limmar fast en frans
      på varje egen frans. Du kan själv välja längd på fransarna. Och jag
      hjälper såklart till om du känner dig osäker och vill ha hjälp med att
      välja.
    </p>
    <p>
      Första gången tar behandlingen ca två timmar. Dina egna fransars livslängd
      är ca 6 veckor. När en frans är mogen att ramla av följer syntetfransen
      med. Detta sköter kroppen helt på egen hand. Påfyllning av dina fransar
      rekommenderas var 3 till 4 veckor.
    </p>
    <h4>Att tänka på innan behandling</h4>
    <ul>
      <li>Kom utan smink</li>
      <li>Tvätta fransarna noga med en oljefri rengöring</li>
      <li>
        Kom i tid! Vid försening mer är 15 min avbokas din tid och du debiteras
        fullpris.
      </li>
    </ul>
    <p>
      Återbesök sker senast 4 veckor efter, annars behöver du boka ett nytt set.
    </p>
    <h4>Skötselråd vid fransförlängning</h4>
    <p>
      Exponera inte dina fransar för vatten förens 24 timmar efter behandlingen.
      Limmet härdas i 24 timmar. Många upplever att de inte behöver sminka sig
      när de gjort en fransförlängning. Vill du ändå sminka dig så använd dig
      endast utav en vattenlöslig mascara. Undvik produkter som innehåller olja,
      oljan bryter ner franslimmet vilket påverkar fransarnas varaktighet.
    </p>
  </TreatmentLayout>
)

export default FransforlangningPage
