const courses = [
    {
        name: "Complete React Js course",
        price: "500"
    },
    {
        name: "Complete Angular Js course",
        price: "400"
    },
    {
        name: "Complete Vue Js course",
        price: "600"
    },
    {
        name: "Complete C++ Js course",
        price: "300"
    },
    {
        name: "Complete Backend Course",
        price: "800"
    }
]

function generateList (){
    const ul = document.querySelector('.list-group');
    ul.innerHTML = "";
    courses.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name)
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-end");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}
// generateList();

window.addEventListener("load", generateList);

const button1 = document.querySelector(".sort-btn1");
button1.addEventListener("click", ()=> {
    courses.sort((a,b) => a.price - b.price )
    generateList();
});

const button2 = document.querySelector(".sort-btn2");
button2.addEventListener("click", () => {
    courses.sort((a,b) => b.price - a.price);
    generateList();
});