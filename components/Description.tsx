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
        Whether you’re a software developer, a UI or UX designer, a product
        creator or an artworker, you’ll know only too well that great work
        rarely materialises when you’re in the wrong environment.
      </Content>
      <Content size="medium">
        Phones buzzing. Emails pinging. Skype calls incoming...distractions are
        everywhere – and they do nothing for your motivation.
      </Content>
      <Content size="medium">
        So, if you have a seed of a business idea and need to reclaim some
        focus, the Makers’ Retreat is for you. Or maybe you’ve created a
        product, sought a patent and you’re ready – and raring – to go.
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
