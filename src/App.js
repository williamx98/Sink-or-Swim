import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Candidate from './components/Candidate.js'

var Parse = require('parse/node');

const CandidatePage = () => <CandidatePage/>;
const Users = () => <h2>Topics</h2>;
const Index = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      {/* Change this link to set query string*/}
      <Link to="/candidate?id=1234">Candidate ID: 1234</Link>
    </li>
  </ul>
);

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
  }

  componentDidMount() {
    console.log("mounted")
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/candidate" component={Candidate} />
          <Route exact path="/topics" component={Users} />
        </div>
      </Router>
    );
  }
}


export default App;
