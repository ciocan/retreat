import { Section, Title, Box, Content } from "rbx"

export function Organisers({}) {
  return (
    <Section>
      <Title size={5}>Meet Your Retreat Organisers</Title>
      <Box>
        <Title size={5}>Meet Radu</Title>
        <Content>
          A software engineer in London, Radu knows only too well the challenges
          faced by creatives; it’s the reason he’s organised the Creators’
          Retreat, to give everyone the space and time to do their best work.
          Armed with his trusty camera, photographer Radu is also a biohacker
          enthusiast and a thoroughly good egg.
        </Content>
      </Box>
      <Box>
        <Title size={5}>Meet Ana</Title>
        <Content>
          An internationally-certified yoga teacher, Ana loves connecting with
          people and discovering how she can help them get the best out of their
          day – and their work. Giving attendees the time to enjoy some
          self-care in the form of a spot of gentle yoga, animal lover Anna will
          help you unleash those ideas!
        </Content>
      </Box>
    </Section>
  )
}
