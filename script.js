// // this is like a dialog box which appears while you open the page
// alert("Hello, This is javscript");

console.log("Hello this is Rajeev!");

// var fullName = "Rajeev Krishna";

// how to name variables
// is to the camelCase format

var courseName = "React Js ";

var isLoggedIn = false;
var paymentMode;
paymentMode = "Credit Card";

// const is used for constant values
const uid = "ab123";
var firstName = "Rajeev";
var lastName = "Krishna";
var email = "rajeevkrishna@work.dev";
var password = "1234";
var country = "India";
var isLoggedInFromGoogle = false;

// this is interpolation
console.log(`
The user ID : ${uid}
The first name is : ${firstName}
The last name is : ${lastName}
The email is: ${email}
The password user uses : ${password}
The Country : ${country}
Logged in from google : ${isLoggedInFromGoogle}

`);

var sellPrice = 199;
var listPrice = 899;
// operator usage
var discount = Math.round(((listPrice - sellPrice)/listPrice)*100);

console.log("Discount is : " + discount + "% off");

// data type determination
console.log(typeof country);
console.log(typeof result);
console.log(typeof sellPrice);

// conditionals
var temperature = 20;
if(temperature < 20){
    console.log("Its cold");
}
else if(temperature > 20){
    console.log("The eather is warm");
}
else{
    console.log("The weather is neutral");
}

var gmail = true;
var facebook = false;
var google = false;

if(gmail || facebook || google){
    console.log("Login Success");
};

//ternary operator
var authentication = true;

authentication ? console.log("Sign Out") : console.log("Login In");

//switch 
var user1 = "testprep";
switch(user1){
    case "admin":
        console.log("Allow full access");
        break;
    case "subadmin":
        console.log("Allow access to creare/delete courses");
        break;
    case "testprep":
        console.log("Allow access to create/delete tests");
        break;
    case "user":
        console.log("Allows to consume content");
        break;
    
    default:
        console.log("Trial User");
        break;
}

// functions
function hello(){
    console.log("Hello, Javascript!");
}
hello();

function hello1(name){
    console.log("Hello " + name);
}
hello1("Rajeev");

function namastey(){
    return "Hello in hindi";
}
var greeting = namastey();
console.log(greeting);

function hello2(name1){
    console.log(`Hello there, ${name1}. How are you doin ?`);
}
hello2("Noopur");

function getUserRole(name, role){
    switch(role){
        case "admin":
            return `${name} is admin with full access`
            break; // this is not necessary
        case "subadmin":
            return `${name} has access to create/delete course`
            break; 
        case "testprep":
            return `${name} has acces to create/delete test`
            break;
        case "user":
            return `${name} can consume all content`
            break;

        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Rajeev" , "user"));

// functions declarations are scanned and made available 
// variable declarations are scanned and made undefined
function tipper(a){
    var bill = parseInt(a); // this is for converting any string to number 
    console.log(bill + 10);
}
tipper("20");

var bigTipper = function(b){
    var recipt = parseInt(b);
    console.log(recipt + 30);
}
bigTipper("70");

console.log(this);
// gives a global context

var game = "basketball";
function sayName(){
    var name5 = "Rajeev";
    console.log(this);
}
sayName();

// Array
var countries = ['India', "USA" , "Japan" , "Russia" ];
var states = new Array("Rajasthan", "Delhi" , "Mumbai" , "Chennai");

console.log(states.length);
states[0] ="Punjab";
console.log(states);

var user1 = ["Rajeev", "rajeevkrishna@work.io", 3, 20 ,true];
console.log(user1);
// this removes the last element 
user1.pop();
console.log(user1);

// this adds the element in first 
user1.unshift("new");
console.log(user1);

// this removes the first element
user1.shift();
console.log(user1);

// this show the index
console.log(user1.indexOf(3));

// this converts the string into an array 
console.log(Array.from("Rajeev"));

// arrow function
function isEven(element){
    // if(element % 2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return element % 2 === 0
}
console.log(isEven(2));

var isPrime = (element) => {
    return element % 2 === 0
}
console.log(isPrime(3));

var resultOdd = [1,3,5,6,7].every((e) => {
    return e % 2 ===0
});
console.log(resultOdd);

// fills the same value at every element
// also we can give a range
var testArray = [1,2,3,4,5,6,7,8];
console.log(testArray.fill("r",3));

// to filter out 
const myNumber = [23,45,56,67,78,89,90,12];
const output = myNumber.filter((num) => num < 78);
console.log(output);

// this gives output between the given range (slice)
var users = ["ted","tim","ton","Sam","Sor","Sod"];
console.log(users.slice(1,3));

// in splice it has a start cound and then the number of things to be deleted and then what is to be added there
users.splice(1,3,"Hi","hello");
console.log(users);

// objects
var hello = {
    firstName: "Rajeev",
    lastname: "Krishna",
    role: "admin",
    loginCount: 45,
    loginFacebook: true,
    courseList:[],
    buyCourse: function (courseName){
        this.courseList.push(courseName)
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
};
var courseList = true;
console.log(hello.getCourseCount());
hello.buyCourse("React Js course");
hello.buyCourse("Angular JS course");
console.log(hello.getCourseCount());

// console.log(hello.firstName);
// shows data in tabular form
// console.table(hello);

// this is for loops
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

const myStates = ["Rajasthan","Delhi","Bengal",89,"Chennai","Assam","Haryana"];

// for(let i = 0; i < myStates.length; i++){
//     if(typeof myStates[i] !== "string") continue;
//     console.log(myStates[i]);
// }

// this is while loop
// let i = 0;
// while(i<myStates.length){
//     console.log(myStates[i]);
//     i++;
// }

// let i = 0;
// do {
//     console.log(myStates[i]);
//     i++;
// }while(i < myStates.length);

// an array based loop is forEach()
// myStates.forEach((s) => (console.log(s)) );

const names = ["Youtube" , "Facebook" , "Instagram" , "Netflix" , "Amazon"];
// for of loop
for(const n of names){
    console.log(n);
}

// for in loop for objects
const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
    lco : "LearnCodeOnline.in"
}
for(const n in symbols){
    console.log(`The key is : ${n} and value is : ${symbols[n]}`);
}

var counter = document.querySelector(".num");
var follower = document.querySelector(".follow");
let count = 1;
setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerText = count;
    }
},1);

setTimeout( () => {
    follower.innerText = "Followers on Instagram";
},4500);
