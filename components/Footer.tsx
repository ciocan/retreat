import styled from "styled-components"
import * as gtag from "../lib/gtag"

export const Footer = () => (
  <Container>
    GDPR Info: We use{" "}
    <Link
      href="https://www.typeform.com/help/gdpr-compliance/"
      target="_new"
      onClick={() => gtag.event({ action: "click", category: "Typeform" })}
    >
      Typeform
    </Link>
    {", "}
    <Link
      href="https://mailchimp.com/help/about-the-general-data-protection-regulation/"
      target="_new"
    >
      Mailchimp
    </Link>{" "}
    and{" "}
    <Link href="https://ti.to/terms" target="_new">
      Tito
    </Link>{" "}
    to store, process and send your data. Hosting on{" "}
    <Link
      href="https://zeit.co"
      target="_new"
      onClick={() => gtag.event({ action: "click", category: "Zeit" })}
    >
      Zeit
    </Link>{" "}
    and landing page code on{" "}
    <Link
      href="https://github.com/ciocan/retreat"
      target="_new"
      onClick={() => gtag.event({ action: "click", category: "GitHub" })}
    >
      Github
    </Link>
    <p>
      Our{" "}
      <Link
        target="_new"
        onClick={() => gtag.event({ action: "click", category: "Privacy" })}
        href="https://www.notion.so/retreat/Privacy-Policy-f0c950a4a5b5485ca5b7f549f234d8fa"
      >
        Privacy Policy
      </Link>
    </p>
  </Container>
)

const Container = styled.footer`
  background-color: #fafafa;
  padding: 3rem 1.5rem 6rem;
  font-size: 0.75rem;
  text-align: center;
`
const Link = styled.a`
  color: black;
`
