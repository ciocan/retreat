import React from "react"
import { Hero, Title as RTitle, Container } from "rbx"
import styled from "styled-components"
import { media } from "../lib/media"
import Rocket from "../svg/Rocket.svg"

export function Header() {
  return (
    <Hero color="dark" size="fullheight">
      <Hero.Body>
        <Container textAlign="centered">
          <RocketIcon />
          <Title>Makers' Retreat</Title>
          <Subtitle>create. connect. collaborate</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  )
}

const Title = styled(RTitle)`
  font-size: 96px;
  font-weight: bold;
  text-shadow: 4px 4px 0px rgba(252, 0, 0, 0.4);
  font-weight: bold;
  line-height: 104px;

  ${media.md`font-size: 40px; line-height: 44px;`}
  ${media.sm`font-size: 30px; line-height: 40px;`}
`

const Subtitle = styled(RTitle)`
  text-shadow: 0px 3px 0px rgba(204, 0, 255, 0.25);
  font-size: 28px;
  font-weight: bold;
  line-height: 30px;
  font-size: 28px;
  text-align: center;
  letter-spacing: 5px;

  ${media.md`font-size: 18px; line-height: 20px;`}
  ${media.sm`font-size: 12px; line-height: 14px;`}
`

const RocketIcon = styled(Rocket)`
  max-width: 360px;
  width: 50%;
  height: 50%;
`
