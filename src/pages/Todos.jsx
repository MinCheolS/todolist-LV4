import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';
import Text from '../components/elem/Text';
import TodosList from '../components/todo/TodosList';

function Todos() {
  return (
    <Layout>
      <Text size="30">내 할일</Text>
      <StContainer>
        <TodosList />
      </StContainer>
    </Layout>
  )
}

export default Todos

const StContainer = styled.div`
  height: calc(100% - 45px - 48px);
`;
