import React from "react"
import styled from "styled-components"
import Lotus from "../svg/Lotus.svg"
import { media } from "../lib/media"
import { Benefit } from "./Benefit"
import SectionHeader from "./common/SectionHeader"

export function Benefits({}) {
  return (
    <>
      <SectionHeader
        title="We’re Here to Help You – and Your Side Hustle - Thrive"
        Icon={Lotus}
      />

      <Container>
        {benefits.map(({ id, text, icons, bg }) => (
          <Benefit key={id} id={id} text={text} icons={icons} bg={bg} />
        ))}
      </Container>
    </>
  )
}

const Container = styled.ul`
  margin-top: 30px;
  margin-bottom: 60px;
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "b1 b2 b3"
    "b4 b5 b6"
    ". b7 .";

  ${media.md`
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-areas: 
    "b1 b2"
    "b3 b4"
    "b5 b6"
    "b7 b7";
  `}

  ${media.sm`
  display: flex;
  flex-direction: column;
  `}
`

const benefits = [
  {
    id: "b1",
    text: "Three, full days of distraction-free work",
    icons: ["📵", "🔕"],
    bg: "#ED5665"
  },
  {
    id: "b2",
    text: "A chance to hone your side project away from the office",
    icons: ["🎯", "🌲"],
    bg: "#FC6E51"
  },
  {
    id: "b3",
    text: "The opportunity to collaborate with likeminded creatives",
    icons: ["🤝", "👀"],
    bg: "#FFCE53"
  },
  {
    id: "b4",
    text: "Good, honest feedback and insight from fellow attendees",
    icons: ["🗣️", "👌"],
    bg: "#90D659"
  },
  {
    id: "b5",
    text: "Daily yoga and meditation to help fuel your ideas",
    icons: ["🧘‍", "🤸"],
    bg: "#4EC2E9"
  },
  {
    id: "b6",
    text: "Three, nutritious and delicious meals a day",
    icons: ["🥗", "🍲"],
    bg: "#B28FF0"
  },
  {
    id: "b7",
    text: "Healthy, low-sugar snacks to get you through the day",
    icons: ["🥪", "🥑"],
    bg: "#4E9CF3"
  }
]
