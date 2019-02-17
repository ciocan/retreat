import { Content, Footer as RBXFooter } from "rbx"

export const Footer = () => (
  <RBXFooter>
    <Content size="small">
      GDPR Info: we use{" "}
      <a href="https://www.typeform.com/help/gdpr-compliance/" target="_new">
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
      <a href="https://zeit.co" target="_new">
        Zeit
      </a>{" "}
      and landing page code on{" "}
      <a href="https://github.com/ciocan/retreat" target="_new">
        Github
      </a>
    </Content>
  </RBXFooter>
)
