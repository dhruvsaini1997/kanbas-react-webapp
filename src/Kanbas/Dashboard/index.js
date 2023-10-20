import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaRegEdit } from 'react-icons/fa';
import cardImg from "../../Images/webdev.png";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <div className="container">
        <h2>Published Course ({courses.length})</h2>
        <div class="row rows-col-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <div class="col">
              <div className="list-group">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                <div class="card h-100">
                  <img class="card-img-top" src={cardImg} alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title wd-title">{course._id}</h5>
                  
                      <b>{course.name} {course.number}</b>
                   
                    <p>{course.startDate} TO {course.endDate}</p>

                    <p class="card-text">{course.description}</p>
                    <FaRegEdit></FaRegEdit>
                  </div>
                </div> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );

}
export default Dashboard;