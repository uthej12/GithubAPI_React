import React, { Component } from "react";
import GistContainer from "./gistContainer";
import Pagination from "./Pagination";
import SortGist from "./sortGist";
/**
 * GitHub Gist Assesment by Axonista
 * Author: Uthej Goud
 * goudtigulla@gmail.com
 */
/**
 * GistList is a child component of App
 * GistList has 3 child components, SortGist, GistList and Pagination
 * This is the component that is responsible for displaying all the Gists
 * This component is also responsible for making a request to the server
 * to get all the relavent gists.
 */

class GistList extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Gist Container intinitalized");
    this.state = {
      error: null,
      isLoaded: false,
      gists: [],
      pageNo: 0,
      postsPerPage: 10,
      totalPages: 10,
      reverse: false,
    };
  }
  componentDidMount() {
    //Gets 100 gists for demonstration purposes
    fetch("https://api.github.com/gists/public?per_page=100")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            gists: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleCallback = (childData) => {
    //Handles page change from Pagination component
    this.setState({ pageNo: childData });
  };

  handleSort = (type) => {
    //handels sort functionality form SortGist component
    if (type != this.state.reverse) {
      this.setState({ gist: this.state.gists.reverse(), reverse: type });
    }
  };

  getCurrentPage() {
    //caluculates the gists that have to be displayed on the current page
    var startIndex = this.state.pageNo * this.state.postsPerPage;
    var endIndex = (this.state.pageNo + 1) * this.state.postsPerPage;
    var thisPage = this.state.gists.slice(startIndex, endIndex);
    return thisPage;
  }

  render() {
    this.getCurrentPage();
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="container d-flex justify-content-end p-3">
            <SortGist parentCallback={this.handleSort} />
          </div>
          {this.getCurrentPage().map((gist) => (
            <div className="container d-flex justify-content-center p-3">
              <GistContainer key={gist.id} gist={gist} />
            </div>
          ))}
          <div className="container d-flex justify-content-center p-3">
            <Pagination
              pageNo={this.state.pageNo}
              totalPages={this.state.totalPages}
              parentCallback={this.handleCallback}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GistList;
