import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends React.Component{
  constructor(){
    super();
    this.TodoItems=[
     {title: 'Doan Tien Thanh',isComplete:true},
     {title: 'thanh doan'},
     {title:'Sân cỏ'}
    ];
}
render(){
    return (
      <div className="App">
        {
          this.TodoItems.map((item, index)=>(<TodoItem key={index} item={item}/>))
        }
        
      </div>
    );
}
}
export default App;
