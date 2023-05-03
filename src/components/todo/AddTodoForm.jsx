import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Text from '../elem/Text';
import Input from '../elem/Input';
import Button from '../elem/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearTodo, __addTodoThunk } from '../../redux/modules/todosSlice';
import { useNavigate } from 'react-router-dom';

function AddTodoForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isSuccess = useSelector((state) => state.todos.isSuccess)
  const [todo, setTodo] = useState({
        name : "",
        title : "",
        body : "",  
    })

    useEffect(() => {
      if(!isSuccess) return;
      if(isSuccess) navigate("/works")
        
      return () => dispatch(clearTodo())
    },[dispatch, isSuccess, navigate])

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setTodo({...todo, [name]:value})
    }
      
    const onSubmitHandler = (e) => {
      e.preventDefault()
      if(todo.name.trim() === "" || todo.title.trim() === "" || todo.body.trim() === "") {
        return alert("모든 항목을 입력해주세요.")
      }
      dispatch(__addTodoThunk(todo))
      setTodo({name : "" , title : "", body : ""})
    }

  return (
    <StContainer>
        <StForm onSubmit={onSubmitHandler}>
            <StMain>
                <Text size="25">작성자</Text>
                <Input 
                type="text"
                onChange={onChangeHandler}
                placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
                name="name"
                value={todo.name}
                maxLength={5}
                />
                <Text size="25">제목</Text>
                <Input 
                type="text"
                onChange={onChangeHandler}
                placeholder="제목을 입력해주세요. (50자 이내)"
                name="title"
                value={todo.title}
                maxLength={50}
                />
                <Text size="25">내용</Text>
                <Textarea
                rows="10"
                onChange={onChangeHandler}
                placeholder="내용을 입력해주세요. (200자 이내)"
                name="body"
                value={todo.body}
                maxLength={200}
                />
            </StMain>
            <Button size="large">추가하기</Button>
        </StForm>
    </StContainer>
  )
}

export default AddTodoForm

const StForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
`;

const StContainer = styled.div`
  height: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;

const StMain = styled.div`
  width: 100%;
`;