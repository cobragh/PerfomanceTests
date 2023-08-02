# Fetch Data and Measure Execution Time

This project demonstrates how to fetch data from multiple URLs using JavaScript's `fetch` API and measure the execution time of each request as well as the total execution time.

## How it works

The project consists of three async functions `fetch1()`, `fetch2()`, and `fetch3()`, each performing a GET request to a different URL using the `fetch` API. The goal is to measure the time taken for each individual request.

### Individual Performance

The individual performance of each fetch function is measured using the `performance.now()` method. The `start` timestamp is recorded before making the fetch call, and the `end` timestamp is recorded after the response is received. The difference between `end` and `start` gives the time taken for each fetch call.

### Total Execution Time

The total execution time is measured using the `performance.now()` method as well. The overall process is timed from the beginning of the `fetchData()` function to the end, after all individual fetch requests are completed.

## How to use

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Open the browser's developer console to view the individual performance and total execution time of each fetch request.

## URLs

The project uses the following URLs for fetching data:

1. `https://jsonplaceholder.typicode.com/todos`
2. `https://jsonplaceholder.typicode.com/users`
3. `https://dummyjson.com/products`

## Notes

- The project utilizes async/await and `Promise.all()` to fetch data asynchronously and measure performance more efficiently.
- The measured performance timestamps are in milliseconds (ms).
