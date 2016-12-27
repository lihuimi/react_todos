/**
 * TodoHeader 组件
 */
import React, {Component,PropTypes} from 'react';
import './header.css'

class TodoHeader extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  //回车添加todo
  addTodo = (e)=>{
    let title = e.target.value.trim();
    if(title === ''){
      return;
    }
    if(e.keyCode === 13){
      let todo = {
        isDone: false,
        title: title
      }
      this.props.addTodo(todo);
      e.target.value = '';
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认"
               ref='title' onKeyUp={this.addTodo}/>
      </div>
    )
  }
}

export default TodoHeader;