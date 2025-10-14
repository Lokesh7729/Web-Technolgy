/*•	A year is a leap year if:
	•	It is divisible by 4 and not divisible by 100, or
	•	It is divisible by 400. */

let year = prompt("enter year to check if it is leap year or not ");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert("leap year ");
} else {
  alert("not a leap year");
}
