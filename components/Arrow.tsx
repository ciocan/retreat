import React from "react"
import styled from "styled-components"
import ArrowIcon from "../svg/Arrow.svg"

const Arrow = () => (
  <Wrapper>
    <ArrowAnimated />
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 30px;
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
  display: flex;
`

const ArrowAnimated = styled(ArrowIcon)`
  svg {
    width: 30px;
    max-height: 40px;
    display: inline-block;
  }

  path {
    stroke: grey;
    fill: transparent;
    stroke-width: 1px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }

  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0.8;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes arrow /*Safari and Chrome*/ {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0.8;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  path.a1 {
    animation-delay: -1s;
    -webkit-animation-delay: -1s; /* Safari 和 Chrome */
  }

  path.a2 {
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
  }

  path.a3 {
    animation-delay: 0s;
    -webkit-animation-delay: 0s; /* Safari 和 Chrome */
  }
`

export default Arrow
