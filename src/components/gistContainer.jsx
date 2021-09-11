import React, { Component } from "react";
import GistDisplay from "./gistDisplay";
import GistHeader from "./gistHeader";

/**
 * GitHub Gist Assesment by Axonista
 * Author: Uthej Goud
 * goudtigulla@gmail.com
 */
/**
 * GistContainer component is a child of GistList is responsible for rendering the actual gist content.
 * This component makes a request to the server to get the contents of the first file
 * in the current gist. The details of the gist are forwarded from its parent GistList
 * as props.
 * It has two child components which are GistHeader and GistDisplay
 */

class GistContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      text: [],
    };
  }

  componentDidMount() {
    //Loads the contents of the file and splits it into a array where each array represents a line
    fetch(this.getTextURl())
      .then((res) => res.text())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            text: result.split("\n"),
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

  getTextURl() {
    //gets the URL for the first file in the gist files.
    const fileNames = Object.keys(this.props.gist.files);
    const textURL = this.props.gist.files[fileNames[0]].raw_url;
    return textURL;
  }

  getFileName() {
    //Gets the name of the first file in the files uploaded in the current gist.
    const fileNames = Object.keys(this.props.gist.files);
    return fileNames[0];
  }

  maxLines(arr) {
    //This function returns the first 15 lines of a file to display on screen.
    if (arr.length >= 15) return arr.slice(0, 15);
    else return arr;
  }

  render() {
    return (
      <div className="card gc p-2 m-3">
        <GistHeader
          owner={this.props.gist.owner}
          filename={this.getFileName()}
          createdAt={this.props.gist.created_at}
          description={this.props.gist.description}
        />
        <GistDisplay text={this.maxLines(this.state.text)} />
      </div>
    );
  }
}

export default GistContainer;
