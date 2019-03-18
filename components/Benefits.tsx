import styled from "styled-components"
import { media } from "../lib/media"
import { Benefit } from "./Benefit"

export function Benefits({}) {
  return (
    <Container>
      {benefits.map(({ id, text, icons }) => (
        <Benefit key={id} id={id} text={text} icons={icons} />
      ))}
    </Container>
  )
}

const Container = styled.ul`
  margin-top: 30px;
  margin-bottom: 60px;
  display: grid;
  column-gap: 0px;
  row-gap: 30px;
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
    icons: ["📵", "🔕"]
  },
  {
    id: "b2",
    text: "A chance to hone your side project away from the office",
    icons: ["🎯", "🌲"]
  },
  {
    id: "b3",
    text: "The opportunity to collaborate with likeminded creatives",
    icons: ["🤝", "👀"]
  },
  {
    id: "b4",
    text: "Good, honest feedback and insight from fellow attendees",
    icons: ["🗣️", "👌"]
  },
  {
    id: "b5",
    text: "Daily yoga and meditation to help fuel your ideas",
    icons: ["🧘‍", "🤸"]
  },
  {
    id: "b6",
    text: "Three, nutritious and delicious meals a day",
    icons: ["🥗", "🍲"]
  },
  {
    id: "b7",
    text: "Healthy, low-sugar snacks to get you through the day",
    icons: ["🥪", "🥑"]
  }
]
