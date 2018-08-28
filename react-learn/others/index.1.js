import './index.css';
import ReactDOM from 'react-dom';
import  React, { Component } from 'react';
import $ from 'jquery';

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
	constructor(props){
		super(props);
		this.state={isLooggedIn:false}
	}
	handleLoginClick(){
		this.setState({isLooggedIn:true});
	}
	handleLogoutClick(){
		this.setState({isLooggedIn:false});
	}
	render() {
		const isLooggedIn=this.state.isLooggedIn;
		let button=null;
		if (isLooggedIn){
			button=<LogoutButton onClick={this.handleLogoutClick.bind(this)}/>;
		}
		else{
			button=<LoginButton onClick={this.handleLoginClick.bind(this)}/>;
		}
		/* 
		//也可以使用三目运算符：
		return(
			<div>
			{isLoggedIn?(
				<LogoutButton onClick={this.handleLogoutClick.bind(this)}/>
			):(
				button=<LoginButton onClick={this.handleLoginClick.bind(this)}/>
			)}
			</div>
		)
		*/
		return (
			<div>
				<Greeting isLooggedIn={isLooggedIn}/>
				{button}				
			</div>
		);
	}
}
function LoginButton(params) {
	return (
		<button onClick={params.onClick}>
		登陆
		</button>
	)
	
}
function LogoutButton(params) {
	return(
		<button onClick={params.onClick}>
		退出
		</button>
	)
	
}
ReactDOM.render(
	<LoginControl/>,
	document.getElementById('example2')
)

function WarningBanner(params) {
	if (!params.warn){
		return null;
	}	
	else{
		return(
			<div className="warning">
			警告!
			</div>
		)
	}
}

export  class Page extends Component {
	constructor(props){
		super(props);
		this.state={showWarning:true}
	}
	handleToggleClick(){
		this.setState(prevState =>({
			showWarning:!prevState.showWarning
		}));
	}
  render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning}/>
				<button onClick={this.handleToggleClick.bind(this)}>
					{this.state.showWarning ? '隐藏':'显示'}
				</button>			
			</div>
		);
  }
}
ReactDOM.render(
	<Page/>,
	document.getElementById('example3')
);
function ListItem(params) {
	return <li>{params.value}</li>;	
}

function  NumberList(params) {
	const numbers = params.numbers;	
	return (
		<ul>
			{numbers.map((number)=>
				<ListItem key={number.toString()} value={number}/>
			)}
		</ul>
	);
}
const numbers=[1,2,3,4,5]
ReactDOM.render(
	<NumberList numbers={numbers}/>,
	document.getElementById('example4')
)

function Blog(params) {
	const sidebar=(
		<ul>
			{params.posts.map((post)=>
				<li key={post.id}>
					{post.title}
				</li>
			)}
		</ul>
	);
	const content=params.posts.map((post)=>
	<div key={post.id}>
		<h3>{post.title}</h3>
		<p>{post.content}</p>
	</div>
	);
	return(
		<div>
			{sidebar}
			<hr/>
			{content}
		</div>
	);
}
const posts=[
	{id:1,title:'Hello world',content:'Welcome to learning React！'},
	{id:2,title:'Installation',content:'You can install React from npm.'}
];
ReactDOM.render(
	<Blog posts={posts}/>,
	document.getElementById('example5')
)


export class Counter extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			clickCount:0
		};		
	}
	handleClick(){
		this.setState(function (params) {
			return {clickCount:params.clickCount+1};
		});
	}
	
	render() {
		return (
			<div>
				<h2 onClick={this.handleClick.bind(this)}>
					点我！点击次数是：{this.state.clickCount}
				</h2>
			</div>
		)
	}
}
ReactDOM.render(
	<Counter/>,
	document.getElementById('example6')
)


export class Hello extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			 opacity:1.0
		};
	}
	componentDidMount(){
		this.timer=setInterval(function () {
			var opacity=this.state.opacity;
			opacity-=0.05;
			if (opacity<0.1){
				opacity=1.0;
			}
			this.setState({
				opacity:opacity
			});			
		}.bind(this),100)
	}
	
	render() {
		return (
			<div style={{opacity:this.state.opacity}}>
				Hello {this.props.name}
			</div>
		);
	}
}
ReactDOM.render(
	<Hello name="world"/>,
	document.getElementById('example7')
)


export class Button extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 data:0
		};
	}
	setNewNumber(){
		this.setState({data:this.state.data+1})
	}
	
	render() {
		return (
			<div>
				<button onClick={this.setNewNumber.bind(this)}>INCREMENT</button>
				<Content myNumber={this.state.data}></Content>
			</div>
		);
	}
}
export class Content extends Component {
	componentWillMount(){
		console.log('Component WILL MOUNT!')
	}
	componentDidMount(){
		console.log('Component DID MOUNT!')
	}
	componentWillReceiveProps(newProps) {
			console.log('Component WILL RECEIVE PROPS!')
	}
	shouldComponentUpdate(newProps, newState) {
			return true;
	}
	componentWillUpdate(nextProps, nextState) {
			console.log('Component WILL UPDATE!');
	}
	componentDidUpdate(prevProps, prevState) {
			console.log('Component DID UPDATE!')
	}
	componentWillUnmount() {
			console.log('Component WILL UNMOUNT!')
	}
	render() {
		return (
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<Button/>
	</div>,
	document.getElementById('example8')
)

export class UserGist extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 username:'',
			 lastGistUrl:'',
		};
	}
	componentDidMount(){
		this.serverRequest=$.ajax({
			url: this.props.source,
			type: "GET",
			data: {},
			success: function (result) {
				var lastGist=result[0];
				this.setState({
					username:lastGist.owner.login,
					lastGistUrl:lastGist.html_url,
				});
			}.bind(this)
		});/*
		this.serverRequest=$.get(this.props.source,function (result) {
			var lastGist=result[0];
			this.setState({
				username:lastGist.owner.login,
				lastGistUrl:lastGist.html_url,
			});			
		}.bind(this));
		*/
	}
	componentWillUnmount(){
		this.serverRequest.abort();
	}
	render() {
		return (
			<div>
				用户<b>{this.state.username}</b>最新的Gist共享地址：
				<a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
			</div>
		);
	}
}
ReactDOM.render(
	<UserGist source="https://api.github.com/users/octocat/gists"/>,
	document.getElementById('example9')
);

class HelloMessage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {value:'Hello Runoob!'};
	}
	handleChange(event){
	  this.setState({value:event.target.value})
	}
	render() {
	  var value=this.state.value;
	  return (
		<div>
		  <input type='text' value={value} onChange={this.handleChange.bind(this)}/>
		  <h4>{value}</h4>
		</div>
	  );
	}
  }
ReactDOM.render(
  <HelloMessage/>,
  document.getElementById('example10')
)
class FlavorForm extends Component {
  constructor(props) {
	super(props);
	this.state = { value:'coconut' };
  }
  handleChange(event){
	this.setState({value:event.target.value});
  }
  handleSubmit(event){
	alert('Your favorite flavor is:'+this.state.value);
	event.preventDefault();
  }
  render() {
	return (
	  <form onSubmit={this.handleSubmit.bind(this)}>
		<label>
		  <select value={this.state.value} onChange={this.handleChange.bind(this)}>
			<option value="gg">Google</option>
			<option value="rn">Runoob</option>
			<option value="tb">Taobao</option>
			<option value="fb">Facebook</option>
		  </select>
		</label>
		<input type="submit" value="提交" />
	  </form>
	);
  }
}
ReactDOM.render(
  <FlavorForm/>,
  document.getElementById("example11")
);


class Reservation extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			isGoing:true,
			numberOfGuests:18
		 };
	}
	handleInputChange(event){
		const target=event.target;
		const value=target.type==='checkbox' ? target.checked:target.value;
		const name=target.name;
		this.setState({
			[name]:value
		});
	}
	render() {
		return (
			<form>
				<label>
					是否离开：
					<input 
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange.bind(this)}/>
				</label>
				<br/>
				<label>
					访客数：
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange.bind(this)}
					/>
				</label>
			</form>
		);
	}
}

ReactDOM.render(
	<Reservation />,
	document.getElementById('example12')
);


class HelloMessage1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value:'Hello Runoob'
		  };
	}
	handleChange(event){
		this.setState({value:'菜鸟教程'})
	}
	render() {
		var value=this.state.value;
		return (
			<div>
				<button onClick={this.handleChange.bind(this)}>点我</button>
				<h4>{value}</h4>
			</div>
		);
	}
}
ReactDOM.render(
	<HelloMessage1/>,
	document.getElementById('example13')
)


class Content1 extends Component {
	
	render() {
		return (
			<div>
				<button onClick={this.props.updateStateProp}>
					点我
				</button>
				<h4>{this.props.myDataProp}</h4>
			</div>
			
		);
	}
}
class HelloMessage2 extends Component {
	constructor(props) {
		super(props);
		this.state = { value:'Hello Runoob!' };
	}
	handleChange(event){
		this.setState({value:'哈哈哈'})
	}
	render() {
		var value=this.state.value;
		return (
			<div>
				<Content1 myDataProp={value}
					updateStateProp={this.handleChange.bind(this)}></Content1>
			</div>
		);
	}
}

ReactDOM.render(
	<HelloMessage2/>,
	document.getElementById('example14')
)

class MyComponent extends Component {
	handleClick(){
		this.refs.myInput.focus();
	}
	render() {
		return (
			<div>
				<input type="text" ref="myInput"/>
				<input 
					type="button"
					value="点我输入框获取焦点"
					onClick={this.handleClick.bind(this)}
				/>
			</div>			
		);
	}
}
ReactDOM.render(
	<MyComponent />,
	document.getElementById('example15')
)