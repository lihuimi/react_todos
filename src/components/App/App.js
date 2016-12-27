/**
 * App应用组件
 */
import React, {Component} from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoMain from '../TodoMain/TodoMain'
import TodoFooter from '../TodoFooter/TodoFooter'
import './app.css'

class App extends Component {
  //初始化数据
  constructor(props){
    super(props);
    this.state = {
      todos:[{isDone: false, title: '吃饭'}, {isDone: false, title: '睡觉'}],
      isAllChecked: false
    };
  }
  //添加todo
  addTodo = (todo)=>{
    const todos = this.state.todos;
    todos.unshift(todo);
    this.setState({
      todos,
      isAllChecked: false
    })
  }

  //todo的完成数量
  getDoneCount = ()=>{
    const todos = this.state.todos;
    let todoDone = todos.filter((todo)=>{
      return todo.isDone;
    })
    return todoDone.length;
  }

  //修改isDone状态
  updateIsDone = ()=>{
    const todos = this.state.todos;
    let doneCount = this.getDoneCount();
    let isAllChecked = doneCount === todos.length && todos.length > 0;
    this.setState({
      todos,
      isAllChecked
    })
  }

  //删除指定todo
  deleteTodo = (index) => {
    const todos = this.state.todos;
    todos.splice(index,1);
    let doneCount = this.getDoneCount();
    let isAllChecked = doneCount === todos.length && todos.length > 0;;
    this.setState({
      todos,
      isAllChecked
    })
  }

  //删除所有完成的todos
  deleteAllDone = () => {
    const todos = this.state.todos;
    let doneCount = this.getDoneCount();
    if(doneCount === 0){
      alert('请选择要删除的事项');
      return;
    }
    if(confirm('确定要删除吗？')){
      const newTodos = todos.filter((todo,index)=>{
        return !todo.isDone
      })
      this.setState({
        todos: newTodos,
        isAllChecked: false
      })
    }
  }

  //点击全选按钮
  changeAllDone = (isAllChecked) => {
    const todos = this.state.todos;
    todos.forEach((todo, index)=>{
      todo.isDone = isAllChecked;
    })
    this.setState({
      todos,
      isAllChecked
    })
  }

  render() {
    //mian标签的props参数
    const mainProps = {
      todos: this.state.todos,
      updateIsDone: this.updateIsDone,
      deleteTodo: this.deleteTodo
    }
    //footer标签的props参数
    const footerProps = {
      deleteAllDone: this.deleteAllDone,
      totalCount: this.state.todos.length,
      doneCount: this.getDoneCount(),
      changeAllDone: this.changeAllDone,
      isAllChecked:this.state.isAllChecked
    }

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoHeader addTodo={this.addTodo}/>
          <TodoMain {...mainProps}/>
          <TodoFooter {...footerProps}/>
        </div>
      </div>
    )
  }
}

export default App;