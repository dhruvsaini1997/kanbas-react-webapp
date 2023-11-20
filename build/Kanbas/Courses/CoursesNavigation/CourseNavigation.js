export default function CourseNavigation(active) {
    const links = [
        { name: "Home", url: "/Kanbas/Courses/Home/screen.html" },
        { name: "Modules", url: "/Kanbas/Courses/Modules/index.html" },
        { name: "Piazza", url: "#" },
        { name: "Zoom Meetings", url: "#" },
        { name: "Assignments", url: "/kanbas/Courses/Assignments/screen.html" },
        { name: "Quizzes", url: "#" },
        { name: "Grades", url: "/kanbas/Courses/Grades/screen.html" },
        { name: "People", url: "#" },
        { name: "Panopto Video", url: "#" },
        { name: "Discussions", url: "#" },
        { name: "Announcements", url: "#" },
        { name: "Pages", url: "#" },
        { name: "Files", url: "#" },
        { name: "Rubrics", url: "#" },
        { name: "Outcomes", url: "#" },
        { name: "Collaborations", url: "#" },
        { name: "Syllabus", url: "#" },
        { name: "Settings", url: "/kanbas/Courses/Settings/screen.html" }
    ];

    return `
    <ul class="wd-course-navigation">
    ${links.map(
        (link) =>
            `<li class="${link.name === active ? "wd-active" : ""}">
                <a href="${link.url}">${link.name}</a>
            </li>`
    ).join("")}
    </ul>`;
}
