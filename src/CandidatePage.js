import React, { Component } from 'react';
import * as QueryString from 'query-string';


const ErrorPage = <h2>Error: No Candidate Provided</h2>;

class CandidatePage extends Component {
  constructor(props) {
    super(props);
    var queryString = window.location.search;
    var queryParsed = QueryString.parse(queryString);
    var mainView = ErrorPage;

    if (queryParsed.id !== undefined) {
      mainView = <h2>{queryParsed.id}</h2>;
    }

    this.state = {id: queryParsed, view: mainView}
  }

  componentDidMount() {
    console.log("mounted page")
    console.log(this.state.id)
  }

  render() {
    return this.state.view;
  }
}


export default CandidatePage;