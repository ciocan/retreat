import { Component } from "react"
import styled from "styled-components"
import { Description } from "./../components/Description"
import { Benefits } from "./../components/Benefits"
import { Location } from "./../components/Location"
import { Organisers } from "./../components/Organisers"
import { CallToAction } from "./../components/CallToAction"
import "rbx/index.css"
import { Container as RContainer } from "rbx"
import Head from "../components/Head"
import { Header } from "./../components/Header"
import { Footer } from "../components/Footer"
import * as gtag from "../lib/gtag"
import { media } from "../lib/media"
import Schedule from "../components/Schedule"
import Intercom from "react-intercom"

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
