import React, { Component } from "react";
/**
 * GitHub Gist Assesment by Axonista
 * Author: Uthej Goud
 * goudtigulla@gmail.com
 */
/**
 * Pagination is a child component of GistList and is esponsible for pagination
 * This component renders the pagination UI and handels page change by calling
 * back to GistList to change the gists displayed.
 */

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: this.props.totalPages,
      pageNo: this.props.pageNo,
    };
  }
  createPageArray(num) {
    //Use to create a array of page numberes i.e 1,2,3,4,5..
    const Pages = Array.from(Array(num).keys());
    return Pages;
  }

  OnTrigger(x) {
    //this will be triggered on click of different page number and callback will be sent to parent GistList
    //console.log("Go to ", x);
    this.setState({ pageNo: x });
    this.props.parentCallback(x);
  }

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="container d-flex justify-content-center p-3">
            <nav className="Pagination">
              <ul className="pagination">
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() =>
                      this.OnTrigger(Math.max(0, this.state.pageNo - 1))
                    }
                    data-testid="prev"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                {this.createPageArray(this.state.totalPages).map((PageNo) => {
                  if (PageNo === this.state.pageNo) {
                    return (
                      <li
                        key={PageNo}
                        className="page-item active showWhen"
                        data-testid="activePage"
                      >
                        <button className="page-link" href="#">
                          {PageNo + 1}
                        </button>
                      </li>
                    );
                  } else {
                    return (
                      <li key={PageNo} className="page-item showWhen">
                        <button
                          className="page-link"
                          onClick={() => this.OnTrigger(PageNo)}
                        >
                          {PageNo + 1}
                        </button>
                      </li>
                    );
                  }
                })}
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() =>
                      this.OnTrigger(
                        Math.min(
                          this.state.totalPages - 1,
                          this.state.pageNo + 1
                        )
                      )
                    }
                    data-testid="next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
