import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Text from '../components/elem/Text'
import HomeBox from '../components/home/HomeBox'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()

  return (
    <Layout>
      <StContainer>
        <StMain>
          <Text size="35">무엇을 할까요?</Text>
            <HomeBox 
            title="할일 기록하기"
            onClick={() => {navigate("/work/add")}}
            />
            <HomeBox 
            title="TODO LIST"
            onClick={() => {navigate("/works")}}
            />
        </StMain>
      </StContainer>
    </Layout>
  )
}

export default Home

const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StMain = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 24px;
`;