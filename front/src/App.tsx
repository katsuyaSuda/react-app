import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          <ul>
            <li>
              <Link to="login">ログイン</Link>
            </li>
            <li>
              <Link to="page1">Sample Page1</Link>
            </li>
            <li>
              <Link to="page2">Sample Page2</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
