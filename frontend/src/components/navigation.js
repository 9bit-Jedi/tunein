import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";


export default class NavigationBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
        <ul className='nav-bar'>
          <li>
            <NavLink className={({ isActive }) => {return isActive ? "active" : "";}} to='/' >Homepage</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => {return isActive ? "active" : "";}} to='/create' >Create</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => {return isActive ? "active" : "";}} to='/join' >Join</NavLink>
          </li>
        </ul>
      </>
    )
  }
}