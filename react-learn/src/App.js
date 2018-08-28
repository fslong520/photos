import React, { Component } from 'react';
import Nav from './component/nav';
import Welcome from './page/welcome';
import Goods from './page/goods';
import './App.css';


const LIST=[{
  text:'welcome',
  url:'/welcome'
},{
  text:'goods',
  url:'/goods'
}]
const GOODS=[{
  name:'iPhone 7',
  price:'6,888',
  amount:37
},{
  name:'iPad',
  price:'3488',
  amount:82
},{
  name:'MacBook Pro',
  price:'11,888',
  amount:15
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav_bar">
          <Nav list={LIST} />
        </div>
        <div className="content">
          <Welcome />
          <Goods list={GOODS} />
        </div>
      </div>
      
    );
  }
}

export default App;