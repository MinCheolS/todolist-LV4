import React from 'react'
import styled from 'styled-components'

function Text(props) {
  return (
    <StContainer {...props}>{props.children}</StContainer>
  )
}

export default Text

const StContainer = styled.div`
    font-size : ${({size}) => `${size}px`};
    color : ${({color}) => color};
    /* font-weight : bold; */
    font-weight : ${(fw) => fw};
`
// size="10px" color="red" fw=???