import styled from "styled-components"
import { media } from "../lib/media"

interface Props {
  id: string
  text: string
  icons: Array<string>
  bg: string
}

export const Benefit = ({ id, text, icons, bg }: Props) => (
  <Container id={id} bg={bg}>
    <Icon>{icons[0]}</Icon>
    <Text>{text}</Text>
    <Icon end>{icons[1]}</Icon>
  </Container>
)

interface IconProps {
  end?: boolean
}
const Icon = styled.span`
  align-self: ${({ end }: IconProps) => (end ? "flex-end" : "flex-start")};
`

const Text = styled.span`
  color: #fff;
  font-weight: bold;
  line-height: 27px;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.5px;
  text-shadow: 1px 1px 1px rgba(255, 20, 20, 0.5);
`

const Container = styled.li`
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background: ${({ bg }) => bg};
  width: 197px;
  padding: 15px;
  display: flex;
  align-items: center;
  grid-area: ${({ id }) => id};

  ${media.md`
    width: 100%;
  `}

  ${media.sm`
    margin-bottom: 20px;
    width: 100%;
    min-height:150px;
    justify-content: center;
  `}
`
