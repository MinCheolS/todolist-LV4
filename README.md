*** components
- Header
    홈 아이콘 및 홈으로 가능 기능, 머릿글
- Layout
    <Header> 포함
    Layout 설정?
- List
     <div> todo list
    - 제목,작성자
    - 삭제버튼


*** pages
- Home
- AddTodo
- Todos
- Todo 

*** Home
<Layout>
<h1> 제목 테그
<button> AddTodo , Todos

*** AddTodo
<Layout>
<AddTodoForm>
    <text> or <label> 작성자, 제목, 내용
    <textarea> 작성자, 제목, 내용
    <button> 추가하기

*** Todos
<Layout>
<TodosList>
<List>

*** Todo
<Layout>
<text> or <div> 아이디, 이전으로, 제목, 내용
<button> 수정
    <text> or <div> 제목
    <textarea> 내용
    <button> 저장