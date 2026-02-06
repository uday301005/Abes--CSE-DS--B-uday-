function mufunction() {
    console.log("Starting a task ...");

   
    let sum = 0;
    for (let i = 0; i < 100000000000000000000000000; i++) {
        sum += i;
    }
    console.log("Task completed. Sum:", sum);
    return sum;
}
console.log("Before calling mufunction");
let result = mufunction();
console.log("After calling mufunction. Result:", result);