import React from 'react'
import styled, {css} from 'styled-components'

function Button(props) {
  return (
    <StButton {...props} disabled={props.disabled}>
        {props.children}
    </StButton>
  )
}

export default Button

const StButton = styled.button`
    border : 1px solid #eee;
    background-color : #fff;
    height : 45px;
    border-radius : 10px;
    background-color : ${({bgColor , disabled}) => (disabled ? "#ddd" : bgColor)};
    cursor : pointer;

    ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 100%;
        `;
      case "medium":
        return css`
          width: 80px;
        `;
      case "small":
        return css`
          width: 30px;
          height: 30px !important;
        `;
      default:
        return css`
          width: 120px;
        `;
    }
  }}
`