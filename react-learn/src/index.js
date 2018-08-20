import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function FormattedDate(props){
    return <h2>现在是{props.date.toLocaleDateString()}{props.date.toLocaleTimeString()}</h2>
};
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    };
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),
            1000
        );
    };
    componentWillUnmount(){
        clearInterval(this.timerID);
    };
    tick(){
        this.setState({
            date:new Date()
        });
    };
    render(){
        return(
            <div>
                <h1>Hello,world!</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    };
};
ReactDOM.render(
   <div>
        <Clock/>
        <Clock/>
        <Clock/>
   </div>,
    document.getElementById('example')
);



function HelloMessage(props){
    return <h1>Hello {props.name}!</h1>
};
const element=<HelloMessage name='fslong'/>;

ReactDOM.render(
    element,
    document.getElementById('example')
);