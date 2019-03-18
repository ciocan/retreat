import { Title, Content } from "rbx"
import { Section } from "./common/layout"

export function Description({}) {
  return (
    <Section>
      <Title size={3}>
        Makers’ Retreat gives you the space you need to take your side project
        from idea to reality.
      </Title>
      <Content size="medium">
        <Title size={4}>Calling all creatives!</Title>
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
      <Content size="medium">
        <Title size={4}>
          We’re Here to Help You – and Your Side Hustle - Thrive
        </Title>
      </Content>
    </Section>
  )
}
