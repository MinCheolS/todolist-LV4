import React from 'react'
import styled from 'styled-components';
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  
  return (
    <StContainer>
      <AiFillHome 
      size="25"
      onClick={() => {navigate("/")}}
      />
      <StTitle>모두의 투두리스트</StTitle> 

    </StContainer>
  )
}
export default Header

const StContainer = styled.header`
justify-content: space-between;
align-items: center;
display: flex;
height: 45px;
background-color: #fff;
border-bottom: 1px solid #ddd;
padding: 0 12px;
`;
const StTitle = styled.div`
  font-size: 24px;
`;