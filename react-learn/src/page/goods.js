import React from 'react';
import React, { Component } from 'react';
class Goods extends Component {
    render() {
        return (
            <ul className="goods">
                {
                    this.props.list.map((ele,idx)=>(
                        <li key={idx} style={{marginBottom:20,listStyle:'none'}}>
                            <span>{ele.name}</span>
                            <span>￥ {ele.price}</span>
                            <span>剩余 {ele.amount}</span>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default Goods;