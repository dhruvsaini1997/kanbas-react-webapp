import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";


function CourseNavigation() {
  const links = [
    "Home", 
    "Modules", 
    "Assignments", 
    "Grades",
    "People",
    "PanoptoVideos",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navigation d-sm-none d-md-none d-lg-block">
      <div className="list-group" style={{ width: 150 }}>
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}
              className={`list-group-item ${pathname.includes(link) && "active"}`}>
              {link}
            </Link>
          ))}
        </div>
    </div>
   
  );
}


export default CourseNavigation;