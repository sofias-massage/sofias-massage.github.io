import { Metadata } from "next";

const mainTitle = 'Sofias Massage'
const mainDescription = 'Du är varmt välkommen in till mig på Sofias Massage! Sofias Massage startade 2018. Via GGI (Göteborgs gymnastiska insitut) har jag gått min utbildning till certifierad massageterapeut. Jag är utbildad inom svensk klassisk massage och triggerpunktsbehandling. Mitt mål är att hjälpa dig till bättre hälsa och välbefinnande.'

export const getMetaData = ({ title, description }: Pick<Metadata, 'title' | 'description'> = {}): Metadata => {
  const pageTitle = title ? `${title} | ${mainTitle}` : mainTitle
  const pageDescription = description || mainDescription
  return {
    title: pageTitle,
    description: pageDescription,
    authors: { name: `@Levis92`, url: `https://github.com/Levis92` },
    openGraph: { type: 'website', title: pageTitle, description: pageDescription },
    twitter: { card: "summary", creator: `@Levis92`, title: pageTitle, description: pageDescription }
  };
}
