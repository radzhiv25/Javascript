// //import User from "./script.js";

// const User = require("./script.js");

// const rajeev = new User("Rajeev","radzhivkrishna@gmail.com");

// console.log(rajeev.getInfo());
// rajeev.enrollCourse("Javascript Course");
// rajeev.enrollCourse("React Course");

// console.log(rajeev.getCourseList());

// let courses = rajeev.getCourseList();

// courses.forEach((c)=>console.log(c));

let myTodos = {
    day : "Monday",
    meetings : 0,
    meetDone : 0
}

let addMeeting = (todo, meet = 0) => {
    todo.meetings = todo.meetings + meet;
}
let meetDone = (todo, meet = 0) =>{
    todo.meetDone = todo.meetDone - meet;
}
let reset = (todo) => {
    todo.meetings  = 0;
    todo.meetDone = 0;
}
let getSummaryOfDay = (todo) => {
    let meetLeft = todo.meetings + todo.meetDone; 
    return `You have ${meetLeft} meetings today!`
}

addMeeting(myTodos, 4);
addMeeting(myTodos, 5);
meetDone(myTodos,3);
console.log(myTodos);
console.log(getSummaryOfDay(myTodos));