let name ='Eduardo';
var Name= "Loor"
const STUDENT_ID='101503932';

const PI=3.14;
let btname='Sue';
let firstName = 'John';

console.log(firstName);
console.log(PI)

firstName = 'Dave';

console.log(firstName);

// PI=10; this is not allowed

let a=5; //number
let b= 'hello world'; //string
let c=true; //boolean
let d=null; //null
let e; //undefined

console.log(5+6);
a=6;
b=5;
console.log(a+b+5);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

let num = prompt('enter a number:');

document.write('<br>'+num);
document.write('<br>'+num%2);

let total=a+b+5;
document.write('<br>'+total);

let s1="hello";
let s2="world";
let s3="<br>";
console.log(s1+s2);
console.log(s1+ " "+s2);
document.write(s3+s1+" "+ s2);

let s4=s3+s1+" "+ s2;
document.write(s4);

s4= '${s3} ${s1}____${s2}'
document.write(s4);

let s5=5;
let s6='5';
document.write(s3);
document.write (s5+s6);
document.write(s3);
document.write (s5*s6);
document.write(s3);
document.write (s5/s6);

document.write (s3);
document.write(s5+parseInt(s6));
document.write (s3);

num= parseFloat(prompt('please enter a number:')); //we use to calculate values (delete parsefloat
document.write(num + num);

let flag=confirm('Do you want a drink?')

if (flag == true)
    document.write(s3+ 'Ok, here is your drink.')
if (flag == false)
    document.write('<p> Ok, be that way. NO drink for you.</p>');

document.write(s3+s3+s3+s3+s3);

