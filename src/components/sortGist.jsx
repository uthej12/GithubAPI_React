import React, { Component } from "react";
/**
 * GitHub Gist Assesment by Axonista
 * Author: Uthej Goud
 * goudtigulla@gmail.com
 */
/**
 * This is a child component of GistList responsible for sorting.
 * This component renders the sortby dropdown and calls back to parent
 * on change of type of sort.
 */

class SortGist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reverse: false };
  }

  OnTrigger(x) {
    //this will be triggered on click sort and callback will be sent to parent GistList
    this.setState({ reverse: x });
    this.props.parentCallback(x);
  }

  render() {
    return (
      <div className="dropdown ">
        <button
          className="btn btn-secondary dropdown-toggle sort"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-testid="dropdownButton"
        >
          Sort By
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              onClick={() => {
                this.OnTrigger(false);
              }}
              data-testid="dropdownOption1"
            >
              Newest first
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => {
                this.OnTrigger(true);
              }}
              data-testid="dropdownOption2"
            >
              Oldest first
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default SortGist;
