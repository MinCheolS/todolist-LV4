import { configureStore } from "@reduxjs/toolkit";
import { isDev } from "../modules";
import todos from "../modules/todosSlice";
import todo from "../modules/todoSlice";

const store = configureStore({
    reducer : {
    todos,
    todo,
    },
    devTools: isDev,
})

export default store