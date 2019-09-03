import React from "react"
import { Link } from "gatsby"
import 'spectre.css/dist/spectre.min.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Summary from "../components/summary"
import Education from "../components/education"
import Experience from "../components/experience"
import Skills from "../components/skills"
import Interests from "../components/interests"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Summary />
<Education />
<Experience />
<Skills />
<Interests />
  </Layout>
)

export default IndexPage
