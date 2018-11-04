import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import Candidate from './components/Candidate.js'
import logo from "./logo.svg"
import navbar from "./navbar.png"
import homeImg from "./home.png"
import './App.css';

var Parse = require('parse/node');
const candidateQuery = Parse.Object.extend("Candidate");

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

  handleCandidateSearchChange(event) {
    this.setState({searchCandidate: event.target.value});
  }

  async handleSearchSubmit(event) {
    console.log(this.state.searchCandidate)
    event.preventDefault();

    var query = new Parse.Query(candidateQuery)
    query.equalTo("first_name", this.state.searchCandidate);
    const results = await query.find();
    var id = "";
    if (results.length !== 0) {
      id = results[0].id
    }

    window.location.href = "/candidate?id=" + id;
  }

  constructor(props) {
    super(props);
    this.initializeParse();

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleCandidateSearchChange = this.handleCandidateSearchChange.bind(this);

    this.state = {searchCandidate: ""}

    this.logIn("username", "password")
  }

  componentDidMount() {
    console.log("mounted")
  }

  render() {
    return (
      <Router>
        <div class="container">
          <Switch>
              <Route exact={true} path="/">
                <div class="App-header">
                  <div>
                    <img src={logo} class="App-logo"/>
                    <div class="searchbar">
                      <ul>
                        <form onSubmit={this.handleSearchSubmit}>
                          <input class="searchfield" placeholder="Search for a politician, lawmaker, or candidate..." type="text" value={this.state.searchCandidate} onChange={this.handleCandidateSearchChange} />
                          <input type="submit" value="Search" class="searchbutton"/>
                        </form>
                      </ul>
                      <img src={navbar} class="navbar"/>
                    </div>
                  </div>
                  <img src={homeImg} class="homeImg"/>
                </div>
              </Route>
            <Route path="/candidate" component={Candidate} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
