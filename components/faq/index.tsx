import styled from "styled-components"
import { questions } from "./questions"
import { Faq } from "./Faq"
import { CTAButton } from "../CTAButton"

export const FAQ = () => (
  <Container>
    <Title>Frequently Asked Questions</Title>
    <List>
      {questions.map(question => (
        <Faq {...question} key={question.id} />
      ))}
    </List>
    <CTAButton text="Register now" label="faq" />
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const List = styled.ol`
  padding: 20px;
  list-style: none;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`
