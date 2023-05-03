import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { servertUrl } from ".";

export const __addTodoThunk = createAsyncThunk(
    "ADD_TODO",
    async (arg, thunkAPI)=>{
        try {
            const { data } = await axios.post(`${servertUrl}/todos` , arg)
            return thunkAPI.fulfillWithValue(data)
        } catch(e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const __deleteTodoThunk = createAsyncThunk(
    "DELETE_TODO",
    async (arg, thunkAPI)=>{
        try {
            axios.delete(`${servertUrl}/todos/${arg}`)
            return thunkAPI.fulfillWithValue(arg)
        } catch(e) {
            return thunkAPI.rejectWithValue(e.code)
        }
    }
)

export const __getTodosThunk = createAsyncThunk(
    "GET_TODOS",
    async (_, thunkAPI)=>{
        try {
            const { data } = await axios.get(`${servertUrl}/todos`)
            return thunkAPI.fulfillWithValue(data)
        } catch(e) {
            return thunkAPI.rejectWithValue(e.code)
        }
    }
)

const initialState = {
    todos: [],
    error: null,
    isLoading: false,
    isSuccess: false,
}

export const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        clearTodo: (state, action) => {
            state.isSuccess = false;
        },
    },
    extraReducers: {
        [__addTodoThunk.pending] : (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [__addTodoThunk.fulfilled] : (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.todos.push(action.payload);
        },
        [__addTodoThunk.rejected] : (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [__deleteTodoThunk.pending] : () => {},
        [__deleteTodoThunk.fulfilled] : (state, action) => {
            const target = state.todos.findIndex(
                (comment) => comment.id === action.payload)
            state.todos.splice(target, 1)
        },
        [__deleteTodoThunk.rejected] : () => {},
        [__getTodosThunk.pending] : (state) => {
            state.isLoading = true
        },
        [__getTodosThunk.fulfilled] : (state, action) => {
            state.isLoading = false
            state.todos = action.payload
        },
        [__getTodosThunk.rejected] : (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})


export const { clearTodo } = todoSlice.actions;
export default todoSlice.reducer;