// check if a number is even or odd
// find the largest of three numberes
// check if a number is positive , negative or zero
//swap two numbers using a third variable
// compare two numbers and print their relationship

// 1
let num = prompt("enter a number ");

if (num % 2 == 0) {
  alert(`${num} number is even number`);
} else {
  alert(`${num} number is odd`);
}

//2
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
  alert(`${num1} is greater`);
} else if (num2 > num1 && num2 > num3) {
  alert(`${num2} is greater`);
}
if (num3 > num1 && num3 > num2) {
  alert(`${num3} is greater`);
} else {
  alert("all number are equal");
}

// 3 
let number = prompt("enter any number :")

if (number>0){
  alert("numver is positive");
}else if(number<0){
  alert("number is negative ")
}else{
  alert("number is zero ")
}

//4

let a=10;
let b=20;
let temp;


temp=b;
