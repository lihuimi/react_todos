/**
 * TodoMain组件
 */
import React, {Component, PropTypes} from 'react';
import TodoItem from '../TodoItem/TodoItem'
import './main.css'

class TodoMain extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }

  render() {
    const todos = this.props.todos;
    return (
      <ul className="todo-main">
        {
          todos.map((todo, index)=>{
            return <TodoItem key={index} index={index} todo={todo} {...this.props}/>
          })
        }
      </ul>
    )
  }
}

export default TodoMain;