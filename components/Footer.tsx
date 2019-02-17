import { Content, Footer as RBXFooter } from "rbx"
import * as gtag from "../lib/gtag"

export const Footer = () => (
  <RBXFooter>
    <Content size="small">
      GDPR Info: we use{" "}
      <a
        href="https://www.typeform.com/help/gdpr-compliance/"
        target="_new"
        onClick={() => gtag.event({ action: "click", category: "Typeform" })}
      >
        Typeform
      </a>{" "}
      and{" "}
      <a
        href="https://mailchimp.com/help/about-the-general-data-protection-regulation/"
        target="_new"
      >
        Mailchimp
      </a>{" "}
      to store, process and send your data. Hosting on{" "}
      <a
        href="https://zeit.co"
        target="_new"
        onClick={() => gtag.event({ action: "click", category: "Zeit" })}
      >
        Zeit
      </a>{" "}
      and landing page code on{" "}
      <a
        href="https://github.com/ciocan/retreat"
        target="_new"
        onClick={() => gtag.event({ action: "click", category: "GitHub" })}
      >
        Github
      </a>
    </Content>
    <style jsx>{`
      a {
        color: black;
      }
    `}</style>
  </RBXFooter>
)
