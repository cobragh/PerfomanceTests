let url1 = `https://jsonplaceholder.typicode.com/todos`;
let url2 = `https://jsonplaceholder.typicode.com/users`;
let url3 = `https://dummyjson.com/products`;

async function fetch1() {
  try {
    // First fetch
    let start = performance.now();
    const response = await fetch(url1);
    let end = performance.now();
    const data = await response.json();
    let performanceTimeStamp = end - start;
    return performanceTimeStamp;
  } catch (error) {
    console.log(error);
  }
}

async function fetch2() {
  try {
    // Second fetch
    let start = performance.now();
    const response = await fetch(url2);
    let end = performance.now();
    const data = await response.json();
    let performanceTimeStamp = end - start;
    return performanceTimeStamp;
  } catch (error) {
    console.log(error);
  }
}

async function fetch3() {
  try {
    let start = performance.now();
    const response = await fetch(url2);
    let end = performance.now();
    const data = await response.json();
    let performanceTimeStamp = end - start;
    return performanceTimeStamp;
  } catch (error) {
    console.log(error);
  }
}

// First method
async function fetchData() {
  try {
    let start = performance.now();
    let response1 = await fetch1();
    let response2 = await fetch2();
    let response3 = await fetch3();
    let end = performance.now();
    console.log(`Individual Perfomance (fetch1): ${response1} ms`);
    console.log(`Individual Perfomance (fetch2): ${response2} ms`);
    console.log(`Individual Perfomance (fetch3): ${response3} ms`);
    console.log(`Execution time: ${end - start} ms`);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

async function fetchData2() {
  try {
    let start = performance.now();
    const [response1, response2, response3] = await Promise.all([
      fetch1(),
      fetch2(),
      fetch3(),
    ]);
    let end = performance.now();
    console.log(
      `Individual Perfomance (fetch1) (Promise all method): ${response1} ms`
    );
    console.log(
      `Individual Perfomance (fetch2) (Promise all method): ${response2} ms`
    );
    console.log(
      `Individual Perfomance (fetch3) (Promise all method): ${response2} ms`
    );
    console.log(`Execution time (Promise All method): ${end - start} ms`);
  } catch (error) {}
}
fetchData2();
