import React from 'react';
import {Menu, MenuItem } from "hana-ui";
import 'hana-ui/hana-style.scss';
import "./index.css";



const PhotoMenu = (props) => (
    <div className="nav">                
        <Menu auto horizonal type="linear" value="Activities">
            {
                props.list.map((ele,idx) => (
                    <MenuItem key={idx}>{ele.content}</MenuItem>
                ))
            }
        </Menu>        
    </div>

);


export default PhotoMenu;