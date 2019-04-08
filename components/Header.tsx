import React from "react"
import { Hero, Title as RTitle, Container } from "rbx"
import styled from "styled-components"
import { media } from "../lib/media"
import Rainbow from "../svg/Rainbow.svg"
import Arrow from "./Arrow"

export function Header() {
  return (
    <Hero color="white" size="fullheight">
      <Hero.Body>
        <Container textAlign="centered">
          <RainbowIcon />
          <Title>Makers' Retreat</Title>
          <Subtitle>create. connect. collaborate</Subtitle>
          <Arrow />
        </Container>
      </Hero.Body>
    </Hero>
  )
}

const Title = styled(RTitle)`
  font-size: 42px;
  font-weight: bold;
  margin-top: -60px;

  ${media.md`font-size: 40px; line-height: 44px; margin-top: -30px;`}
  ${media.sm`font-size: 30px; line-height: 40px;`}
`

const Subtitle = styled(RTitle)`
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
  letter-spacing: 3px;

  ${media.md`font-size: 18px; line-height: 20px;`}
  ${media.sm`font-size: 12px; line-height: 14px;`}
`

const RainbowIcon = styled(Rainbow)`
  max-width: 420px;
  width: 75%;
  height: 75%;
`
