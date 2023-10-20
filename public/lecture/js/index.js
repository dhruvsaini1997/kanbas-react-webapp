
toDoList = [
    {id:1,name:"dhruv saini"},
    {id:2, name:"mumuksha pant"}
];
function renderToDo(toDoList){
document.write("<ul>");
    toDoList.forEach(element => {
        document.write(`<li>${element.name}</li>`)
    });
    document.write("</ul>")
};
renderToDo(toDoList);



toDoList2 = [
    {id:1,name:"complete work"},
    {id:2, name:"mumuksha pant"}
];

renderToDo(toDoList2);

