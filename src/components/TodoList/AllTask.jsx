import React from "react";

function AllTask() {
  return (
    <div className="d-flex justify-content-center align-items-center" >
      <div id="AllTask">
        <table className="table table-responsive table-striped text-center">
          <thead>
            <tr className="table-dark">
              <th scope="col">Sr No</th>
              <th scope="col">Task</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <th scope="row">1</th>
              <td>Working on the Redux </td>
              <td>31-10-2023</td>
              <td>12:03AM</td>
              <td>
                <button className="btn btn-success mx-2">Delete</button>
                <button className="btn btn-danger">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTask;
