import { Button } from "rbx"
import * as gtag from "../lib/gtag"
import styled from "styled-components"

export const CTAButton = ({
  action = "click",
  category = "CTA",
  label = "register",
  text = "Secure Your Spot"
}) => (
  <Container>
    <Button
      color="link"
      as="a"
      href="https://ti.to/makers-retreat/early-may"
      target="_new"
      onClick={() => gtag.event({ action, category, label })}
      size="medium"
    >
      {text.toUpperCase()}
    </Button>
  </Container>
)

const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
`
