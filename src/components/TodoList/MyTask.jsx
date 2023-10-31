import React from "react";
import { Link, Outlet } from "react-router-dom";
function MyTask() {
  return (
    <>
      <div id="newMyTask">
        <div className="container">
          <div id="mytask">
            <h3 className="text-center pb-2">My task</h3>
            <div className="mb-3 d-flex justify-content-center">
              <input
                type="text"
                placeholder="Enter your task"
                className="form-control w-75"
              />
              <button className="btn btn-success mx-3">Add task</button>
            </div>

            <div id="buttonSection" className="d-flex justify-content-center">
              <Link to="alltask" className="btn btn-danger">
                All Task
              </Link>
              <Link to="pendingtask" className="btn btn-success mx-3">
                Pending Task
              </Link>
              <Link to="completedtask" className="btn btn-warning">
                Completed Task
              </Link>
            </div>
            <div className="showData">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyTask;
