import React, { Component } from 'react';
import './App.css';
import PhotoMenu from "./component/nav";

const LIST=[{
  content:'首页',
  url:'/'
},{
  content:'上传图片',
  url:'/upload'
}]
class App extends Component {
  render() {
    return (
      <PhotoMenu list={LIST} />
    );
  }
}

export default App;
