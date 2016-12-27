/**
 * TodoFooter 组件
 */
import React,{Component, PropTypes} from 'react';
import './footer.css';

class TodoFooter extends Component{
  static propTypes = {
    totalCount: PropTypes.number.isRequired,
    doneCount: PropTypes.number.isRequired,
    isAllChecked: PropTypes.bool.isRequired,
    deleteAllDone: PropTypes.func.isRequired,
    changeAllDone: PropTypes.func.isRequired
  }

  //删除选中的事项
  deleteAllDone = ()=>{
    this.props.deleteAllDone();
  }

  //更新全选状态
  changeAllChecked = ()=>{
    const {isAllChecked, changeAllDone} = this.props;
    changeAllDone(!isAllChecked);
  }

  render(){
    const {totalCount, doneCount, isAllChecked} = this.props;
    return(
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={isAllChecked} onChange={this.changeAllChecked} ref="isChecked"/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button className="btn btn-danger" onClick={this.deleteAllDone}>清除已完成任务</button>
      </div>
    )
  }
}

export default TodoFooter;