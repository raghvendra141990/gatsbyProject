import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from "../components/SignUpForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{ maxWidth: `900px`, marginTop: `1.45rem` }}>Registration Form</h2>
    <p>Sign up to avail diverse loan products connected to over 50 lenders.</p>
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
    <SignUpForm />
    </div>
  </Layout>
)
export default IndexPage
