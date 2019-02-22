import { Component } from "react"
import { Description } from "./../components/Description"
import { Benefits } from "./../components/Benefits"
import { Location } from "./../components/Location"
import { Organisers } from "./../components/Organisers"
import { CallToAction } from "./../components/CallToAction"
import "rbx/index.css"
import { Container } from "rbx"
import Head from "../components/Head"
import { Header } from "./../components/Header"
import { Footer } from "../components/Footer"
import * as gtag from "../lib/gtag"

class IndexPage extends Component {
  componentDidMount() {
    gtag.pageview("/")
  }
  render() {
    return (
      <Container>
        <Head
          title="Makers' Retreat"
          description="create. connect. collaborate"
          keywords="makers, create, retreat, side project, focus work, digital tech"
        />
        <Header />
        <Description />
        <Benefits />
        <Location />
        <Organisers />
        <CallToAction />
        <Footer />
        <style global jsx>{`
          .section {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
        `}</style>
      </Container>
    )
  }
}

export default IndexPage
