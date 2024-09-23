import React from "react"

const Green = () => (
  <a
    href="http://www.bokadirekt.se/Bookings/Default.aspx?sru=26391"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://foretag.bokadirekt.se/bokatid/BokaTid_Gron_MorkBakgrund_120px.png"
      alt="Boka tid"
    />
  </a>
)

const White = () => (
  <a
    href="http://www.bokadirekt.se/Bookings/Default.aspx?sru=26391"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://foretag.bokadirekt.se/bokatid/BokaTid_Vit_MorkBakgrund_120px.png"
      alt="Boka tid"
    />
  </a>
)

export const BokaDirekt = {
  Green,
  White
}
