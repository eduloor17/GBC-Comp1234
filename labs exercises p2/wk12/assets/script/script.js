let Menu='';
let total;
let flag=true;
let num1_flag=true;
let num2_flag=true;

Menu = prompt('Menu \n 1. +(Addition) \n 2. -(Subtraction) \n 3. *(Multiplication) \n 4. /(Division) \n (valid inputs + - * /)');
while(flag===true){
    if((Menu=='+') || (Menu=='-') || (Menu=='*') || (Menu=='/')){
        console.log(Menu);
        flag=false;
    } else {
        alert('Wrong input. Please enter valid inputs (+ - * /)');
        Menu = prompt('Menu \n 1. +(Addition) \n 2. -(Subtraction) \n 3. *(Multiplication) \n 4. /(Division) \n (valid inputs + - * /)');
        console.log(Menu);
    }
}

let Number1 = parseFloat(prompt("Enter the first number:"));
while(num1_flag===true) {
    if (!isNaN(Number1)) {
        // console.log('This is a number'+Number1); // Number is not NaN
        num1_flag = false;
    } else {
        console.log('This is not a number' + Number1); // Number is NaN
        alert('Wrong input. Please enter again the number');
        Number1 = parseFloat(prompt("Enter the first number:"));
    }
}
let Number2 = parseFloat(prompt("Enter the second number:"));
while(num2_flag===true) {
    if (!isNaN(Number2)) {
        // console.log('This is a number'+Number1); // Number is not NaN
        num2_flag = false;
    } else {
        console.log('This is not a number' + Number2); // Number is NaN
        alert('Wrong input. Please enter again the number');
        Number2 = parseFloat(prompt("Enter the second number:"));
    }
}
if (Menu=='+') {
    // Addition
    total = Number1 + Number2;
    console.log(Number1 + '+' + Number2 + '=' + total);
    document.write("<strong>"+Number1 + ' + ' + Number2 + ' = ' + total);
} else if (Menu == '-') {
    // Subtraction
    total = Number1 - Number2;
    //console.log(Number1 +'-'+Number2+ '=' + total);
    document.write("<strong>"+Number1 + ' - ' + Number2 + ' = ' + total);
} else if (Menu == '*') {
    // Multiplication
    total = Number1 * Number2;
    //console.log(Number1 +'*'+Number2+ '=' + total);
    document.write("<strong>"+Number1 + ' * ' + Number2 + ' = ' + total);
} else if (Menu == '/') {
    // Division
    total = Number1 / Number2;
    //console.log(Number1 +'/'+Number2+ '=' + total);
    document.write("<strong>"+Number1 + ' / ' + Number2 + ' = ' + total);
}