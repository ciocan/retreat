import { Title as RTitle, Content } from "rbx"
import { Section } from "./common/layout"
import styled from "styled-components"

export function Description({}) {
  return (
    <Section>
      <Headline size={1}>
        Makers’ Retreat gives you the space you need to take your side project
        from idea to reality.
      </Headline>

      <Content size="medium">
        <RTitle size={4}>Calling all creatives!</RTitle>
      </Content>
      <Content size="medium">
        Phones buzzing. Emails pinging. Calls incoming...distractions are
        everywhere – and they do nothing for your motivation. In the comforts of
        your regular environment, inspiration can come all too rarely. The spark
        that ignited the flames of your creativity once, can seem to draw away
        into the edges.
      </Content>

      <Content size="medium">
        Sometimes you get a hold of it, other times it gets a hold of you, but
        sometimes, it can seem ever so fleeting.
      </Content>
      <Content size="medium">But it doesn’t have to stay that way.</Content>

      <Content size="medium">
        Whether you’re a software developer, a designer, a product creator,an
        artist, or anyone who works creatively with technology, living in a busy
        city, you know too well that great work rarely materialises when you’re
        in an ordinary environment with bright lights and busy workers.
      </Content>

      <Content size="medium">
        Ideally, when you examine your surroundings, you should experience
        gratitude, confidence, and a desire to explore your imagination. It’s
        only then that you’ll get really close to what’s possible for you.
      </Content>
      <Content size="medium">
        In your regular environment, things can eventually become stale and
        all-too-ordinary. Switching the scene for days at a time can refresh
        your senses and revitalize your creativity and love for meaningful work.
        A break away from home can burst the flames to a new breakthrough, and
        even a higher, broader perspective for your life.
      </Content>
      <Content size="medium">
        At the Makers’ retreat, you can sink into a sanctuary of calm and
        serenity. Far away from the noise, you’ll be surrounded by like-minded
        people on a similar journey of growth. A journey of stillness.
        Awareness. And Expansion. With daily meditation, and yoga workshops,
        your three days of work will be beautifully balanced between the Yin and
        Yang. Between the extreme of bringing life to new ideas and the calm of
        Being.
      </Content>
      <Content size="medium">
        So, if you have a seed of a business idea that wants to blossom, or your
        simply want to ignite the spark to a big project, and need to reclaim
        some focus and stillness, the Makers’ Retreat is for you.
      </Content>
    </Section>
  )
}

const Headline = styled(RTitle)`
  font-size: 26px;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 20px;
`
