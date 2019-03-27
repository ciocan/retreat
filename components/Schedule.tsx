import styled from "styled-components"
import uuid from "uuid/v4"
import { Section } from "./common/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { media } from "../lib/media"

export const Schedule = () => (
  <Section>
    <TitleContainer>
      <Title>
        <FontAwesomeIcon icon={faCalendarAlt} /> 9 - 13 May
      </Title>
      <Subittle>Creeksea Place Barns, Essex</Subittle>
      <Title>Event Schedule</Title>
    </TitleContainer>
    <Day
      header="Thursday, 9th of May"
      hours={[{ hour: "6-8PM", description: "Arrival & Check-in" }]}
    />
    <Day
      header="Friday / Saturday, 10/11th of May"
      hours={[
        { hour: "630AM", description: "Sunrise Yoga & Meditation" },
        { hour: "8AM", description: "Breakfast" },
        { hour: "...", description: "Deep Work Session..." },
        { hour: "12PM", description: "Lunch" },
        { hour: "...", description: "Deep Work Session..." },
        { hour: "5PM", description: "Diner" },
        { hour: "8PM", description: "Sunset Yoga & Meditation" }
      ]}
    />
    <Day
      header="Sunday, 12th of May"
      hours={[
        { hour: "630AM", description: "Sunrise Yoga & Meditation" },
        { hour: "8AM", description: "Breakfast" },
        { hour: "...", description: "Deep Work Session..." },
        { hour: "12PM", description: "Lunch" },
        { hour: "...", description: "Deep Work Session..." },
        { hour: "4PM", description: "Review / Show & Tell" },
        { hour: "5PM", description: "Diner" },
        { hour: "6+PM", description: "Checkout" },
        {
          hour: "",
          description:
            "* or sleep one extra night and checkout on Monday morning before 11AM"
        }
      ]}
    />
  </Section>
)

const TitleContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`
const Subittle = styled.h2`
  margin-bottom: 30px;
`

interface Hour {
  hour: string
  description: string
}
interface DayProps {
  header: string
  hours: Array<Hour>
}
const Day = ({ header, hours }: DayProps) => (
  <DayContainer>
    <DayHeader>{header}</DayHeader>
    {hours.map((h: Hour) => (
      <HourContainer key={uuid()}>
        <Hour>{h.hour}</Hour>
        <Description>{h.description}</Description>
      </HourContainer>
    ))}
  </DayContainer>
)

const DayContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 20px;
  ${media.sm`width: 100%;`}
`
const DayHeader = styled.p`
  font-weight: bold;
  font-size: 18px;
  background: #2d3a3a;
  color: white;
  padding: 4px 8px;
  text-align: center;
`
const HourContainer = styled.div`
  display: flex;
  padding: 2px 8px;
`
const Hour = styled.p`
  font-weight: bold;
  min-width: 40%;
  text-align: right;
  padding-right: 8px;
  ${media.sm`width: 80px;`}
`
const Description = styled.p``
