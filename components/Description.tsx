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

      <Content size="medium">
        The best ideas tend to find me when I’m spending time away from the
        office – and so it was that, while holidaying in Fuerteventura, the
        creative juices started to flow.
      </Content>
      <Content size="medium">
        It was just after New Year’s Eve and I was standing on a hammock looking
        out to sea. It was on that very spot that I decided I wanted to create a{" "}
        <Link
          href="https://cryptoroulette.info/"
          target="_new"
          onClick={() =>
            gtag.event({ action: "click", category: "CryptoRoulette" })
          }
        >
          web app
        </Link>
        . After all, the conditions weren’t great for surfing, so it seemed as
        good a time as any to work on it.
      </Content>
      <Content size="medium">
        Within a couple of months, someone posted a story on the{" "}
        <Link
          href="https://www.indiehackers.com/interview/92356ba891"
          target="_new"
          onClick={() =>
            gtag.event({ action: "click", category: "IndieHackers" })
          }
        >
          Indiehackers site
        </Link>
        , about how a germ of an idea turned into a{" "}
        <Link
          href="https://www.cblocks.io/"
          target="_new"
          onClick={() => gtag.event({ action: "click", category: "CBlocks" })}
        >
          business
        </Link>
        . This gave me hope that even a small idea posted online, without
        intention to generate money, can inspire someone to create a business.
      </Content>
      <Content size="medium">
        My path had been similar, with my app making way for Makers’ Retreat.
        About a year ago I joined a Vipassana silent meditation 10-day course.
        During the last days of meditation, I got inspiration to set up a
        retreat for tech people, which is designed for productivity, deep work
        and making good habits. For me, the long-term vision is to make the
        event work with a permanent base made from recycled shipping containers.
        The plan is to host 150 people and ensure I create the right environment
        to help others nurture their own business ideas.
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
const Link = styled.a`
  color: blue;
`
