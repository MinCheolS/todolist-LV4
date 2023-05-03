import React from 'react'
import styled from 'styled-components';
import Text from './elem/Text';
import Button from './elem/Button';
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __deleteTodoThunk } from '../redux/modules/todosSlice';

function List({todo}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onDeleteHandler = () => {
    dispatch(__deleteTodoThunk(todo.id))
  }

  return (
    <StList
    onClick={() => {
      navigate(`/works/${todo.id}`)
    }}
    >
      <Stflex>
        <Text size="25">{todo.title}</Text>
        <Button size="medium"
        onClick={(e) => {
          e.stopPropagation()
          const result = window.confirm("이 할일을 지울까오?")
          if(result) {
            return onDeleteHandler()
          }
          else {
            return
          }
        }}
        >
          <FaRegTrashAlt size="17" color='#ff8922'/>
        </Button>
      </Stflex>
      <Stflex>작성자 : {todo.name}</Stflex>
    </StList>
  )
}

export default List

const StList = styled.div`
  padding: 12px;
  height: 90px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
`;

const Stflex = styled.div`
  display: flex;
  justify-content: space-between;
`