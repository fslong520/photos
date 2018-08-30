import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:'',
         };
    }
    // 在模块加载之前加载api获取数据
    componentDidMount(){
        this.serverRequest=$.ajax({
			url: this.props.source,
			type: "GET",
			data: {},
			success: function (result) {
				this.setState({
					data:result,
				});
			}.bind(this)
		});
    }
    componentWillUnmount(){
		this.serverRequest.abort();
	}
    render() {
        return (
            <div>
                <p>
                    {this.props.data}
                </p>
            </div>
        );
    }
}

export default HomePage;