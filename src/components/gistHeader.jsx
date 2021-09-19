import React, { Component } from "react";
/**
 * GitHub Gist Assesment by Axonista
 * Author: Uthej Goud
 * goudtigulla@gmail.com
 */
/**
 * Gist Display is a child of GistContainer which is responsible for rendering the
 * owner details and description of the current Gist.
 */

function GistHeader(props) {
  //console.log(props);
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col nd">
          <div className="container-fluid nd">
            <div className="row">
              <span className="col-3 col-sm-2 col-md-1">
                <img
                  src={props.owner.avatar_url}
                  alt=""
                  className="avatarImage"
                />
              </span>
              <div className="col-9 col-sm-3 col-md-4">
                <div className="row nameDate">{props.owner.login}</div>
                <div className="row timeElapse">
                  {calcTimeInterval(props.createdAt)}
                </div>
              </div>
              <div className="col-8 col-sm-7 col-md-7 d-none d-md-block text-end">
                {props.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function calcTimeInterval(createdAt) {
  var today = new Date();
  var createdAt = new Date(createdAt);

  var timeInMins = Math.ceil((today - createdAt) / (1000 * 60));
  var timeElapsed = "";
  if (timeInMins < 60) {
    timeElapsed = timeInMins + " mins ago";
  } else if ((timeInMins >= 60) & (timeInMins < 1440)) {
    timeInMins = Math.ceil(timeInMins / 60);
    timeElapsed = timeInMins + " hours ago";
  } else {
    timeInMins = Math.ceil(timeInMins / (60 * 24));
    timeElapsed = timeInMins + "days ago";
  }
  return timeElapsed;
}

export default GistHeader;
