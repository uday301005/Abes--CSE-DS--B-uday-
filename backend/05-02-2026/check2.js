function mufunction() {
    console.log("Starting a task ...");
    
    setTimeout(() => {
        let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += i;
    }
    console.log("Task completed. Sum:", sum);
    }, 0);
     
}
console.log("Before calling mufunction");
let result = mufunction();
console.log("After calling mufunction. Result:", result);