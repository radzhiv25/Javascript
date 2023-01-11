const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBgColor = (selectedColor) => {
    return window.getComputedStyle(selectedColor).backgroundColor;
}
// console.log(getBgColor(pink));

// var orangeColor = getBgColor(orange);
// orange.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = orangeColor;
// })

// var color = getBgColor(pink);
// pink.addEventListener('click', () => {
//     center.style.backgroundColor = color;
// })

var magicColorChange = (element,color) => {
    return element.addEventListener('click', () => {
        return center.style.backgroundColor = color;
    })
}

magicColorChange(red,getBgColor(red));
magicColorChange(cyan,getBgColor(cyan));
magicColorChange(violet,getBgColor(violet));
magicColorChange(orange,getBgColor(orange));
magicColorChange(pink,getBgColor(pink));