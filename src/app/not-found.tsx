import React from "react"
import Layout from "@/components/layout"
import { getMetaData } from "@/util/getMetaData";

export const metadata = getMetaData({ title: '404: Not found' });

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
