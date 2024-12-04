let total=0;
let flag=true;
let operation;
let number1;
let number2;
while(flag===true){
    operation=prompt('Menu \n 1. + \n 2. - \n 3. * \n 4. /');
    //console.log(operation);
    if((operation==='+') || (operation==='-') || (operation==='*') || (operation==='/')){
        flag=false;
    } else {
        alert('Wrong input. Please enter valid inputs (+ - * /).');
    }
}
while(flag===false) {
    number1=parseFloat(prompt('Please enter the first number: '));
    if (!isNaN(number1)) {
        // console.log('This is a number'+number1); // number1 is not NaN
        flag = true;
    } else {
        //console.log('This is not a number' + number1); // number1 is NaN
        alert('Wrong input. Please enter again the first number.');
    }
}
while(flag===true) {
    number2=parseFloat(prompt('Please enter the second number: '));
    if (!isNaN(number2)) {
        // console.log('This is a number'+number2); // number2 is not NaN
        flag = false;
    } else {
        //console.log('This is not a number' + number2); // number2 is NaN
        alert('Wrong input. Please enter again the second number.');
    }
}
switch(operation) {
    case '+':
        total=number1+number2;
    break;
    case '-':
        total=number1-number2;
    break;
    case '*':
        total=number1*number2;
    break;
    case '/':
        total=number1/number2;
    break;
    default:
        displayTotal_Element.innerText += " " + "the operation is wrong, please try again!";
}
let displayTotal_Element= document.getElementById("displayTotal");
displayTotal_Element.style.padding="0 40px";
displayTotal_Element.style.color="blue";
displayTotal_Element.innerText += " " + number1 + " " + operation + " " + number2 + " = " + total;