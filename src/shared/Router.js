import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Todos from "../pages/Todos"
import Todo from "../pages/Todo"
import AddTodo from "../pages/AddTodo"



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/works" element={<Todos />}/>
                <Route path="/works/:id" element={<Todo />}/>
                <Route path="/work/add" element={<AddTodo />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router