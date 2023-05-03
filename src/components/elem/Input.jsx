import React from 'react'
import styled from 'styled-components'

function Input(props) {
  return (
    <StInput {...props} required={true} minLength={3}/>
  )
}

export default Input

const StInput = styled.input`
    box-sizing : border-box;
    height : 45px;
    width : 100%;
    outline : none;
    border-radius : 10px;
    padding : 0px 10px;
    font-size : 15px;
    border : 1px solid #eee;
`