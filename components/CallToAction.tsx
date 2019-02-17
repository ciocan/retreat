import { Section, Title, Button, Content } from "rbx"
export function CallToAction({}) {
  return (
    <Section>
      <Title size={5}>What do you think?</Title>
      <Content size="medium">
        Sound good? Keen to know more? Share some feedback via the button below
        and we can hone the Retreat to suit you.
      </Content>
      <Button
        color="link"
        as="a"
        href="https://creatorsretreat.typeform.com/to/bNXc5A"
      >
        Share your thoughts...
      </Button>
    </Section>
  )
}
