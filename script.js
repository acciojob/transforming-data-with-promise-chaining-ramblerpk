document.getElementById('btn').onclick = function() {
    const inputValue = parseInt(document.getElementById('ip').value);
    // Call the function to start the promise chain
    processInput(inputValue);
};
function processInput(value) {
    // Initial promise
    new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('output').innerHTML = `Result: ${value}`;
            resolve(value);
        }, 2000);
    })
    // Second promise: Multiply by 2
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result * 2;
                document.getElementById('output').innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 2000);
        });
    })
    // Third promise: Subtract 3
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result - 3;
                document.getElementById('output').innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })
    // Fourth promise: Divide by 2
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result / 2;
                document.getElementById('output').innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })
    // Fifth promise: Add 10
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const finalResult = result + 10;
                document.getElementById('output').innerHTML = `Final Result: ${finalResult}`;
                resolve(finalResult);
            }, 1000);
        });
    });
}