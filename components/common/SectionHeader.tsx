import styled from "styled-components"

interface Props {
  title: string
  subtitle?: string
  Icon: any
}
const SectionHeader = ({ title, subtitle, Icon }: Props) => {
  const IconStyled = styled(Icon)`
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 20px;
  `

  return (
    <Container>
      <IconStyled />
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  )
}

export default SectionHeader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 22px;
`
const Subtitle = styled.h2`
  font-size: 16px;
`
