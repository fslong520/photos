import React, { Component } from 'react';
import Nav from './component/nav';
import Welcome from './page/welcome';
import Goods from './page/goods';
import './App.css';
import { Route } from "react-router-dom";

const LIST=[{
  text:'欢迎',
  url:'/welcome'
},{
  text:'商品',
  url:'/goods'
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav_bar">
          <Nav list={LIST} />
        </div>
        <div className="content">
          <Route path='/welcome' component={Welcome}/>
          <Route path='/goods' component={Goods}/>
        </div>
      </div>
      
    );
  }
}

export default App;