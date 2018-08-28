import React, { Component } from 'react';
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {welcome:'欢迎访问'  };
    }
    render() {
        return (
            <h1>{this.state.welcome}</h1>
        );
    }
}

export default Welcome;