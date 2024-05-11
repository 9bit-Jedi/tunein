import { Home } from '@mui/icons-material';
import React, {Component} from 'react'
import RoomJoinPage from './roomjoinpage';
import CreateRoomPage from './createroompage';
import NavigationBar from './navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element = {<h1>This is HomePage</h1> } />
          <Route path="/create" element={<CreateRoomPage/>} />
          <Route path="/join" element={<RoomJoinPage/>} />
        </Routes>
      </Router>


    );
  }
}