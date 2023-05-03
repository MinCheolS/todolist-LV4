import React, { useEffect } from 'react'
import styled from 'styled-components'
import List from '../List'
import { useDispatch, useSelector } from 'react-redux'
import { __getTodosThunk } from '../../redux/modules/todosSlice'
import Text from '../elem/Text'


function TodosList() {
  const dispatch = useDispatch()
  const { todos, error } = useSelector((state) => state.todos)
  console.log(todos)
  useEffect(() => {
    dispatch(__getTodosThunk())
  }, [dispatch])

  if(todos.length === 0)
    return (
      <Stdiv>
         <Text size="15">할 일이 없네요!</Text>
      </Stdiv>
    )

  if(error) return <div>알 수 없는 에러가 발생했습니다.</div>

  return (
    <div>
      {todos.map((todo) => (
        <List key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodosList

const Stdiv = styled.div`
  width: 100%;
`