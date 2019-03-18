import { Button } from "rbx"
import * as gtag from "../lib/gtag"
import { Section } from "./common/layout"
import styled from "styled-components"

export function CallToAction({}) {
  return (
    <CTASection>
      <Title>Register & Pay</Title>
      <Subittle>Only 12 Spots available</Subittle>
      <Price
        amount="£490"
        info="Super Early Bird"
        date="until 24 March, 6:00pm"
      />
      <Price
        amount="£590"
        info="Early Bird"
        isDisabled
        date="until 31 March, 6:00pm"
      />
      <Price amount="£690" info="Regular Bird" isDisabled />

      <Button
        color="link"
        as="a"
        href="https://ti.to/makers-retreat/early-may"
        target="_new"
        onClick={() => gtag.event({ action: "click", category: "CTA" })}
      >
        Secure Your Spot
      </Button>
    </CTASection>
  )
}

const CTASection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`
const Subittle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`
interface PriceProps {
  amount: string
  info: string
  date?: string
  isDisabled?: boolean
}
const Price = ({ amount, info, date, isDisabled }: PriceProps) => (
  <PriceContainer isDisabled={isDisabled}>
    <Info>{info}</Info>
    <Amount isDisabled={isDisabled}>{amount}</Amount>
    <Date>{date}</Date>
  </PriceContainer>
)

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ isDisabled }) => (isDisabled ? "#B5B5B5" : "black")};
  align-items: center;
  margin: 10px 0;
`
const Info = styled.p`
  font-size: 14px;
`
const Amount = styled.span`
  /* font-size: 42px; */
  line-height: 48px;
  font-weight: bold;
  font-size: ${({ isDisabled }) => (isDisabled ? "32px" : "42px")};
`
const Date = styled.p`
  font-size: 14px;
  font-style: italic;
  width: 100px;
  text-align: center;
`
