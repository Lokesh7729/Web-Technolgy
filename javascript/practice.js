// Promise
let promise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result));

// Async/Await
async function fetchData(){
  let data = await promise;
  console.log(data);
}
fetchData();