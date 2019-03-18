import styled from "styled-components"
import { media } from "../../lib/media"

export const Section = styled.section`
  margin-bottom: 60px;
  ${media.md`padding 54px 34px; margin-bottom: 0px;`}
  ${media.sm`padding 34px 24px`}
`
