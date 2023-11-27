import React from "react";

export default function Index() {
  return (
    <>
      <div classname="container px-4 px-lg-5">
        <div classname="row gx-4 gx-lg-5 justify-content-center">
          <div classname="col-md-10 col-lg-8 col-xl-7">
            {/* Post preview*/}
            <div classname="post-preview">
              <a href="post.html">
                <h2 classname="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 classname="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p classname="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on September 24, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
