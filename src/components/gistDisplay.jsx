import React from "react";

/**
 * GitHub Gist Assesment by Axonista
 * Author: Uthej Goud
 * goudtigulla@gmail.com
 */
/**
 * Gist Display is a child of GistContainer which is responsible for rendering the
 * text in a card element with line numbers.
 */

function dispAsParagraph(props) {}

function GistDisplay(props) {
  dispAsParagraph(props);
  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <div className="card sideTextBar mt-2" data-testid="textContent">
          {props.text.map((line, index) => {
            //console.log(line, line.length);
            return (
              <div className="row" key={index}>
                <div className="col-1 d-none d-sm-block sideText">
                  <pre className="gistPrint">{index + 1}</pre>
                </div>
                <div className="col-11">
                  <pre className="gistPrint">{line}</pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GistDisplay;
