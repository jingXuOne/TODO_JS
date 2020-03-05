import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
