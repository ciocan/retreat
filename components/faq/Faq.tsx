import styled from "styled-components"
import { QuestionType } from "./questions"

interface FaqProps {
  id: number
}
export const Faq = ({ id, question, answer }: QuestionType & FaqProps) => (
  <Container>
    <Question>
      <Id>{id}.</Id>
      {question}
    </Question>
    <Answer>{answer}</Answer>
  </Container>
)

const Container = styled.li`
  margin: 20px;
`

const Question = styled.p`
  font-size: 18px;
  font-weight: bold;
`

const Id = styled.span`
  margin-right: 5px;
`

const Answer = styled.p`
  font-size: 18px;
`
