console.log("Start");

// Asynchronous function with a callback
function asynchronousFunction(callback) {
    setTimeout(function () {
        console.log("Processing...");
        callback();
    }, 1000);
}

asynchronousFunction(function () {
    console.log("Callback executed");
});

console.log("End");
