import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import HomePage from './homepage.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<>
        <HomePage/>
        <p>code injected from app.js</p>
      </>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App props={{}} />);