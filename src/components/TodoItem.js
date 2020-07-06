import React from 'react';
import './TodoItem.css';
const RED=0;
const ORANGE=1;
const GREEN=2;
class TodoItem extends React.Component {
  
  render() {
      const {item} =this.props;
      let className='TodoItem';
      if(item.isComplete){
          className ='TodoItem-Complete';
      }
    
    return (
    <div className={className}>
        <p>{this.props.item.title}</p>
    </div>
  }

}
export default TodoItem;