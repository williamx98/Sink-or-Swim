import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Candidate from './components/Candidate.js'

var Parse = require('parse/node');

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;


class App extends Component {
  initializeParse() {
    Parse.initialize("moodyhack2018", "myMasterKey");
    Parse.serverURL = "https://moodyhack2018.herokuapp.com/parse";
  }

  async makeUser(username, password) {
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    try {
      await user.signUp();
      console.log("Signed up AND logged in");
    } catch (error) {
      console.log(error);
    }
  }

  async logIn(username, password) {
    try {
      await Parse.User.logIn(username, password);
      console.log("logged in successful");
    } catch (error) {
      console.log(error);
    }
  }

  constructor(props) {
    super(props);
    this.initializeParse();
    this.logIn("username","password");
  }

  componentDidMount() {
    console.log("mounted")
  }

  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Candidate} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>

    );
  }
}


export default App;
