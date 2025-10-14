let student = {
  name: "lokesh",
  age: 22,
  cgpa: 8,
  course: "mca",
};

for (let val in student) {
  console.log(`${val} = ${student[val]}`);
}
