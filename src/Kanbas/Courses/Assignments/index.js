import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6"
import {AiOutlineCheckCircle} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentReducer";

function Assignments() {
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);

  const dispatch = useDispatch();

  const { courseId } = useParams();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("CreateAssignment");
  };

  const handleDelete = (assignmentId) => {
    const confirmation = window.confirm("Are you sure you want to remove this assignment?");
    if (confirmation) {
        dispatch(deleteAssignment(assignmentId)); // Assuming you have a deleteAssignment action
    }
};

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);


  return (
    <div>


      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">

        {/* <!-- Third column --> */}
        <div class="wd-flex-grow-1">
              {/* <!-- buttons on top --> */}
              <div class="d-flex justify-content-between">
                  <input type="text" id="searchassignments"
                  placeholder="Search for Assignments" class="form-control w-25"/>
      
                  <div class="d-flex">
                      <button type="button" class="btn btn-light">Group</button>
                      <button type="button" class="btn btn-danger"  onClick={handleButtonClick}>Assignment</button>
                      <button type="button" class="btn btn-light">
                        <FaEllipsisVertical />
                      </button>
                  </div>
              </div>
              <hr />
              {/* <!-- Assignments --> */}
              <ul class="list-group rounded-0">
                  <li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">ASSIGNMENTS
                      <div class="d-flex justify-content-between">
                          <span class="ps-2 badge badge-pill badge-dark rounded">40% of Total</span>
                          <AiOutlineCheckCircle className="fa-check-circle"/>
                          <FaEllipsisVertical/>
                      </div>
                  </li>
              </ul>
        </div>
        {courseAssignments.map((assignment) => (
          <div>
          <Link
          key={assignment._id}
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          className="list-group-item">
          {/* Assignments */}
          <a href="/kanbas/assignments/edit.html" class="list-group-item list-group-item-action ps-5 d-flex justify-content-between flex-column align-items-start">

              <div class="d-flex w-100 justify-content-between">
               
              <h5 class="mb-1">{assignment.title}</h5>
              <small class="text-muted">
                <AiOutlineCheckCircle className="fa-check-circle"/>
                <FaEllipsisVertical/>
              </small>
              </div>
          <p class="mb-1">{assignment.course}</p>
          <small class="text-muted">Due {assignment.duedate}</small>
          </a>
                  

        </Link>
          <button className="btn btn-danger my-2 mx-4 float-end" style={{ fontSize: "12px" }} onClick={() => dispatch(deleteAssignment(assignment._id))}>Delete</button> 
        </div>
        
      ))}
      </div>

    </div>
  );
}
export default Assignments;

