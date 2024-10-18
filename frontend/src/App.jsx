import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import 'vite/modulepreload-polyfill';
import Homepage from './components/Homepage';
import RoomJoinPage from './components/RoomJoinPage';
import CreateRoomPage from './components/CreateRoomPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/create-room" element={<CreateRoomPage />} />
        <Route path="/join-room" element={<RoomJoinPage />} />
      </Routes>
    </>
  );
};

export default App;
