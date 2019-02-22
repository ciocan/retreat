import { Hero, Title, Container } from "rbx"

export function Header({}) {
  return (
    <Hero color="light">
      <Hero.Body>
        <Container>
          <Title>Makers' Retreat</Title>
          <Title as="h2" subtitle>
            create. connect. collaborate
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
  )
}
