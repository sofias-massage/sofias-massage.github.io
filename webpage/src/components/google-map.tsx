import React from "react"
import styled from "@emotion/styled"

const IFrame = styled.iframe`
  border: 0;
  width: 45%;
  height: 22.5rem;

  @media (max-width: 800px) {
    width: 95%;
    max-width: 20rem;
  }
`

const GoogleMap = () => (
  <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2121.9488323533024!2d11.9804913160988!3d57.87007388117224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464560999581cee3%3A0x3135b89b38d00cbc!2sSofias%20Massage!5e0!3m2!1ssv!2sse!4v1572163353672!5m2!1ssv!2sse"></IFrame>
)

export default GoogleMap
