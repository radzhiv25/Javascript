let userEmail = 'Radzhiv123';
let password = '1234' ;

let userCheck = (myString) => {
    if((myString.includes(123)) && (myString.length > 6)){
        return true;
    }
    else{
        return false;
    }
}
let passCheck = (pass) => {
    if((pass.includes(123)) && (pass.length > 8)){
        return true;
    } 
}
console.log(userCheck(userEmail));
console.log(passCheck(password));