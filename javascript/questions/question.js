// check if a number is even or odd
// find the largest of three numberes
// check if a number is positive , negative or zero
//swap two numbers using a third variable
// compare two numbers and print their relationship

// 1
// let num = prompt("enter a number ");

// if (num % 2 == 0) {
//   alert(`${num} number is even number`);
// } else {
//   alert(`${num} number is odd`);
// }

//2
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// if (num1 > num2 && num1 > num3) {
//   alert(`${num1} is greater`);
// } else if (num2 > num1 && num2 > num3) {
//   alert(`${num2} is greater`);
// }
// if (num3 > num1 && num3 > num2) {
//   alert(`${num3} is greater`);
// } else {
//   alert("all number are equal");
// }

// 3
// let number = prompt("enter any number :")

// if (number>0){
//   alert("numver is positive");
// }else if(number<0){
//   alert("number is negative ")
// }else{
//   alert("number is zero ")
// }

//4

// let a=10;
// let b=20;
// let temp;

// temp=a;
// a=b;
// b=temp

// let n = 5;
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }
// console.log(fact);

//armstrong number

// let num = 153;
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//   let rem = temp % 10;
//   sum = sum + (rem ** 3);
//   temp = Math.floor(temp / 10);
// }

// if(num==sum){
//   console.log("armstrong number ")
// }

// fibonacci series
// num = 10;
// let a = 0;
// let b = 1;
// let sum;

// for (let i = 0; i < num; i++) {
//   console.log(a);
//   sum = a + b;
//   a = b;
//   b = sum;
// }


// palindrome 

let n= 1221;
let temp=n;
let revNum=0

while(n>0){
  let lastDigit = n%10;
  revNum = (revNum * 10) + lastDigit;
  n=Math.floor(n/10)
}

if(revNum==temp){
  console.log("palindrome number ")
}else{
  console.log("not a plaindrome")
}
