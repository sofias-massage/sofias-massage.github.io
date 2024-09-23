import Header from "@/components/header";
import Layout from "@/components/layout";
import Treatments from "@/components/treatments";
import Companies from "@/components/companies";
import AboutMe from "@/components/about-me";
import { getMetaData } from "@/util/getMetaData";

export const metadata = getMetaData({ title: 'Hem' });

export default function Home() {
  return (
    <>
    <Header />
    <Layout>
      <Treatments />
      <Companies />
      <AboutMe />
    </Layout>
  </>
  );
}
