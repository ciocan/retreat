import React from "react"
import { Section } from "./common/layout"
import styled from "styled-components"
import { CTAButton } from "./CTAButton"
import SectionHeader from "./common/SectionHeader"
import Clipboard from "../svg/Clipboard.svg"

export const CallToAction = () => (
  <CTASection>
    <SectionHeader
      title="Register & Pay"
      subtitle="Only 12 Spots available"
      Icon={Clipboard}
    />
    <Price
      amount="£490"
      info="Super Early Bird"
      date="until 31 March, 6:00pm"
      isDisabled
    />
    <Price amount="£590" info="Early Bird" date="until 14 April, 6:00pm" />
    <Price amount="£690" info="Regular Bird" isDisabled />

    <CTAButton />
  </CTASection>
)

const CTASection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
