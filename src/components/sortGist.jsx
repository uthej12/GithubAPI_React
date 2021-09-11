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
      <div class="dropdown ">
        <button
          class="btn btn-secondary dropdown-toggle sort"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By
        </button>
        <ul class="dropdown-menu">
          <li>
            <button
              class="dropdown-item"
              onClick={() => {
                this.OnTrigger(false);
              }}
            >
              Newest first
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              onClick={() => {
                this.OnTrigger(true);
              }}
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
