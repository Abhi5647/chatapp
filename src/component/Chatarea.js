import React from "react";
import "./../css/chatarea.css";
export const Chatarea = () => {
  return (
    <div className="container chatarea rounded">
      <div className="column">
        <div className="col-md-12 reply">
          <textarea
            name=""
            id=""
            cols="95"
            rows="2"
            className="rounded my-1 "
          ></textarea>
          <button type="submit" className="submit rounded ">
            Send{" "}
          </button>
        </div>
        <hr />
        <div className="col-md-12">
          <div class="row box">
            <div className="col-md-12">
              <div class="col-sm-6 chatLeft">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
            <div class="col-sm-6 chatRight"><div class="card"></div></div>
              <div class="col-sm-6 chatRight">
              <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
