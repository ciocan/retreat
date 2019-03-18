import styled from "styled-components"
import { Title } from "rbx"
import { Organiser } from "./Organiser"
import { media } from "../lib/media"
import { Section } from "./common/layout"

export function Organisers({}) {
  return (
    <Section>
      <Title size={5}>Meet Your Retreat Organisers</Title>
      <Container>
        <Organiser
          name="Radu Ciocan"
          title="Software Engineer"
          avatarUrl="static/radu-ciocan.jpg"
          instagramUrl="https://www.instagram.com/ciocan/"
          linkedinUrl="https://linkedin.com/in/ciocan/"
          githubUrl="https://github.com/ciocan/"
          description="A software engineer in London,
        Radu knows only too well the challenges faced by creatives; it’s
        the reason he’s organised the Makers’ Retreat, to give everyone
        the space and time to do their best work. Armed with his trusty
        camera, photographer Radu is also a biohacker enthusiast and a
        thoroughly good egg."
        />
        <Organiser
          name="Ana Ionescu"
          title="Yoga Instructor"
          avatarUrl="static/ana-ionescu.jpg"
          instagramUrl="https://www.instagram.com/ana_yoga_as_a_lifestyle/"
          description="An internationally-certified yoga teacher, Ana loves connecting with
        people and discovering how she can help them get the best out of their
        day – and their work. Giving attendees the time to enjoy some
        self-care in the form of a spot of gentle yoga, animal lover Anna will
        help you unleash those ideas!"
        />
      </Container>
    </Section>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  ${media.sm`
  grid-template-columns: 1fr;
  row-gap: 20px;
  `}
`
