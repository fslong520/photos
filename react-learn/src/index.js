import './index.css';
import ReactDOM from 'react-dom';
import  React, { Component } from 'react';

export class Name extends Component {
	render() {
		return (
			<h1>{this.props.name}</h1>
		)
	}
}

export class Link extends Component {
	render() {
		return (
			<a href={this.props.site}>
				{this.props.site}
			</a>
		)
	}
}


export default class Website extends Component {
	constructor() {
		super()
	
		this.state = {
			name:"菜鸟教程",
			site:"https://www.runoob.com"			 
		}
	}
	
  render() {
    return (
      <div>
				<Name name={this.state.name}/>
				<Link site={this.state.site}/>        
      </div>
    )
  }
}

ReactDOM.render(
	<Website/>,
	document.getElementById('root')
)

class Toggle extends Component {
	constructor(props) {
		super(props)	
		this.state = {isToggleOn:true};		
}
	handleClick(para){
		this.setState(prevState =>({
			isToggleOn:!prevState.isToggleOn
		}));
		alert('hello,'+para)
	}
	
	render() {
		return (
			<button onClick={this.handleClick.bind(this,'fslong')}>
				{this.state.isToggleOn ? 'ON':'OFF'}{/*使用三元比较，如果tistoggleon为true那么这里显示on其余显示off*/}
			</button>
		)
	}
}
ReactDOM.render(
	<Toggle />,
	document.getElementById('example')
)


function UserGreeting(params) {
	return <h1>欢迎回来!</h1>;
}
function GuestGreeting(params) {
	return <h1>请先注册!</h1>;
}
function Greeting(params) {
	const isLooggedIn=params.isLooggedIn;
	if (isLooggedIn){
		return <UserGreeting/>;
	}
	else{
		return <GuestGreeting/>;
	}
}
ReactDOM.render(
	<Greeting isLooggedIn={true}/>,
	document.getElementById('example1')
)

export class LoginControl extends Component {
	handle
	render() {
		return (
			<div>
				
			</div>
		)
	}
}
