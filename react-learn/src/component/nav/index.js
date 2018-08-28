import React from 'react';
import './index.css';
const Nav=props =>(
    <ul className="nav">
    {
        props.list.map((ele,idx)=>(
            <li key={idx}>{ele.text}></li>
        ))
    }
    
    </ul>
)
export default Nav;
