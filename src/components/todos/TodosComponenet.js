import React,{useState} from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../../redux/todos/TodosAction'

const TodosComponenet = ({todos, fetchTodos}) => {

    const [isTodos,setIsTodos] = useState(false)

    const getTodos = () => {
        fetchTodos()
        setIsTodos(true)
    }

  return (
    <>
        {!isTodos && <button onClick={getTodos}>Click to Get Your Todos</button>}
        {todos && todos.map(todo => (
            <div key={todo.id}>
                <h2>Title : {todo.title}</h2>
            </div>
        ))}
    </>
  )
}

const mapStateToProps = state => {
    return{
        todos: state.todo.todos
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchTodos: () => dispatch(fetchTodos())
    }
}
    
export default connect(mapStateToProps,mapDispatchToProps)(TodosComponenet)