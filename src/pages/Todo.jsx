import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { __getTodoThunk, __updateTodoThunk, clearTodo } from '../redux/modules/todoSlice'
import Layout from '../components/Layout'
import Text from '../components/elem/Text'
import Button from '../components/elem/Button'

function Todo() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  const [edit, setEdit] = useState(false)
  const [updateTodo, setUpdateTodo] = useState('')
  const todo = useSelector((state) => state.todo.todo)
  
  
  useEffect(() => {
    dispatch(__getTodoThunk(id))
    return () => dispatch(clearTodo())
  }, [dispatch, id])

  useEffect(() => {
    setUpdateTodo(todo.body)
  }, [todo])

  const onSaveButtonHandler = () => {
    if(updateTodo.trim() === "") {
      return alert("입력된 내용이 없습니다.")
    }
    dispatch(__updateTodoThunk({
      ...todo,
      body : updateTodo
    }))
    setEdit(false)
  }

  return (
    <>
      <Layout>
        {!edit && (
          <StTodoHeader>
            <Text size="25">id : ({todo?.id})</Text>
            <Text
            size="25"
            onClick={() => {
              navigate("/works")
            }}
            >
              이전으로
            </Text>
          </StTodoHeader>
        )}
        <Text size="40" fw="700">{todo?.title}</Text>
        <StBody>
          {edit ? (
            <>
              <Textarea 
              rows='10'
              name='body'
              maxLength={200}
              value={updateTodo}
              onChange={(e) => {
                setUpdateTodo(e.target.value)
              }}
              />
            </>
          ) : (
            <Stdiv>
              <Text size="25">{todo?.body}</Text>
            </Stdiv>
          )}
          <StButtonGroup>
            {edit ? (
              <Button size="large" onClick={onSaveButtonHandler}>저장</Button>
            ) : (
              <Button size="large" onClick={() => setEdit(true)}>수정</Button>
            )}
          </StButtonGroup>
        </StBody>
      </Layout>
    </>
  )
}

export default Todo

const StTodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  div:nth-child(2) {
  text-decoration: underline;
  color: teal;
  cursor: pointer;
  }
  margin-bottom: 32px;
`;

const StBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
  min-height: 550px;
  div {
    line-height: 1.5;
  }
`;

const StButtonGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;

const Stdiv = styled.div`
  text-align: center;
  width: 100%;
`