var btn = document.querySelector(".btn");
var num = document.querySelector("#num");
let at = document.querySelector(".at");
let bt = document.querySelector(".at");
// let num1 = prompt("Enter the value ");
let num1;
let prom = () => {
    setTimeout(() => {
        return num1 = prompt("Enter the value: ");
    },2000);
}
let atp = () => {
    setTimeout(() => {
        return at = document.querySelector('.at').innerText = "You have entered: " + num1;
    },4000)
}
btn.addEventListener("click", (num) => {
    return document.querySelector('#num').value = Math.round((Math.random()*num1));
})
atp();
prom();