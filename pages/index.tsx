import { Component } from "react"
import Intercom from "react-intercom"
import styled from "styled-components"
import "rbx/index.css"
import { Container as RContainer } from "rbx"
import * as gtag from "../lib/gtag"
import Head from "../components/Head"
import { media } from "../lib/media"
import { Header } from "./../components/Header"
import { Description } from "./../components/Description"
import { Benefits } from "./../components/Benefits"
import { Location } from "./../components/Location"
import { Organisers } from "./../components/Organisers"
import { CallToAction } from "./../components/CallToAction"
import { Schedule } from "../components/Schedule"
import { FAQ } from "../components/faq"
import { Footer } from "../components/Footer"

class IndexPage extends Component {
  componentDidMount() {
    gtag.pageview("/")
  }
  render() {
    return (
      <>
        <Head
          title="Makers' Retreat"
          description="create. connect. collaborate"
          keywords="makers, create, retreat, side project, focus work, digital tech"
        />
        <Header />
        <Container>
          <Description />
          <Benefits />
          <Location />
          <Organisers />
          <Schedule />
          <CallToAction />
          <FAQ />
        </Container>
        <Footer />
        <Intercom appID="ux6ftpa5" />
      </>
    )
  }
}

const Container = styled(RContainer)`
  margin: 0 auto;
  margin-top: -20px;
  border-radius: 5px;
  width: 800px;
  background-color: white;

  padding: 74px 54px;
  padding-bottom: 20px;

  ${media.md`width: 100%;`}
  ${media.sm`
  padding: 24px 14px;
  `}
`

export default IndexPage
