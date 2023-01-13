const courses = [
    {
        name: "Complete React Js course",
        price: "Rs 500"
    },
    {
        name: "Complete Angular Js course",
        price: "Rs 600"
    },
    {
        name: "Complete Vue Js course",
        price: "Rs 600"
    },
    {
        name: "Complete C++ Js course",
        price: "Rs 300"
    },
]

function generateList (){
    const ul = document.querySelector('.list-group')
    courses.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name)
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-end");

        const price = document.createTextNode(course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}
generateList();