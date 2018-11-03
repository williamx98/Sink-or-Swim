import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Candidate from './components/Candidate.js'

var Parse = require('parse/node');



class App extends Component {
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
    Parse.initialize("moodyhack2018", "myMasterKey");
    Parse.serverURL = "https://moodyhack2018.herokuapp.com/parse";
    this.logIn("asdf","asdf");
  }

  componentDidMount() {
    console.log("mounted")
  }

  render() {
    return (
      <div className="App">
        <Candidate />
      </div>
    );
  }
}


export default App;
