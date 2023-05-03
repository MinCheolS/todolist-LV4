import React from 'react'
import styled from 'styled-components';
import Text from '../elem/Text';
import { HiArrowCircleRight } from "react-icons/hi";

function HomeBox({title, onClick}) {
  return (
    <StContainer onClick={onClick}>
        <Text size="30">{title}</Text>
        <HiArrowCircleRight size="45" color="#1c33ff"/>
    </StContainer>
  )
}

export default HomeBox

const StContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 120px;
    border: 1px solid #eee;
    background-color: #fff;
    border-radius: 8px;
    cursor: pointer;
    :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px;
  }
`;