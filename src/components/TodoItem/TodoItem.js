/**
 * TodoItem组件
 */
import React,{Component, PropTypes} from 'react';
import './item.css'

class TodoItem extends Component{

  //规范传输数据的格式和必要性
  static propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    updateIsDone: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  //更新todo的选中状态
  updateIsDone = ()=>{
    const {todo, updateIsDone} = this.props;
    todo.isDone = !todo.isDone;
    updateIsDone();
  }

  //鼠标进入指定todo显示删除按钮和背景颜色改变
  handleEnter = ()=>{
    this.refs.li.style.backgroundColor = '#ccc';
    this.refs.btn.style.display = 'block';
  }

  //鼠标离开时
  handleLeave = ()=>{
    this.refs.li.style.backgroundColor = '#fff';
    this.refs.btn.style.display = 'none';
  }

  //删除指定todo
  deleteTodo = ()=>{
    const {todo,index, deleteTodo} = this.props;
    if(confirm(`确定要删除${todo.title}吗？`)){
      deleteTodo(index);
    }
  }

  render(){
    const {title, isDone} = this.props.todo;
    return(
      <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} ref='li'>
        <label>
          <input type="checkbox" checked={isDone} onChange={this.updateIsDone}/>

          <span>{title}</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}
               ref='btn' onClick={this.deleteTodo}>删除</button>
      </li>
    )
  }
}

export default TodoItem;