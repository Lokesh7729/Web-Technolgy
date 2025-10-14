let randNumber = Math.floor(Math.random() * 50) + 1;
console.log(randNumber);
let value = false;

while (value == false) {
  let num = prompt("enter a number between 1 - 50 :");

  if (randNumber == num) {
    alert(" You won !");
    value = true;
  } else if (randNumber > num) {
    alert(" guess higher   ");
  } else if (randNumber < num) {
    alert("guess smaller ");
  }
}
