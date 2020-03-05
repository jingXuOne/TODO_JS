const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'DELETE_TODO':
      const deleteTodoId = action.id;
      return state.filter(todo => 
        todo.id !== deleteTodoId
        )
    default:
      return state
  }
}

export default todos
